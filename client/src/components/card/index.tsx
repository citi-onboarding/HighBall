import React from "react";

import Placeholder from "./placeholder.svg"


import {
  Container,
  Description,
  Title,
  Product
} from './styles'

export function  Card({ login, description, image }: { login: string, description: string, image: string }) {
  return(
    <Container>
      <Product src={Placeholder} alt="" />
      <Title> {login}  </Title>
      <Description> {description} </Description>
    </Container>
  )
}
