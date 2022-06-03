import React from 'react';
import { PurpuseBubbles } from '../../assets';
import {
  Container,
  SideImages,
  Content,
  Title,
  Description,
  About,
} from './styles';


export function Purpose(){
  return(
    <About>
      <Container>
        <SideImages>
        <img src={PurpuseBubbles} alt="Imagem de pessoas segurando copos" />
        </SideImages>
        <Content>
          <Title>
            Propósito
          </Title>
          <Description>
          Criada em 2021 por duas amigas com o intuito de dinamizar a arte de consumir bebidas, implementando e promovendo um design sofisticado e personalizado a cada gole, através de copos desenhados por especialistas.<br/><br/>Possuimos um portfólio amplo e em crescente modificação e estamos sempre disponiveis para sentar com os nossos clientes e desenhar a melhor solucao que se adeque a sua realidade e necessidade.
          </Description>
        </Content>
      </Container>
    </About>
    
  );

}