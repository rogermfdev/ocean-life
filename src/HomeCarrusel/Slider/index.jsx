import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { buscar } from "../../api/api"
import { Link } from "react-router-dom";
import { BtnCat } from "../../componentes/Button";
import { blanco } from "../../UI/variablesCSS";


const Section = styled.main`
  margin: 30px;
`

const Carrusel = styled.div`
  margin-bottom: 30px;
`

const Texto = styled.p`
  display: absolute;
  margin-left: 10px;
  color: ${blanco};
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const StyleImg = styled.div`
padding: 5px; 
`


const Img = styled.img`
  width: 100%;
  border: 3px solid ${props => props.borderColor};
`

const SimpleSlider = () => {
    const [categorias, setCategorias] = useState([]);
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        buscar("/categorias", setCategorias);
        buscar("/videos", setVideos);
      }, []);

  
  
    if (categorias.length === 0 || videos.length === 0) {
      return null; // Puedes mostrar un componente de carga mientras se obtienen los datos
    }


    const settings = {
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 1,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            };
  
    return (
      <Section>
        {categorias.map((categoria, index) => (

            
          <Carrusel key={index}>
            <Flex>    
         <Link to={`/categorias/${categoria.id}`}>
            <BtnCat style={{ background: categoria.colores }}><h3>{categoria.nombre}</h3></BtnCat>
        </Link>  
              <Texto>{categoria.texto}</Texto>
            </Flex>
            <Slider {...settings}>
              {videos
                .filter((video) => video.categoria === categoria.nombre)
                .map((video, index) => (
                  <StyleImg key={index} >
                        <Link to={`/videos/${video.id}`} >
                             <Img src={video.thumbnail} alt={video.titulo} borderColor={categoria.colores}/>
                        </Link>
                  </StyleImg>
                ))}
            </Slider>
          </Carrusel>
        ))}
      </Section>
    );
  };
  
  export default SimpleSlider;
