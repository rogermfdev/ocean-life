// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
// import db from '../../db.json';

// const Section = styled.main`
//         margin: 30px;
//     `
// const Carrusel = styled.div`
//         margin-bottom: 30px;
//     `
// const H2 = styled.h2`
// display: flex;
// font-size: 1.5em;
// padding: 5px 10px;
// text-align: left;
// width: 15 %;
// color: #fff;
// `    

// const Texto = styled.p`
// display: absolute;
// margin-left: 10px;
// color: #000;
// `

// const Flex = styled.div`
// display: flex;
// align-items: center;
// ` 

// const StyleImg = styled.div`
// border: 3px;
// padding: 5px;
// `
// const Img = styled.img`
// width: 100%;
// `


// const SimpleSlider = () => {


//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };

//     return (
//         <Section>
//           {db.categorias.map((categoria, index) => (
//             <Carrusel key={index}>
//             <Flex>
//               <H2 style={{ background: categoria.colores }}>{categoria.nombre}</H2>
//               <Texto>{categoria.texto}</Texto>
//               </Flex>
//               <Slider {...settings}>
//                 {db.videos
//                   .filter((video) => video.categoria === categoria.nombre)
//                   .map((video, index) => (
//                    <StyleImg key={index} borderColor={categoria.colores}
//                    > 
//                         <Img
//                         src={video.thumbnail}
//                         alt={video.titulo}
                        
//                         />
//                     </StyleImg>
//                   ))}
//               </Slider>
//             </Carrusel>
//           ))}
//         </Section>
//       );
      
//   }

// export default SimpleSlider;



//CHAT GTP:


import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { buscar } from "../../api/api"
import { Link } from "react-router-dom";
import { BtnCat } from "../../componentes/Button";


const Section = styled.main`
  margin: 30px;
`

const Carrusel = styled.div`
  margin-bottom: 30px;
`

const H2 = styled.h2`
  display: flex;
  font-size: 1.5em;
  padding: 5px 10px;
  text-align: left;
  width: 15%;
  color: #fff;
`

const Texto = styled.p`
  display: absolute;
  margin-left: 10px;
  color: #000;
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




///





//ORIGINAL

// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
// import db from '../../db.json';

// const Section = styled.main`
//         margin: 30px;
//     `
// const Carrusel = styled.div`
//         margin-bottom: 30px;
//     `
// const H2 = styled.h2`
// display: flex;
// font-size: 1.5em;
// padding: 5px 10px;
// text-align: left;
// width: 15 %;
// color: #fff;
// `    

// const Texto = styled.p`
// display: absolute;
// margin-left: 10px;
// color: #000;
// `

// const Flex = styled.div`
// display: flex;
// align-items: center;
// ` 

// const StyleImg = styled.div`
// border: 3px;
// padding: 5px;
// `
// const Img = styled.img`
// width: 100%;
// `


// const SimpleSlider = () => {


//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };

//     return (
//         <Section>
//           {db.categorias.map((categoria, index) => (
//             <Carrusel key={index}>
//             <Flex>
//               <H2 style={{ background: categoria.colores }}>{categoria.titulo}</H2>
//               <Texto>{categoria.texto}</Texto>
//               </Flex>
//               <Slider {...settings}>
//                 {db.videos
//                   .filter((video) => video.categoria === categoria.titulo)
//                   .map((video, index) => (
//                    <StyleImg key={index} borderColor={categoria.colores}
//                    > 
//                         <Img
//                         src={video.thumbnail}
//                         alt={video.titulo}
                        
//                         />
//                     </StyleImg>
//                   ))}
//               </Slider>
//             </Carrusel>
//           ))}
//         </Section>
//       );
      
//   }

// export default SimpleSlider;



