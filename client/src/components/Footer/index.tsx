import React from "react";
import { Facebook, grupo1, grupo17,Instagram, vector15, Youtube } from "../../assets";
import { Rodape, Texto,Barra, Descricao, Imagem,RedesSociais, LogoRedesSociais, Insta, Face, Youtb, Creditos, TextoCreditos,CitiLogo, Container } from "./style"; 

export const Footer =  () => {
    return(      
       <Rodape>
           <Container>
                <Texto>
                    <Imagem src={grupo1}></Imagem>
                    <Barra src={vector15}></Barra>
                    <Descricao>Somos uma empresa de design de copos personalizados<br/>que cria<b> experiências para cada gole</b> que você dá!</Descricao>
                </Texto>
                <RedesSociais>
                    <LogoRedesSociais>
                        <Insta src={Instagram}></Insta>
                        <Face src={Facebook}></Face>
                        <Youtb src={Youtube}></Youtb>
                    </LogoRedesSociais>
                    <Creditos>
                        <TextoCreditos>Made with
                            {' '}
                            <strong>&lt; &#x0002F; &gt;</strong>
                            {' '}
                            and
                            {' '}
                            <strong>&#10084;</strong>
                            {' '} by</TextoCreditos>
                        <CitiLogo src={grupo17}></CitiLogo>
                    </Creditos>
                </RedesSociais>
           </Container>
       </Rodape>
    );

};