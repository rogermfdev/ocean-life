import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import datosIniciales from '../../datos/datos-iniciales.json';

const SimpleSlider = () => {

    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
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


const Box = styled.div`
    /* background: lightgreen; */
    height:300px;
    margin-right: 20px;
    margin: 10px;
  padding: 2%;
   position: relative;
  text-align: center;`


    //     const Htres = styled.h3`
    // // text-align: center; 
    // // background: #5f9ea0;
    // //     color: #fff;
    // //     font-size: 36px;
    // //     line-height: 100px;
    // //     margin: 10px;
    // //     padding: 2%;
    // //     position: relative;
    // //     text-align: center;`

    const Miniatura = styled.img`
    width: 100%;
    `
const Carrusel = styled.div`
     padding: 5rem;
    background: #000;
    color:  #fff;
     width: 100vw;
`


    return (
    

   <Carrusel>
        <Slider {...settings}>
            {datosIniciales.videos.map((video) => (
                <Miniatura  datos={video} src={video.thumbnail} alt="Documental" key={video.categoria} />
            ))}
        </Slider>
        </Carrusel>
    );
}
            
export default SimpleSlider;



// //CHAT GTP


// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import styled from "styled-components";
// import datosIniciales from '../../datos/datos-iniciales.json';
 
// const CarruselDeCategoria = ({ categoria }) => {
//     const settings = {
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 3,
//       speed: 500,
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

// const Carrusel = styled.div`
//     padding: 5rem;
//     background: #000;
//     color:  #fff;
//     width: 100vw;
// `

// const Miniatura = styled.img`
//    width: 100%;
//    `

// const Box = styled.div`
// background: lightgreen; */
//    height:300px;
//     margin-right: 20px;
//     margin: 10px;
//   padding: 2%;
//    position: relative;
//       text-align: center;`




// const category = datosIniciales.videos.map(video => video.categoria);



// console.log(category);
//   return (
//     <Carrusel>
//       <h2>{categoria}</h2>
//       <Slider {...settings}>
//         {category.map((video) => (
//           <Box >
//             <Miniatura datos={video} src={video.thumbnail} alt="Documental" key={video.id}/>
//           </Box>
//         ))}
//       </Slider>
//     </Carrusel>
//   );
// };

// export const SimpleSlider = () => {

//   return (
//     <div>
//       {datosIniciales.videos.map((categoria) => (
//         <CarruselDeCategoria categoria={categoria} key={categoria} />
//       ))}
//     </div>
//   );
// };

// export default SimpleSlider;