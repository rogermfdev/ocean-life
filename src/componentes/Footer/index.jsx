import styled from "styled-components";
import logo from "../../assets/images/logo.png"
import { colorPrimario } from "../../UI/variablesCSS";
import { Link } from "react-router-dom";

const StyleFooter = styled.footer`

background-color ${colorPrimario};
  display: flex;
  justify-content: center;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
    width: 120px;
`

const Footer = () => {

    return (
       <StyleFooter>
              <Link to="/"><Logo src={logo} alt="Logo AluraFlix" /></Link>
       </StyleFooter> 
    )
}

export default Footer;