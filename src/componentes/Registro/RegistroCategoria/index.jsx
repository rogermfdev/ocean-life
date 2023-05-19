import React, { useState } from "react"
import { Box, TextField, Button, Stack } from "@mui/material";
import { validarText } from "../../Form/NuevoVideo/validaciones";

const RegistroCategoria = () => {

    const [name, setName] = useState({ value: '', valid: null });
    const [text, setText] = useState({ value: '', valid: null });
    const [color, setColor] = useState({ value: ''});

    const resetState = () => {
        setName({ value: "", valid: null });
        setText({ value: "", valid: null });
        setColor({ value: ""});
    };


    const handleForm = (e) => {
        e.preventDefault();
        console.log("Enviado");
        const datosEnviados = {
            name, 
            text, 
            color,

        }
        console.log(datosEnviados)
        resetState();
    }
    const handleReset = (e) => {
        e.preventDefault();
        resetState();
      };

    // const handleReset = (e) => {
    //     e.preventDefault();

    // }

    const handleOnBlur = (e) => {
        const value = e.target.value;
        const valid = validarText(value);
        setName({ value, valid });
    }

    return (<Box
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
        <h2>Nueva Categoria</h2>

        <TextField
            id="nombre"
            label="Nombre"
            variant="filled"
            fullWidth
            margin="dense"
            type="text"
            error={name.valid === false}
            helperText={name.valid === false && "Agrege un nombre para esta categoría."}
            value={name.value}
            onBlur={handleOnBlur}
            onChange={(input) => {
                const name = input.target.value;
                const valido = validarText(name)
                setName({ value: name, valid: valido })
            }}
        />

        <TextField
            id="filled-multiline-static"
            label="Descripción"
            multiline
            margin="dense"
            rows={4}
            defaultValue=""
            variant="filled"
            fullWidth
            value={text.value}
            error={text.valid === false}
            helperText={text.valid === false && "Por favor, escriba una descripción"}
            onChange={(input) => {
                const text = input.target.value;
                const valido = validarText(text);
                setText({ value: text, valid: valido });
            }}
            onBlur={(e) => {
                    const valid = validarText(e.target.value); 
                    setText({value: e.target.value, valid})
            }}
        />
        <TextField
            label="Color"
            fullWidth
            type="color"
            margin="dense"
            variant="filled"
            value={color.value}
            onChange={(input) => setColor({value: input.target.value})}
        />
        <Stack direction="row" spacing={2} >
            <Button variant="contained" type="onsubmit"> Guardar </Button>
            <Button variant="outlined" onClick={handleReset}> Limpiar </Button>
        </Stack>
    </Box>
    )
}

export default RegistroCategoria;