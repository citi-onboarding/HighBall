import styled from 'styled-components';
import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import { CatalogBackground } from '../../assets';


export const Container = styled.section`
  background-position: center;
  background-size:100% 100%;
  background: url(${CatalogBackground});
  background-repeat: repeat-x;
  background-position: center;
`

export const InnerContainer = styled.div`
  width: 1126px;
  margin-left: auto;
  margin-right: auto;
  
`

export const Carousel = styled(Slider)`
  width: 935px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6px;
  background-color: white;



  .slick-slide{
    visibility: visible;
    transition: width 0.85s, height 0.85s, transform 0.85s;
    transform: scale(1);
    opacity: 0.4;
    transition: opacity 0.85s ease-in;
  }


  .slick-slide.slick-center {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.85s ease-out;

    transition: width 0.85s, height 0.85s, transform 0.85s;
    transform: scale(1.336622561112357);
  }

  
  
  .slick-dots {
    button { /*Hides old button*/
        display: none;
    }

    li{
      transition: width 0.85s, height 0.85s, transform 0.85s;
      width: 12px;
      height: 12px;
      border: 1px solid #6DADE4;
      border-radius: 80px;
      
    }
    .slick-active {
      transition: width 0.85s, height 0.85s, transform 0.85s;
      width: 20.57px;
      height: 12px;
      background: #6DADE4;
      border-radius: 80px;
    }
  }

  .slick-list{
    width: 874px;
    margin-left: auto;
    margin-right:auto;
  }

  .slick-arrow{
    height: 27.59px;
    width: 15.63px;
  }
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 44px;
  letter-spacing: 0.025em;
  color: #232323;
`