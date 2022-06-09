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
    html0ption:})