const nodemailer = require("nodemailer");

const mailModel = async (req, res) => {
    try {
        const senderDetails = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const { to, subject, text } = req.body;

        const mailOptions = {
            from: process.env.EMAIL,
            to,
            subject,
            text,
        };

         senderDetails.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ error: error.toString() });
            }
            res.status(200).json({ message: "Email sent successfully", info: info.response });
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.toString() });
    }
};

module.exports = mailModel;
