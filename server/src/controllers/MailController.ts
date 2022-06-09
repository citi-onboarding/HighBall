import { MailServer } from "src/services/MailServer";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

const SendMail = async (request: Request, response: Response) => {
    try {
        const{name, email, message} = request.body;
        await MailServer ({
            destinationUser: process.env.EMAIL_WILL_RECEIVE,
            subjectText: 'assunto do email',
            html0ption: `<p> 
                Usuário ${name} de email ${email} enviou a mensagem ${message}
            </p>`
        })

        return response.status(200).send({
            answer: "Enviado"
        })
    } catch (error) {
        return response.status(500).send({
            answer: "Não enviado"
        })
    }
}

export {
    SendMail
}