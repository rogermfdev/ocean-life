// // import styled from "styled-components"
// // import { blanco, colorPrimario } from "../../UI/variablesCSS.jsx"
// // import React, { useContext } from "react";
// // import { CatContexto } from "../../Context";
// // import datosIniciales from "../../datos/datosIniciales.json";
// // import miniaturaProvisional from "../../assets/images/imgClip.jpg"
// // import { borderColor } from "@mui/system";
// // // import Slider from "react-slick";




// // const Box = styled.div`
// //         margin: 5px 5px;
// //         background: #000;
// //         border:none;

// //         @media only screen and (max-width: 600px) {

// //         display: flex;
// //         flex-direction: row;
// //         justify-content: center;
// //         }
// //     `

// // const H3 = styled.h3`
// //     display: relative;
// //     font-size: 1.5em;
// //     padding: 5px 10px;
// //     text-align: left;
// //     color:${blanco};
// //     `
// // // const Texto = styled.div`
// // //     display: absolute;
// // //     flex-direction: row;
// // //     justify-content: left;
// // // `


// // const StyleImg = styled.div`
// //     display: flex;
// //     flex-direction: row:
// //     flex-wrap: wrap;
// //     justify-content: center;
// //     margin: 20px;
// //     border: 4px solid;
// //     border-radius: 4px;
// //     `

// //     const Flex = styled.div `
// //     display: flex;

// //     `


// // const Imagen = styled.img`
// //     width: 100%;
// //     display: flex;
// //     justify-content: space-between;
// // `



// // const Categoria = () => {

// //     const categorias = useContext(CatContexto);

// //     // return (
// //     //     <>
// //     //         {categorias.map((categoria, index) => (
// //     //             <Box key={index}>
// //     //                <H3 style={{ background: categoria.colores}}>{categoria.titulo}</H3>
// //     //                 <Texto>{categoria.texto}</Texto>
// //     //             </Box>
// //     //         ))}
// //     //     </>
// //     // );

// //     return (<> {categorias.map((categoria, index) => (
// //                 <div key={index}>
// //                     <h3 style={{ background: categoria.colores }}>{categoria.titulo}</h3>
// //                     <p> {categoria.texto}</p>
// //                     <Flex>
// //                         {datosIniciales.map((video, index) => {
// //                             if (video.categoria === categoria.titulo) {
// //                                 return (
// //                                     <StyleImg key={index} style={{borderColor:categoria.colores}}>
// //                                        <Imagen src={miniaturaProvisional} />
// //                                     </StyleImg>
// //                                 );
// //                             }
// //                             return null;
// //                         })} </Flex>
// //                 </div>
// //             ))} </>
// //             );
// // };



// // export default Categoria;



// /// FUSIONADOS:



// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Slider from "react-slick";
// // import styled from "styled-components";
// // import datosIniciales from '../../datos/datosIniciales.json';
// // import Categoria from "../../componentes/Categoria";
// // // import miniaturaProvisional from "../../assets/images/imgClip.jpg"

// // const SimpleSlider = () => {

// //     const settings = {
// //         dots: true,
// //         infinite: true,
// //         speed: 500,
// //         slidesToShow: 3,
// //         slidesToScroll: 3,
// //         responsive: [
// //             {
// //                 breakpoint: 1024,
// //                 settings: {
// //                     slidesToShow: 3,
// //                     slidesToScroll: 3,
// //                     infinite: true,
// //                     dots: true
// //                 }
// //             },
// //             {
// //                 breakpoint: 600,
// //                 settings: {
// //                     slidesToShow: 2,
// //                     slidesToScroll: 2,
// //                     initialSlide: 2
// //                 }
// //             },
// //             {
// //                 breakpoint: 480,
// //                 settings: {
// //                     slidesToShow: 1,
// //                     slidesToScroll: 1
// //                 }
// //             }
// //         ]
// //     };



// //     const Box = styled.div`
// //     background: lightgreen; 
// //     height:300px;
// //     margin-right: 20px;
// //     margin: 10px;
// //   padding: 2%;
// //   display: flex;
// //    position: absolute;
// //   text-align: center;`


// //     //     const Htres = styled.h3`
// //     // // text-align: center; 
// //     // // background: #5f9ea0;
// //     // //     color: #fff;
// //     // //     font-size: 36px;
// //     // //     line-height: 100px;
// //     // //     margin: 10px;
// //     // //     padding: 2%;
// //     // //     position: relative;
// //     // //     text-align: center;`

// //     const Miniatura = styled.img`
// //     width: 100%;
// //     `
// //     const Carrusel = styled.div`
// //     background: #000;
// //     color:  #fff;
// // `


// //     //     return (


// //     //    <Carrusel>

// //     //         <Slider {...settings}>
// //     //             {datosIniciales.videos.map((video) => (
// //     //                 <Miniatura  datos={video} src={video.thumbnail} alt="Documental" key={video.categoria} />
// //     //             ))}
// //     //         </Slider>
// //     //         </Carrusel>
// //     //     );
// //     // }

// //     return (
// //         <Carrusel>
// //             <Slider {...settings}>
// //                 {/* <Categoria/>                     */}

// //             </Slider>
// //         </Carrusel>

// //     );
// // }


// // export default SimpleSlider;


// /// EMPIEZA AQUÍ



// import styled from "styled-components"
// import { blanco, colorPrimario } from "../../UI/variablesCSS.jsx"
// import React, { useContext } from "react";
// import { CatContexto } from "../../Context";
// // import datosIniciales from "../../datos/datosIniciales.json";
// // import miniaturaProvisional from "../../assets/images/imgClip.jpg"
// // import { borderColor } from "@mui/system";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const Carrusel = styled.section`
//         background: #000;
//         color:  #fff;
//         margin: 30px;
//     `

// const Box = styled.div`
//         background: lightgreen; 
//         height:300px;
//         margin-right: 20px;
//         margin: 10px;
//         padding: 2%;
//         display: flex;
//         position: absolute;
//         text-align: center;`


// const H3 = styled.h3`
// display: flex;
// font: size: 1.5em;
// padding: 5px 10px;
// text: align: left;
// color:${blanco};
// width: 15 %;
// `
// const Texto = styled.p`
// display: absolute;
// flex - direction: row;
// justify - content: left;
// `


// const StyleImg = styled.div`
// display: flex;
// flex - direction: row:
// flex - wrap: wrap;
// justify - content: center;
// margin: 20px;
// border: 4px solid;
// border - radius: 4px;
// `

// const Flex = styled.div`
// display: flex;
// width: 20px;
// height: 30px;
// `


// const Imagen = styled.img`
// height: 150px;
// display: flex;
// justify - content: space - between;
// `



// const SimpleSlider = () => {

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
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


//     const categorias = useContext(CatContexto);

//     // return (
//     //     <>
//     //         {categorias.map((categoria, index) => (
//     //             <Box key={index}>
//     //                <H3 style={{ background: categoria.colores}}>{categoria.titulo}</H3>
//     //                 <Texto>{categoria.texto}</Texto>
//     //             </Box>
//     //         ))}
//     //     </>
//     // );

//     return (
//         // <Carrusel>
//         //     {categorias.map((categoria, index) => (
//         //         <div key={index}>
//         //             <H3 style={{ background: categoria.colores }}>{categoria.titulo}</H3>
//         //             <Texto> {categoria.texto}</Texto>
//         //             <Slider {...settings}>
//         //                 <div> {bd.map((video, index) => {
//         //                     if (video.categoria === categoria.titulo) {
//         //                         return (
//         //                             <StyleImg key={index} style={{ borderColor: categoria.colores }}>
//         //                                 <Imagen src={video.thumbnail} />
//         //                             </StyleImg>
//         //                         );
//         //                     }
//         //                     return null;
//         //                 })}
//         //                 </div>
//         //             </Slider>
//         //         </div>
//         //     ))}
//         // </Carrusel>
//     // );
//     // return (
//     //     <Carrusel>
//     //             {categorias.map((categoria, index) => (
//     //                 <div key={index}>
//     //                     <H3 style={{ background: categoria.colores }}>{categoria.titulo}</H3>
//     //                     <Texto> {categoria.texto}</Texto>
//     //                    <Slider {...settings}>


//     //                       {datosIniciales.map((video, index) => {
//     //                             if (video.categoria === categoria.titulo) {
//     //                                 return (
//     //                                     <StyleImg key={index} style={{ borderColor: categoria.colores }}>
//     //                                         <Imagen src={miniaturaProvisional} />
//     //                                     </StyleImg>
//     //                                 );
//     //                             }
//     //                             return null;
//     //                         })}</Slider>
//     //                 </div>
//     //             ))}
//     //     </Carrusel>

//     // );
// }


// export default SimpleSlider;


