import React from "react";
import {Card} from "../../components"
import {
  Container,
  Carousel,
  Title,
  InnerContainer
} from './styles'
import { NextArrow } from "../../assets";
import { PrevArrow } from "../../assets";

export function Catalog(){
  const SlickArrowNext = ({ currentSlide, slideCount, ...props }:any) => (
    <img src={NextArrow} alt="Next arrow" {...props} />
  );
  const SlickArrowPrev = ({ currentSlide, slideCount, ...props }:any) => (
    <img src={PrevArrow} alt="Previous arrow" {...props} />
  );
  
  const settings = {
    centerMode:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows:1,
    nextArrow: <SlickArrowNext/>,
    prevArrow: <SlickArrowPrev/>,
  };
  
  return(
    <Container>
      <InnerContainer>
        <Title>
          Catálogo
        </Title>
        <Carousel {...settings}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
          
        </Carousel>
      </InnerContainer>
    </Container>
  )
}