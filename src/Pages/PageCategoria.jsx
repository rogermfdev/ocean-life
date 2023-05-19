import RegistroCategoria from "../componentes/Registro/RegistroCategoria"
import Header from "../componentes/Header"
import Footer from "../componentes/Footer";
import { Box } from "@mui/system"


const PageCategoria = () =>{


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
        <RegistroCategoria />

        </Box>
        
            <Footer />
        </main>
    )

}

export default PageCategoria;