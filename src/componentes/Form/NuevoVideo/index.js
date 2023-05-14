import { TextField, Box, Select, InputLabel, FormControl, Button, Stack } from "@mui/material";

const NuevoVideo = () => {

    // const onsubmit = (e) =>{
    //     e.preventDefault();
    //     console.log("Enviado")
    // }


    const handleForm = (e) => {

        e.preventDefault();

        console.log("Enviado");

    }

    const limpiar = (e) => {

        e.preventDefault();

        console.log("Limpiado");

    }

    return (

        <Box
            component="form"
            autocomplete="off"
            sx={{
                maxWidth: '100%',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}

            onSubmit={handleForm}
        >



            <h2>Nuevo Video</h2>



            <TextField
                id="filled-basic"
                label="Título"
                variant="filled"
                fullWidth
                margin="dense"
                type="text"
            />

            <TextField
                id="filled-basic"
                label="Link del video"
                variant="filled"
                fullWidth
                margin="dense"
                type="text"
            />

            <TextField
                id="filled-basic"
                label="Link imagen del video"
                variant="filled"
                fullWidth
                margin="dense"
                type="text"
            />

            <FormControl
                variant="filled"
                fullWidth
                margin="dense">
                <InputLabel id="demo-simple-select-filled-label">Seleecione una categoria</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    margin="dense"
                    value={"age"}
                    onChange={"handleChange"}
                >
                    {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>


            <TextField
                id="filled-multiline-static"
                label="Descripción"
                multiline
                margin="dense"
                rows={4}
                defaultValue=""
                variant="filled"
                fullWidth
            />
            <Stack direction="row" spacing={2} margin="dense">
                <Button variant="contained" type="submit"
                >Guardar</Button>
                <Button variant="outlined" onClick={limpiar}
                >Limpiar</Button>


            </Stack >

        </Box>



    )
}

export default NuevoVideo;