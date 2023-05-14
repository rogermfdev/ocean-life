import styled from "styled-components";
import { colorPrimario } from "../../UI/variablesCSS.jsx";
import logo from "../../assets/images/logo.png"
import { BtnNuevoVideo } from "../Button"
import { Link } from "react-router-dom";


const StyleHeader = styled.nav`
 background-color ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
width: 150px;
`

// const BtnNuevoVideo = styled.button`
// color: palevioletred;
// font-size: 1em;
// margin: 1em;
// padding: 0.25em 1em;
// border: 2px solid palevioletred;
// border-radius: 3px;
// background: transparent;
// `;

// const BtnAzul = styled(BtnNuevoVideo)`
//   color: blue;
//   border-color: blue;
// `;

// const NuevoVideo = () => {
//   console.log("Boton Pulsado")
// }

export const Header = () => {
  return (
    <StyleHeader>
      <Link to="/"><Logo src={logo} alt="Logo AluraFlix" /></Link>
      <Link to="nuevo-video/"> <BtnNuevoVideo>Nuevo Video</BtnNuevoVideo></Link>
    </StyleHeader>
  );
};


export default Header;