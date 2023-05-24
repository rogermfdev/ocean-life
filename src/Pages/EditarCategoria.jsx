import { Box } from "@mui/system"
import ActualizandoCategoria from "../componentes/Registro/RegistroCategoria/ActualizandoCategoria.jsx"


const EditarCategoriaPage = () => {


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
                <ActualizandoCategoria />

            </Box>

        </main>
    )

}

export default EditarCategoriaPage;