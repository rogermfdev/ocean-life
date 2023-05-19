import styled from "styled-components"
import imgBanner from "../../../assets/images/banner.jpg";
import imgClipPez from "../../../assets/images/imgClip.jpg"
import { BtnHero } from "../../Button"
import { blanco } from "../../../UI/variablesCSS";

// const StyleBanner = styled.img`
//     background-image: linear-gradient(rgba(36, 38, 40, 0.822), rgba(0, 0, 0, 0.5)), url(${imgBanner});
//     max-width: 100%;
//     filter: brightness(0.8) contrast(1.2) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
// `


const Container = styled.div`
{
    display: flex;
justify-content: space-around;
align-items: center;
height: 1200;
background-image: url(${imgBanner});
background-size: cover;
}
@media only screen and (max-width: 600px) {

    display: flex;
    flex-direction: column;
justify-content: center;
}
`


const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  width: 45%;
  background: none;

`;

const Title = styled.h1`
    font-size: 3em;
    color ${blanco};
`
const SubHero = styled.p`
    font-size: 1em;   
    color ${blanco};
    text-align: center;
`
const ImgClip = styled.img `
max-width: 350px;
border: 5px solid  ${blanco}; 
border-radius: 4px;
`

const handleHero = () =>{
console.log ("Abre Documentales")
}

const Banner = () => {
    return (
        <Container>
            <Column>
                <BtnHero onClick={handleHero}>
                    DOCUMENTALES
                </BtnHero>
                <Title>
                    Planeta Marino
                </Title>
                <SubHero>
                    Explora la vida marina como nunca antes. Sumérgete en el fascinante mundo de la vida marina.
                </SubHero>
            </Column>
            <Column>
            <ImgClip src={imgClipPez} alt="Pez Payaso Clip"/>
            </Column>
        </Container>

    )
}

export default Banner