import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { buscar } from '../../api/api';



const VideoPost = ({url}) => {

    const [video, setVideo] = useState({});

    const {id} = useParams();

    useEffect(() => {
        buscar(`/videos/${id}`, setVideo);
    }, [id]);



    return (
        <section>
            <div>
                <h1>{video.titulo}</h1>
            </div>
        </section>






    //     <Card sx={{ maxWidth: 345 }}>
    //     <CardMedia
    //       sx={{ height: 140 }}
    //         image={video.thumbnail}
    //       title="green iguana"
    //     >
    //       {video.link}  
    //     </CardMedia>
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {video.id}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //       {video.descripcion}
    //       </Typography>
    //     </CardContent>
        
    //     <CardActions>
    //       <Button size="small">Compartir</Button>
    //     </CardActions>
    //   </Card>
            
    );
}

export default VideoPost;
