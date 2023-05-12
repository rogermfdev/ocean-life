import styled from "styled-components";
import {blanco} from "../../UI/variablesCSS.jsx";


const Boton =styled.button`
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 4px;
`

export const BtnNuevoVideo = styled(Boton)`
color: palevioletred;
font-size: 1em;
border: 2px solid palevioletred;
`

export const BtnHero = styled(Boton)`
color ${blanco};
background: #6BD1FF;
font-size: 1.5em;
border: none;
`


