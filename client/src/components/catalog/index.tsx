import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {Card} from "../../components"
import {
  Container,
  Carousel,
  Title,
  InnerContainer
} from './styles'
import { NextArrow } from "../../assets";
import { PrevArrow } from "../../assets";

type CardAPI = {
  title: string,
  description: string,
  image: string,
}


export function Catalog(){
  const SlickArrowNext = ({ currentSlide, slideCount, ...props }:any) => (
    <img src={NextArrow} alt="Next arrow" {...props} />
  );
  const SlickArrowPrev = ({ currentSlide, slideCount, ...props }:any) => (
    <img src={PrevArrow} alt="Previous arrow" {...props} />
  );

  const [infos, setInfos] = useState<CardAPI[]>();

  const getInfos = async () => {
    const res = await axios.get('https://api.github.com/users')
    const { data } = res;
    setInfos(
      data
    )
    console.log(infos)
  }

  useEffect(() => {
    getInfos();
  }, [])

  const numbers = [
    {title: "dixa p la", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,image:"arroz" },
    {title: "dixa p la", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,image:"arroz" },
    {title: "dixa p la", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,image:"arroz" },
    {title: "dixa p la", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,image:"arroz" }

  ];

  const settings = {
    centerMode:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows:1,
    centerPadding: '0px',
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
          {infos?.map((item:any, index:number) => (
            <Card
              key={index}
              {...item}
            />
          ))}  


        </Carousel>
      </InnerContainer>
    </Container>
  )
}