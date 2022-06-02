import React from "react";
import {Card} from "../../components"
import {
  Container,
  Carousel,
  Title,
  InnerContainer
} from './styles'
import RightArrow from "../../assets/nextArrow.svg"
import PrevArrow from "../../assets/prevArrow.svg"

export function Catalog(){
  const SlickArrowNext = ({ currentSlide, slideCount, ...props }:any) => (
    <img src={RightArrow} alt="Next arrow" {...props} />
  );
  const SlickArrowPrev = ({ currentSlide, slideCount, ...props }:any) => (
    <img src={PrevArrow} alt="Previous arrow" {...props} />
  );
  
  const settings = {
    centerMode:true,
    centerPadding: "30px",
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