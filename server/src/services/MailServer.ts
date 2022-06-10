import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

type EmailConfig = {
    destinationUser: string;
    subjectText: string;
    html0ption: string,
};

const MailServer = async ({
    destinationUser,
    subjectText,
    html0ption}: EmailConfig) => {
        
        const transporter = nodemailer.createTransport ({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,

            }    });

            await transporter.sendMail({
                from: process.env.EMAIL,
                to: destinationUser,
                subject: subjectText,
                html: html0ption
            });
    }

    export{
        MailServer
    }