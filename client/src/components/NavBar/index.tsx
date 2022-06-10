import React from "react";
import { Nav , Options, Bold,Link,Button, Logo, Container, A} from "./style";
import {vector  } from "../../assets";

export const NavBar =  () => {
    return(      
        <Nav>
            <Container>
                <Logo>HighBall</Logo>
                <Options>
                    <A href="#about"><Link>Início</Link></A>
                    <A href="#purpose"><Link>Propósito</Link></A>
                    <A href="#catalog"><Link>Catálogo</Link></A>
                    <Button href="">
                        Encomenda
                        <img src={vector} alt="imagem de uma sacola de compras" />
                    </Button>
                </Options>
            </Container>  
        </Nav>

        
    );

};