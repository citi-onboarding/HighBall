import React from "react";
import { Container, IconImage } from "./styled";


export default function Icon({ icon, name, link }: { icon: string, name: string, link: string }){
    return(
        <Container href = {link}>
            <IconImage src={icon} alt={name}/>
        </Container>
    )
    



 
}    