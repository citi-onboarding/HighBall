import React from "react";
import { Nav , Options, Bold,Link,Button, Logo } from "./style";
import {vector  } from "../../assets";

export const NavBar =  () => {
    return(

        <Nav>
            <Logo>HighBall</Logo>
            <Options>
                <a href="http://"><Bold>Início</Bold></a>
                <a href="http://"><Link>Propósito</Link></a>
                <a href="http://"><Link>Catálogo</Link></a>
                <Button>
                    Encomenda
                    <img src={vector} alt="imagem de uma sacola de compras" />
                </Button>
            </Options>
            
        </Nav>

        
    );

};