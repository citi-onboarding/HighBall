import React from "react";
import { Container , MiniContainer, ImageCup, Texts, Text1, Text2, Text3, Click } from "./styles";
import { Cups } from "../../assets";


export const Contact =  () => {
    return(      
       <Container> 
           <MiniContainer>
                <ImageCup> <img src={Cups} alt="Copos coloridos" /> </ImageCup>
                <Texts>
                    <Text1> Realize sua encomenda! </Text1>
                    <Text2> Nome </Text2>
                    <Text2> Email </Text2>
                    <Text3> Qual ideia de copo você teve hoje? </Text3>
                    <Click><button> Encomendar </button></Click>
                </Texts>
                
           </MiniContainer>
       </Container>        
    );

};