import React from "react";

import Placeholder from "./placeholder.svg"


import {
  Container,
  Description,
  Title,
  Product
} from './styles'

export function Card(){
  return(
    <Container>
      <Product src={Placeholder} alt="" />
      <Title>Copo de refri</Title>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Description>
    </Container>
  )
}
