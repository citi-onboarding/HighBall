import React from "react";

import Placeholder from "./placeholder.svg"


import {
  Container,
} from './styles'

export function Card(){
  return(
    <Container>
      <img src={Placeholder} alt="" />
      <h3>Copo de refri</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </Container>
  )
}
