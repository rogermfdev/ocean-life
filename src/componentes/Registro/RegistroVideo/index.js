import { TextField, Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListaOpciones from "../../Form/ListaOpciones/index.jsx";
import { validarTitulo, validarLink, validarLinkImagen, validarText, validarPass } from "../../Form/NuevoVideo/validaciones.js"
import { guardarDatos } from "../../../api/api"
import { toast } from "react-toastify";

const Formulario = () => {



    const [titulo, setTitulo] = useState({ value: "", valid: null });
    const [link, setLink] = useState({ value: "", valid: null, })
    const [imagen, setImagen] = useState({ value: "", valid: null })
    const [texto, setTexto] = useState({ value: "", valid: null })
    const [cat, setCat] = useState("")
    const [pass, setPass] = useState({ value: "", valid: null })

    const resetState = () => {
        setTitulo({ value: "", valid: null });
        setLink({ value: "", valid: null });
        setImagen({ value: "", valid: null });
        setTexto({ value: "", valid: null });
        setCat("");
        setPass({ value: "", valid: null });
    };



    const handleForm = (e) => {
        e.preventDefault();
        console.log("Manejar el envio")
        let datosAEnviar = {
            id: null, // El campo "id" se generará automáticamente en el servidor
            titulo: titulo.value,
            link: link.value,
            thumbnail: imagen.value,
            categoria: cat,
            descripcion: texto.value,
        }

        guardarDatos("/videos", datosAEnviar)
            .then(() => {
                toast.success('Subido exitosamente', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                resetState();
            })
            .catch((error) => {
                toast.error('Ocurrió un error', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            });

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

    const handleBlurPass = (e) => {
        const value = e.target.value;
        const valid = validarPass(value);
        setPass({ value, valid });
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
                alignItems: "left",
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
                helperText={link.valid === false && "Agrege un enlace de Youtube"}
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
                cat={cat}
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


            <TextField
                id="outlined-password-input"
                label="Código de seguridad"
                type="password"
                margin="dense"
                variant="filled"
                autoComplete="current-password"
                error={pass.valid === false}
                helperText={pass.valid === false && "Ingrese el código de seguridad. Si no lo recuerda, pónganse en contacto con el admininistrador."}
                value={pass.value}
                onChange={(input) => {
                    const value = input.target.value;
                    const valid = validarPass(value);
                    setPass({ value, valid });
                }}
                onBlur={handleBlurPass}
                required
            />

            <Stack direction="row" spacing={2} margin="dense">

                <Button variant="contained" type="submit" margin="dense"
                >Guardar</Button>
                <Button variant="outlined" onClick={resetState} margin="dense">
                    Limpiar</Button>


                <Link to="/nueva-categoria/">
                    <Button variant="outlined" margin="dense" sx={{ display: "flex", justifyContent: "flex-end" }}>Nueva Categoria</Button>
                </Link>

            </Stack >
        </Box>
    )
}

export default Formulario;