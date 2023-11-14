import nodemailer from "nodemailer";

const sendEmail = async (data:any) => {
    return new Promise((resolve,reject)=>{

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
            reject({ error: error.message });
        } else {
            resolve({ EmailSent: info.response });
        }
    });

}
}

export default sendEmail;
