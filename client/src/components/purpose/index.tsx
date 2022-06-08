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
  purpose: string,
  description: string,
}


export function Purpose(){
  const [infos, setInfos] = useState<PurposeAPI[]>();

  const getInfos = async () => {
    const res = await axios.get('http://localhost:3001/purpose')
    const { data } = res;
    setInfos(
      data
    )
    console.log(infos)
  }

  useEffect(() => {
    getInfos();
  }, [])

    console.log(infos)

  return(
    <About>
      <Container>
        <SideImages>
        <img src={PurpuseBubbles} alt="Imagem de pessoas segurando copos" />
        </SideImages>
        <Content>
          <Title>
            {infos[0].purpose}
        
          </Title>
          <Description>
            {infos[0].description}
      
          </Description>
        </Content>
      </Container>
    </About>
    
  );

}