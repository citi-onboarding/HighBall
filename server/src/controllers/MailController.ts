import { MailServer } from "src/services/MailServer";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

const SendMail = async (request: Request, response: Response) => {
    try {
        const{name, email, message} = request.body;
        await MailServer ({
            destinationUser: process.env.EMAIL_WILL_RECEIVE,
            subjectText: 'A HighBall tem uma nova mensagem',
            html0ption: `<p> 

                Olá, você recebeu um novo pedido através do formulário de contato! Veja abaixo o que foi enviado: <br/>
                <br/>

                Nome: ${name} <br/>
                E-mail: ${email} <br/>
                Qual ideia de copo você teve hoje? ${message}
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