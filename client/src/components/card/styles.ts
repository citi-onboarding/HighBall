import styled from 'styled-components';
import {CardBackground} from "../../assets"

export const Container = styled.div`
  width: 220px;
  height: 222.95px;
  background: #FFFFFF;
  box-shadow: 0px 5.90604px 14.7651px hsla(0, 0%, 0%, 0.1);
  border-radius: 29.5302px;
  margin-bottom: 86px;
  margin-top: 150px;
  margin-left: 25px;
  background: url(${CardBackground});
  background-size: 100% 100%;
  display:flex;
  justify-content: center;
  flex-direction: column;
  overflow:visible;
  justify-content: flex-end;
`
export const Product = styled.img`
  max-height: 160px;
  float:right;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  margin-bottom: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  text-align: center;  
  color: #232323;
`

export const Description = styled.p `
  margin-bottom: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #232323;

`