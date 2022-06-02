import React from "react";
import { Nav , Options, Bold, Light, Package, White, Logo } from "./style";
import { highBall, vector  } from "../../assets";

export const NavBar =  () => {
    return(

        <Nav>
            <Logo src={highBall}/>
            <Options>
                <Bold>Início</Bold>
                <Light>Propósito</Light>
                <Light>Catálogo</Light>
                <Package>
                    <White>Encomenda</White>
                    <img src={vector} alt="imagem de uma sacola de compras" />
                </Package>
            </Options>
            
        </Nav>

        
    );

};
