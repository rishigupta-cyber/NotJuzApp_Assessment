const Quiz = require("../models/Quiz");

exports.submitQuiz = async (req, res) => {
    try {
        const existing = await Quiz.findOne({
            student: req.user.id,
            quizId: req.body.quizId
        });

        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Quiz already submitted"
            });
        }

        await Quiz.create({
            student: req.user.id,
            quizId: req.body.quizId,
            answers: req.body.answers
        });

        res.json({
            success: true,
            message: "Quiz submitted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Quiz submission failed"
        });
    }
};