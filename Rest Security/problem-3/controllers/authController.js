const bcrypt = require("bcryptjs");
const speakeasy = require("speakeasy");
const User = require("../models/User");

/*
==========================
REGISTER USER
==========================
*/
exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Password strength check
        const strongPassword =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

        if (!strongPassword.test(password)) {
            return res.status(400).json({
                success: false,
                message:
                    "Password must contain uppercase, lowercase, number, special character"
            });
        }

        // Check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create MFA secret for instructors
        let mfaSecret = null;
        let mfaEnabled = false;

        if (role === "instructor") {
            const secret = speakeasy.generateSecret({
                name: `EduLearn:${email}`
            });

            mfaSecret = secret.base32;
            mfaEnabled = true;
        }

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            mfaSecret,
            mfaEnabled
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
                mfaEnabled: user.mfaEnabled
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Registration failed"
        });
    }
};

/*
==========================
LOGIN USER
==========================
*/
exports.login = async (req, res) => {
    try {
        const { email, password, token } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        /*
        ==========================
        Account Lock Check
        ==========================
        */
        if (
            user.lockUntil &&
            user.lockUntil > Date.now()
        ) {
            return res.status(403).json({
                success: false,
                message: "Account temporarily locked"
            });
        }

        /*
        ==========================
        Password Verification
        ==========================
        */
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            user.failedLoginAttempts += 1;

            if (user.failedLoginAttempts >= 5) {
                user.lockUntil =
                    Date.now() + 15 * 60 * 1000;
            }

            await user.save();

            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        /*
        ==========================
        MFA Check for Instructors
        ==========================
        */
        if (user.role === "instructor") {
            const verified = speakeasy.totp.verify({
                secret: user.mfaSecret,
                encoding: "base32",
                token
            });

            if (!verified) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid MFA token"
                });
            }
        }

        /*
        ==========================
        Reset failed attempts
        ==========================
        */
        user.failedLoginAttempts = 0;
        user.lockUntil = null;
        user.lastLogin = new Date();
        await user.save();

        /*
        ==========================
        Create Session
        ==========================
        */
        req.session.user = {
            id: user._id,
            role: user.role,
            email: user.email
        };

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: req.session.user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Login failed"
        });
    }
};

/*
==========================
LOGOUT USER
==========================
*/
exports.logout = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Logout failed"
            });
        }

        res.clearCookie("edulearn.sid");

        res.json({
            success: true,
            message: "Logged out successfully"
        });
    });
};