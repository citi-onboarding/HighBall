import styled from 'styled-components';
import { theme } from '../../styles/theme';
import background from '../../assets/blob.png'

export const About = styled.section`
  background-image: url(${background});
  background-position: center;
  background-size:100% 613px;
  background-repeat: no-repeat;
 
  
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 613px;
  width: 1126px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  justify-content: flex-end;

`;

export const SideImages = styled.aside`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 613px;
  border-radius: 5px;
  width: 573px;
  img{

  }
`;


export const Content = styled.div `
  width: 553px;
  
`

export const Title = styled.h2`
  font-size: 42px;
  color: #7B54C9;
  margin-bottom: 24px;
  font-family: 'Baloo 2', cursive;
  font-weight: 600;
`;

export const Description = styled.p `
  font-size: 18px;
  line-height: 22px;
  color: #232323;
  font-family: 'Baloo 2', cursive;
  font-weight: 400;
`


