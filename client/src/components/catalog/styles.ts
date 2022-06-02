import styled from 'styled-components';
import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'


export const Container = styled.section`
  background-position: center;
  background-size:100% 613px;
  background-repeat: no-repeat;
`

export const InnerContainer = styled.div`
  width: 1126px;
  margin-left: auto;
  margin-right: auto;
`

export const Carousel = styled(Slider)`
  width: 802px;
  margin-left: auto;
  margin-right: auto;
  
  .slick-dots {
    button { /*Hides old button*/
        display: none;
    }

    li{
      width: 12px;
      height: 12px;
      border: 1px solid #6DADE4;
      border-radius: 80px;
      
    }
    .slick-active {
      transition: width 0.5s, height 0.5s, transform 0.5s;
      width: 20.57px;
      height: 12px;
      background: #6DADE4;
      border-radius: 80px;
    }
  }
`

export const Card = styled.div`
  width: 220px;
  height: 222.95px;
  left: 1084px;
  top: 1456.05px;
  background: #FFFFFF;
  box-shadow: 0px 5.90604px 14.7651px rgba(0, 0, 0, 0.1);
  border-radius: 29.5302px;
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 44px;
  letter-spacing: 0.025em;
  color: #232323;
  margin-bottom:32px;

`