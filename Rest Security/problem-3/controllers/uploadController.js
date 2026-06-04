exports.uploadFile = async (req, res) => {
    res.json({
        success: true,
        message: "File uploaded securely",
        file: req.file.filename
    });
};