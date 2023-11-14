import nodemailer from "nodemailer";

const sendEmail = async (data:any) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vikaspatil2103b@gmail.com',
            pass: 'xilqjyzhongocyyx'
        }
    });

    var mailOptions = {
        from: 'vedhamGPT@gmail.com',
        to: "vikaspatil0021o@gmail.com",
        subject: 'verfication',
        text: data
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log({ error: error.message });
        } else {
            console.log({ EmailSent: info.response });
        }
    });
}

export default sendEmail;
