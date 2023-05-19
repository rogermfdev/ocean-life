import Header from "../componentes/Header"
import Footer from "../componentes/Footer";
import Formulario from "../componentes/Registro/RegistroVideo";
import { Box } from "@mui/system"







const FormPage = () => {


    const registrarVideo = (video) => {
        console.log("Nuevo video", video)
        //Spread operator
       // actualizarColaboradores([...colaboradores, colaborador])
      }
    

    return (
        <main>
            <Header />

            <Box
        sx={{
        width: "900px",
        padding: "40px",
        margin:"0 auto",

        }}
        >
        <Formulario />
        </Box>
            <Footer />
        </main>
    )
}

export default FormPage
