import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Facebook, grupo1, grupo17,Instagram, vector15, Youtube } from "../../assets";
import { Rodape, Texto,Barra, Descricao, Imagem,RedesSociais, LogoRedesSociais, Insta, Face, Youtb, Creditos, TextoCreditos,CitiLogo, Container } from "./style"; 
import Icon from '../Icon';
import { Card } from "../card";

type FooterAPI = {
    icon: string,
    name: string,
    link: string
}




export const Footer =  () => {
    const [infos, setInfos] = useState<FooterAPI[]>();

    const getInfos = async () => {
    const res = await axios.get('https://api.github.com/users')
    const { data } = res;
    setInfos(
        data
    )
    console.log(infos)
    }

    useEffect(() => {
    getInfos();
    }, [])
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
                        {infos?.map((item:any, index:number) => (
                            <Icon
                                key={index}
                                {...item}
                            />
                        ))}
                        <Insta src={Instagram}></Insta>
                        
                        
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