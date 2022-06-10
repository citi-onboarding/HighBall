import React from "react";
import { Container , Image } from "./styles";
import { CoposCirculos } from "../../assets";



export const About =  () => {
    return(      
       <Container id="about"> 
           <div>
           <h1>Com você <br/>
                 a cada gole</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus odio sit amet sollicitudin porta.</p>
           </div>
           <Image><img src={CoposCirculos} alt="Copos coloridos sobre círculos também coloridos" /></Image>
           
       </Container>        
    );

};