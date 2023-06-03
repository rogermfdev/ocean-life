import { Box } from "@mui/system"
import ActualizandoCategoria from "../componentes/Registro/RegistroCategoria/ActualizandoCategoria.jsx"


const EditarCategoriaPage = () => {


    return (
        <main>
            <Box
                sx={{
                    maxWidth: 900,
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