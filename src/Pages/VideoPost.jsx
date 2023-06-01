import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { buscar } from '../api/api';
import '../HomeCarrusel/VideoCard/videocard.css'
import obtenerId from "../HomeCarrusel/VideoCard/ObtenerID.js"

const VideoPost = ({ url }) => {

  const [video, setVideo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    buscar(`/videos/${id}`, setVideo);
  }, [id])

  const videoUrl = video.link ? `https://www.youtube.com/embed/${obtenerId(video.link)}` : '';

  return (
    <main className='mainVideo'>
      <section >
        <div className='content'>
    
          <div className="container">
            {video.link && <iframe className="responsive-iframe" src={videoUrl} allowFullScreen title="video documental"/>}
          </div>
          <h1 className='blanco'>{video.titulo}</h1>
          <p className='blanco'>{video.descripcion}</p>
        </div>
      </section>
    </main>
  );
}

export default VideoPost;