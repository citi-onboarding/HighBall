import styled from 'styled-components';
import {CardBackground} from "../../assets"

export const Container = styled.div`
  width: 220px;
  height: 222.95px;
  background: #FFFFFF;
  box-shadow: 0px 5.90604px 14.7651px hsla(0, 0%, 0%, 0.1);
  border-radius: 29.5302px;
  margin-bottom: 86px;
  margin-top: 134px;
  margin-left: auto;
  margin-right: auto;
  background: url(${CardBackground});
  background-size: 100% 100%;
  display:flex;
  justify-content: center;
  flex-direction: column;
  overflow:visible;
  justify-content: flex-end;
`
export const Product = styled.img`
  max-height: 180px;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  margin-bottom: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16.24px;
  line-height: 19.66px;
  text-align: center;  
  color: #232323;
`

export const Description = styled.p `
  margin-bottom: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 11.81px;
  line-height: 14.3px;
  text-align: center;
  color: #232323;

`