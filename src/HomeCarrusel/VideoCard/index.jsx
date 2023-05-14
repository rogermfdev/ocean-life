import styled from "styled-components";



const Card = styled.div`
    background-size: cover; /* La imagen se ajusta al tamaño del contenedor cubriendo toda el área posible */
  background-repeat: no-repeat; /* Se evita que la imagen se repita en el contenedor */
  background-position: center; /* Se centra la imagen en el contenedor */
`



// const obtenerId = ($url) => {
//     const partes = $url.split("v="); // Divide la URL por la cadena "v="
//     // const partes = $url.split("/"); // Divide la URL por la cadena "v="
//     console.log("ID: ", partes [1]);
//     return(partes[1]);
//   }

// const videID = obtenerId("https://www.youtube.com/watch?v=J2UK7kRNRmY");
// const videID2 = obtenerId("https://www.youtube.com/watch?v=szg3dIZ8xDc");
// const videID3 = obtenerId("https://www.youtube.com/watch?v=r9PeYPHdpNo");
// const videID4 = obtenerId("https://www.youtube.com/watch?v=9FqwhW0B3tY");
// const videID5 = obtenerId("https://www.youtube.com/watch?v=gv4H30L1nXA");



// const titulosVideos = datosIniciales.videos.map(video => video.id);
// console.log(titulosVideos); // ['Título del video 1', 'Título del video 2', 'Título del video 3']




// const VideoCard = () => {


//     return (
//         <Card>
//             {datosIniciales.videos.map((video) => video.id;
//             <Miniatura src={`https://i.ytimg.com/vi/${videID}/maxresdefault.jpg`} alt="Documental" key={index}/>
//             )}
//         </Card>)
// }

// export default VideoCard;


const VideoCard = () => {
    return (
        <Card />
            
    );
}

export default VideoCard;
