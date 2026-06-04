const Course = require("../models/Course");
const sanitizeHtml = require("sanitize-html");

exports.createCourse = async (req, res) => {
    try {
        const cleanDescription = sanitizeHtml(req.body.description, {
            allowedTags: ["b", "i", "em", "strong", "p", "ul", "li"]
        });

        const course = await Course.create({
            title: req.body.title,
            description: cleanDescription,
            instructor: req.user.id
        });

        res.status(201).json({
            success: true,
            course
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Course creation failed"
        });
    }
};

exports.getMyCourses = async (req, res) => {
    try {
        const courses = await Course.find({
            instructor: req.user.id
        });

        res.json({
            success: true,
            courses
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch courses"
        });
    }
};