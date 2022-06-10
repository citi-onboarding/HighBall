import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { PurpuseBubbles } from '../../assets';
import {
  Container,
  SideImages,
  Content,
  Title,
  Description,
  About,
} from './styles';

type PurposeAPI = {
  purpose?: string,
  description: string,
}


export function Purpose(){
  const [infos, setInfos] = useState<PurposeAPI >();
  

  const getInfos = async () => {
    const res = await axios.get('http://localhost:3001/purpose')
    const { data } = res;
    setInfos(
      data[0]
    )
    
  }

  useEffect(() => {
    getInfos();
  }, [])

  return(
    <About>
      <Container id="purpose">
        <SideImages>
        <img src={PurpuseBubbles} alt="Imagem de pessoas segurando copos" />
        </SideImages>
        <Content>
          <Title>

          {infos?.purpose}   
        
          </Title>
          <Description> 
          
          {infos?.description}   
      
          </Description>
        </Content>
      </Container>
    </About>
    
  );

}