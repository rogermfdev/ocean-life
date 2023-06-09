import styled from "styled-components"
import imgBanner from "../../../assets/images/banner.jpg";
import imgClipPez from "../../../assets/images/imgClip.jpg"
import { BtnHero } from "../../Button"
import { blanco } from "../../../UI/variablesCSS";
import videoBg from '../../../assets/images/videoOcean.mp4'


const Main = styled.div`
    width: 100%;
    height: 70vh;

`

const Container = styled.div`
{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background-image: url(${imgBanner}); */
    background-size: cover;
}
@media only screen and (max-width: 600px) {

    display: flex;
    flex-direction: column;
    justify-content: center;
}
`

const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover; 
`

const Overloay = styled.div`
position: absolute;
left: 0;
width: 100%;
height: 70vh;
background-color: rgb(0, 0, 0, .5);
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
const ImgClip = styled.img`
max-width: 350px;
border: 5px solid  ${blanco}; 
border-radius: 4px;
`

const handleHero = () => {
    console.log("Abre Documentales")
}



const Banner = () => {

    return (

        <Main>
            <Overloay>
                <Video autoPlay
                    loop
                    muted
                    src={videoBg}
                    type='video/mp4' />
            </Overloay>
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
                    {/* <ImgClip src={imgClipPez} alt="Pez Payaso Clip" /> */}
                </Column>

            </Container>
        </Main>

    )
}

export default Banner


