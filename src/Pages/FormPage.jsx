import Formulario from "../componentes/Registro/RegistroVideo";
import { Box } from "@mui/system"

const FormPage = () => {

    return (
        <main>


            <Box
                sx={{
                    width: "900px",
                    padding: "40px",
                    margin: "0 auto",
                    height: "700px",

                }}
            >
                <Formulario />
            </Box>

        </main>
    )
}

export default FormPage

