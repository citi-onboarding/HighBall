import React from "react";
import { Nav , Options, Bold,Link,Button, Logo, Container, A} from "./style";
import {vector  } from "../../assets";

export const NavBar =  () => {
    return(      
        <Nav>
            <Container>
                <Logo>HighBall</Logo>
                <Options>
                    <A href="http://"><Link>Início</Link></A>
                    <A href="http://"><Link>Propósito</Link></A>
                    <A href="http://"><Link>Catálogo</Link></A>
                    <Button>
                        Encomenda
                        <img src={vector} alt="imagem de uma sacola de compras" />
                    </Button>
                </Options>
            </Container>  
        </Nav>

        
    );

};