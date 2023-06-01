import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { buscar } from '../api/api'
import '../HomeCarrusel/VideoCard/videocard.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
    width: 900px;
    margin: 30px auto;
`

const Flex = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const StyleMiniatura = styled.div`
display: flex;
padding: 10px;
width: 300px;
`

const Miniatura = styled.img`
width: 100%;
`
const H2 = styled.h2`
display: flex;
flex-wrap: wrap;
`

const VideoCategoria = ({ url }) => {

    const [categoria, setCategoria] = useState([]);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        buscar(`/categorias/${id}`, setCategoria);
        buscar("/videos", setVideos);
    }, [id]);

    return (
        <main>
            <Section>
                <h1>{categoria.nombre}</h1>
                <p>{categoria.texto}</p>

                <Flex> {videos.filter((video) => video.categoria === categoria.nombre)
                    .map((video, id) => (
                        <div key={id}>
                            <StyleMiniatura>
                                <Link to={`/videos/${video.id}`} > <Miniatura src={video.thumbnail} alt={video.titulo} /></Link>
                            </StyleMiniatura>
                            <H2>{video.titulo}</H2>
                            <p>{video.descripcion}</p>
                        </div>

                    ))}

                </Flex>
            </Section>
        </main>
    );
}

export default VideoCategoria;