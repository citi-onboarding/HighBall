import React, { useState } from "react";
import { Container , MiniContainer, ImageCup, Texts, Text1, Text2, Text3, Click } from "./styles";
import { Cups } from "../../assets";
import api from "../../services/api";


export const Contact =  () => {

    const [nameClient, setNameClient] = useState('');
    const [emailClient, setEmailClient] = useState('');
    const [messageClient, setMessageClient] = useState('');

    const SendMail = async (e) => {
        try {
            e.preventDefault ();
    
            await api.post ('email', {name: nameClient, email: emailClient, message: messageClient})
            alert ("Mensagem enviada com sucesso")
        } catch (error) {
            alert ("Houve um erro. Tente novamente.")
        }
    }

    return(      
       <Container id="contact" onSubmit={SendMail}> 
           <MiniContainer>
                <ImageCup> <img src={Cups} alt="Copos coloridos" /> </ImageCup>
                <Texts>
                    <Text1> Realize sua encomenda! </Text1>
                    <Text2
                        type="text" 
                        placeholder="Nome"
                        id="nome"
                        value={nameClient}
                        required
                        onChange={(e)=> {setNameClient(e.target.value);}}/>
                            
                    <Text2
                        type="text" 
                        placeholder="Email"
                        id="email"
                        value={emailClient}
                        required
                        onChange={(e)=> {setEmailClient(e.target.value);}}/> 
                        

                    <Text3
                        type="text" 
                        placeholder="Qual ideia de copo você teve hoje?"
                        id="nome"
                        value={messageClient}
                        required
                        onChange={(e)=> {setMessageClient(e.target.value);}}/> 
                
                    <Click> <button type="submit"> Encomendar </button></Click>
                </Texts>
           </MiniContainer>
       </Container>        
    );

};