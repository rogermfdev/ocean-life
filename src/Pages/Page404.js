import styled from "styled-components";
import Img from "../assets/images/error.png"
import { BtnCat } from "../componentes/Button";
import { Link } from "react-router-dom";

const Section = styled.section`
margin: 30px;
display: flex;
flex-direction: column;
align-items: center;
`

const Titulo = styled.h1`
font-size: 2em;
margin: 20px;
`
const Subtitulo = styled.h2`
font-size: 1.5;
margin: 15px;
`

const ImgError = styled.img`
width: 600px;
`

const Page404 = () =>{

    return (
        <Section>
            <Titulo>404</Titulo>
            <Subtitulo>Lo siento, esta página no existe</Subtitulo>
            <ImgError src={Img} />
            <Link to="/" >
                <BtnCat>Ir al inicio</BtnCat>
            </Link>
        </Section>


    )
}

export default Page404;