import { TextField, Box, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListaOpciones from "../../Form/ListaOpciones/index.jsx";
import { validarTitulo, validarLink, validarLinkImagen, validarText } from "../../Form/NuevoVideo/validaciones.js"

const Formulario = ({ props }) => {

    const [titulo, setTitulo] = useState({ value: "Documental", valid: null });
    const [link, setLink] = useState({ value: "https://www.youtube.com/watch?v=aZb5ddjmpno", valid: null, })
    const [imagen, setImagen] = useState({ value: "aaaaaa", valid: null })
    const [texto, setTexto] = useState({ value: "aaaaa", valid: null })
    const [cat, setCat] = useState('')

    const resetState = () => {
        setTitulo({ value: "", valid: null });
        setLink({ value: "", valid: null });
        setImagen({ value: "", valid: null });
        setTexto({ value: "", valid: null });
        setCat({ value: "", valid: null });
    };


    const handleForm = (e) => {
        e.preventDefault();
        console.log("Manejar el envio")
        let datosAEnviar = {
            titulo,
            link,
            imagen,
            texto,
            cat,

        }
        console.log("Los datos: ", datosAEnviar);
        resetState();
    }

    const handleOnBlur = (event) => {
        const title = event.target.value;
        const valido = validarTitulo(title);
        setTitulo({ value: title, valid: valido });
    }

    const handleBlurLink = (event) => {
        const link = event.target.value;
        const valido = validarLink(link);
        setLink({ value: link, valid: valido });
    }

    const handleBlurLinkImg = (event) => {
        const img = event.target.value;
        const valido = validarLinkImagen(img);
        setImagen({ value: img, valid: valido });
    }

    const handleBlurText = (e) => {
        const value = e.target.value;
        const valid = validarText(value);
        setTexto({ value, valid });
    }

    const handleChange = (input) => {
        const titulo = input.target.value;
        const valido = validarTitulo(titulo)
        setTitulo({ value: titulo, valid: valido });
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
                id="title"
                label="Título"
                variant="filled"
                fullWidth
                margin="dense"
                type="text"
                error={titulo.valid === false}
                helperText={titulo.valid === false && "Agrege un título descriptivo."}
                value={titulo.value}
                onBlur={handleOnBlur}
                onChange={handleChange}
            />

            <TextField
                id="link"
                label="Link del video"
                variant="filled"
                fullWidth
                margin="dense"
                type="text"
                error={link.valid === false}
                helperText={link.valid === false && "Agrege en enlace de Youtube"}
                value={link.value}
                onBlur={handleBlurLink}
                onChange={(input) => {
                    const link = input.target.value;
                    const valido = validarLink(link)
                    setLink({ value: link, valid: valido });
                }}
                required
            />

            <TextField
                id="img"
                label="Link imagen del video"
                variant="filled"
                fullWidth
                margin="dense"
                type="text"
                error={imagen.valid === false}
                helperText={imagen.valid === false && "Agrege la url de la imagen de Youtube"}
                value={imagen.value}
                onBlur={handleBlurLinkImg}
                onChange={(input) => {
                    const imagen = input.target.value;
                    const valido = validarLinkImagen(imagen)
                    setImagen({ value: imagen, valid: valido });
                }}
            />

            <ListaOpciones
                categoria={cat}
                setCat={setCat}
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
                value={texto.value}
                error={texto.valid === false}
                helperText={texto.valid === false && "Por favor, escriba una descripción"}
                onChange={(input) => {
                    const texto = input.target.value;
                    const valido = validarText(texto);
                    setTexto({ value: texto, valid: valido });
                }}
                onBlur={handleBlurText}

            />
            <Stack direction="row" spacing={2} margin="dense">
                <Button variant="contained" type="submit"
                >Guardar</Button>
                <Button variant="outlined" onClick={resetState} >
                    Limpiar</Button>
                    
                    <Link  to="/nueva-categoria/"><Button variant="outlined" >Nueva Categoria</Button> </Link>
            </Stack >
        </Box>
    )
}

export default Formulario;