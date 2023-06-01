import RegistroCategoria from "../componentes/Registro/RegistroCategoria"
import { Box } from "@mui/system"
import TablaCategoria from "../componentes/TablaCategoria";
import { useState } from "react";

const PageCategoria = () => {

    const [tablaActualizada, setTablaActualizada] = useState(false);

    const handleActualizarTabla = () => {
        setTablaActualizada(!tablaActualizada);
      };

    return (
        <main>
            <Box
                sx={{
                    width: "900px",
                    padding: "40px",
                    margin: "30px auto",
                }}
            >
                <RegistroCategoria  handleActualizarTabla={handleActualizarTabla} />
                <TablaCategoria tablaActualizada={tablaActualizada} setTablaActualizada={setTablaActualizada} />
            </Box>

        </main>
    )
}

export default PageCategoria;