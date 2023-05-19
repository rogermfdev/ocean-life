// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import styled from "styled-components";
// import datosIniciales from '../../datos/datosIniciales.json';
// import Categoria from "../../componentes/Categoria";
// import React, {useContext} from "react";
// import { CatContexto } from "../../Context";
// // import miniaturaProvisional from "../../assets/images/imgClip.jpg"

// const SimpleSlider = () => {

//     const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 3,
//             slidesToScroll: 3,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };



// const Box = styled.div`
//     background: lightgreen; 
//     height:300px;
//     margin-right: 20px;
//     margin: 10px;
//   padding: 2%;
//   display: flex;
//    position: absolute;
//   text-align: center;`


//     //     const Htres = styled.h3`
//     // // text-align: center; 
//     // // background: #5f9ea0;
//     // //     color: #fff;
//     // //     font-size: 36px;
//     // //     line-height: 100px;
//     // //     margin: 10px;
//     // //     padding: 2%;
//     // //     position: relative;
//     // //     text-align: center;`

//     const Miniatura = styled.img`
//     width: 100%;
//     `
// const Carrusel = styled.div`
//     background: #000;
//     color:  #fff;
// `
// const categorias = useContext(CatContexto);


//     return (
    

// //    <Carrusel>
// //          {categorias.map((categoria, index) => (
// //                 <div key={index}>
// //                     <h2 style={{ background: categoria.colores }}>{categoria.titulo}</h2>
// //                     <p> {categoria.texto}</p>
// //                 </div>)   )} 
// //         <Slider {...settings}>
// //             {datosIniciales.map((video, index) => (

// //                         if (video.categoria === categoria.titulo) {
// //                             return (
// //                                 <Miniatura  datos={video} src={video.thumbnail} alt="Documental" key={video.index} />

// //                             );
// //                         }
// //                         return null;
// //             ))}
// //         </Slider>
// //         </Carrusel>



// <Carrusel>
//   {categorias.map((categoria, index) => (
//     <div key={index}>
//       <h2 style={{ background: categoria.colores }}>{categoria.titulo}</h2>
//       <p>{categoria.texto}</p>
//       <Slider {...settings}>
//         {datosIniciales.map((video, index) => {
//           if (video.categoria === categoria.titulo) {
//             return (
//               <Miniatura
//                 datos={video}
//                 src={video.thumbnail}
//                 alt="Documental"
//                 key={video.index}
//               />
//             );
//           }
//           return null;
//         })}
//       </Slider>
//     </div>
//   ))}
// </Carrusel>


        
// //    <Carrusel>
// //          {categorias.map((categoria, index) => (
// //                 <div key={index}>
// //                     <h2 style={{ background: categoria.colores }}>{categoria.titulo}</h2>
// //                     <p> {categoria.texto}</p>
// //                 </div>)   )} 
// //         <Slider {...settings}>
// //             {datosIniciales.map((video, index) => (
// //                 <Miniatura  datos={video} src={video.thumbnail} alt="Documental" key={video.index} />
// //             ))}
// //         </Slider>
// //         </Carrusel>


//     );
// // }

//                 // return (
//                 // <Carrusel>
//                 // <Slider {...settings}>
//                 //     {/* <Categoria/>                     */}
                    
//                 // </Slider>
//                 // </Carrusel>

//                 // );


//                 }

            
// export default SimpleSlider;


/// CHAT GTP



import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import datosIniciales from '../../datos/datosIniciales.json';
import categorias from "../../datos/categorias.json"


const Section = styled.main`
        color:  #fff;
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
width: 15 %;
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

const SimpleSlider = () => {


    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
              <H2 style={{ background: categoria.colores }}>{categoria.titulo}</H2>
              <Texto>{categoria.texto}</Texto>
              </Flex>
              <Slider {...settings}>
                {datosIniciales
                  .filter((video) => video.categoria === categoria.titulo)
                  .map((video, index) => (
                    <img
                      datos={video}
                      src={video.thumbnail}
                      alt="Documental"
                      key={index}
                    />
                  ))}
              </Slider>
            </Carrusel>
          ))}
        </Section>
      );
      
  }

export default SimpleSlider;



