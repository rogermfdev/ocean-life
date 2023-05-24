
//CHAT GTP



// import React, { useEffect, useState } from "react";
// import { Box, TextField, Button, Stack } from "@mui/material";
// import { validarText, validarPass } from "../../Form/NuevoVideo/validaciones";
// import { guardarDatos } from "../../../api/api";
// import { useParams } from 'react-router-dom';
// import { buscar } from "../../../api/api";


// const ActualizandoCategoria = () => {
//   const { id } = useParams();

//   const [categorias, setCategorias] = useState({
//     id: "",
//     name: { value: "", valid: true },
//     text: { value: "", valid: true },
//     color: { value: "" },
//     pass: { value: "", valid: true }
//   });

//   const handleSetCategorias = (data) => {
//     setCategorias((prevState) => ({
//       ...prevState,
//       id: data.id,
//       name: { value: data.nombre, valid: true },
//       text: { value: data.texto, valid: true },
//       color: { value: data.colores },
//       pass: { value: "", valid: true }
//     }));
//   };

//   useEffect(() => {
//     buscar(`/categorias/${id}`, handleSetCategorias);
//   }, [id]);

//   const resetState = () => {
//     setCategorias((prevState) => ({
//       ...prevState,
//       name: { value: "", valid: null },
//       text: { value: "", valid: null },
//       color: { value: "" },
//       pass: { value: "", valid: null }
//     }));
//   };

//   const handleForm = (e) => {
//     e.preventDefault();
//     console.log("Enviado");
//     const datosEnviados = {
//       id: null,
//       nombre: categorias.name.value,
//       texto: categorias.text.value,
//       colores: categorias.color.value
//     };
//     console.log(datosEnviados);
//     guardarDatos("/categorias", datosEnviados)
//       .then(() => {
//         console.log("Formulario enviado correctamente");
//         resetState();
//       })
//       .catch((error) => {
//         console.error("Error al enviar el formulario:", error);
//       });
//   };

//   const handleReset = (e) => {
//     e.preventDefault();
//     resetState();
//   };

//   const handleOnBlur = (e) => {
//     const value = e.target.value;
//     const valid = validarText(value);
//     setCategorias((prevState) => ({
//       ...prevState,
//       name: { value, valid }
//     }));
//   };

//   const handleBlurPass = (e) => {
//     const value = e.target.value;
//     const valid = validarPass(value);
//     setCategorias((prevState) => ({
//       ...prevState,
//       pass: { value, valid }
//     }));
//   };

//   return (
//     <Box
//       component="form"
//       autoComplete="off"
//       sx={{
//         maxWidth: '100%',
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//       }}
//       onSubmit={handleForm}
//     >
//       <h2>Editar Categoria</h2>

//       <TextField
//         id={id}
//         label="Nombre"
//         variant="filled"
//         fullWidth
//         margin="dense"
//         type="text"
//         error={categorias.name.valid === false}
//         helperText={categorias.name.valid === false && "Agregar un nombre para esta categoría."}
//         value={categorias.name.value}
//         onBlur={handleOnBlur}
//         onChange={(input) => {
//           const name = input.target.value;
//           const valido = validarText(name);
//           setCategorias((prevState) => ({
//             ...prevState,
//             name: { value: name, valid: valido }
//           }));
//         }}
//       />

//   <TextField
//     id={id}
//     label="Descripción"
//     multiline
//     margin="dense"
//     rows={4}
//     defaultValue=""
//     variant="filled"
//     fullWidth
//     value={categorias.text.value}
//     error={categorias.text.valid === false}
//     helperText={categorias.text.valid === false && "Por favor, escriba una descripción"}
//     onChange={(input) => {
//       const text = input.target.value;
//       const valido = validarText(text);
//       setCategorias((prevState) => ({
//         ...prevState,
//         text: { value: text, valid: valido }
//       }));
//     }}
//     onBlur={(e) => {
//       const valid = validarText(e.target.value);
//       setCategorias((prevState) => ({
//         ...prevState,
//         text: { value: e.target.value, valid }
//       }));
//     }}
//   />
//       <TextField
//         label="Color"
//         fullWidth
//         type="color"
//         margin="dense"
//         variant="filled"
//         value={categorias.color.value}
//         onChange={(input) => setCategorias((prevState) => ({
//           ...prevState,
//           color: { value: input.target.value }
//         }))}
//       />

//       <TextField
//         id={id}
//         label="Código de seguridad"
//         type="password"
//         margin="dense"
//         variant="filled"
//         fullWidth
//         autoComplete="current-password"
//         error={categorias.pass.valid === false}
//         helperText={categorias.pass.valid === false && "Ingrese el código de seguridad. Si no lo sabe, póngase en contacto con el administrador de este sitio."}
//         value={categorias.pass.value}
//         onChange={(input) => {
//           const value = input.target.value;
//           const valid = validarPass(value);
//           setCategorias((prevState) => ({
//             ...prevState,
//             pass: { value, valid }
//           }));
//         }}
//         onBlur={handleBlurPass}
//         required
//       />

//       <Stack direction="row" spacing={2}>
//         <Button variant="contained" type="onsubmit">Guardar</Button>
//         <Button variant="outlined" onClick={handleReset}>Limpiar</Button>
//       </Stack>
//     </Box>
//   );
// };

// export default ActualizandoCategoria;


//Nuevo Chat GTp

import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Stack, TextareaAutosize } from "@mui/material";
import { validarText } from "../../Form/NuevoVideo/validaciones";
import { actualizarDatos } from "../../../api/api";
import { validarPass } from "../../Form/NuevoVideo/validaciones";
import { useParams } from 'react-router-dom';
import { buscar } from "../../../api/api";


const ActualizandoCategoria = () => {
    const { id } = useParams();

    const [categoria, setCategoria] = useState({
        nombre: '',
        texto: '',
        colores: '',
    });

    const handleSetCategoria = (data) => {
        setCategoria(data);
    };

    useEffect(() => {
        buscar(`/categorias/${id}`, handleSetCategoria);
    }, [id]);

    const [name, setName] = useState({ value: '', valid: true });
    const [text, setText] = useState({ value: '', valid: true });
    const [color, setColor] = useState({ value: '' });
    const [pass, setPass] = useState({ value: '', valid: true });

    useEffect(() => {
        if (categoria) {
            setName({ value: categoria.nombre, valid: true });
            setText({ value: categoria.texto, valid: true });
            setColor({ value: categoria.colores });
        }
    }, [categoria]);

    const resetState = () => {
        setName({ value: "", valid: null });
        setText({ value: "", valid: null });
        setColor({ value: "" });
        setPass({ value: "", valid: null });
    };

    const handleForm = (e) => {
        e.preventDefault();
        console.log("Enviado");
        const datosEnviados = {
            id: null,
            nombre: name.value,
            texto: text.value,
            colores: color.value,
        }
        console.log(datosEnviados)
        actualizarDatos(`/categorias/${id}`, datosEnviados)
        .then(() => {
                console.log("Formulario enviado correctamente");
                resetState();
            })
            .catch((error) => {
                console.error("Error al enviar el formulario:", error);
            });
    }

    const handleReset = (e) => {
        e.preventDefault();
        resetState();
    };

    const handleOnBlur = (e) => {
        const value = e.target.value;
        const valid = validarText(value);
        setName({ value, valid });
    }

    const handleBlurPass = (e) => {
        const value = e.target.value;
        const valid = validarPass(value);
        setPass({ value, valid });
    }

    return (
        <Box
            component="form"
            autoComplete="off"
            sx={{
                maxWidth: '100%',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
            onSubmit={handleForm}
        >
            <h2>Editar Categoria</h2>

            <TextField
                id={id}
                label="Categoría"
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




            {/* <TextField
        id={id}
        label="Descripción"
        multiline
        margin="dense"
        rows={4}
        variant="filled"
        fullWidth
        value={text.value}
        error={text.valid === false}
        helperText={text.valid === false && "Por favor, escriba una descripción"}
        onChange={(input) => {
          const text = input.target.value;
          const valido = validarText(text);
          setCategoria((prevState) => ({
            ...prevState,
            text: { value: text, valid: valido }
          }));
        }}
        onBlur={(e) => {
          const valid = validarText(e.target.value);
          setCategoria((prevState) => ({
            ...prevState,
            text: { value: e.target.value, valid }
          }));
        }}
      /> */}


            <TextField
                id={id}
                label="Descripción"
                multiline
                margin="dense"
                rows={4}
                variant="filled"
                fullWidth
                value={text.value}
                error={text.valid === false}
                helperText={text.valid === false && "Por favor, escriba una descripción"}
                onChange={(input) => {
                    const text = input.target.value;
                    const valido = validarText(text);
                    setText((prevState) => ({
                        ...prevState,
                        value: text,
                        valid: valido
                    }));
                }}
                onBlur={(e) => {
                    const valid = validarText(e.target.value);
                    setText((prevState) => ({
                        ...prevState,
                        value: e.target.value,
                        valid: valid
                    }));
                }}
            />



            <TextField
                label="Color"
                fullWidth
                type="color"
                margin="dense"
                variant="filled"
                value={color.value}
                onChange={(input) => setColor({ value: input.target.value })}
            />

            <TextField
                id={id}
                label="Código de seguridad"
                type="password"
                margin="dense"
                variant="filled"
                fullWidth
                autoComplete="current-password"
                error={pass.valid === false}
                helperText={pass.valid === false && "Ingrese el código de seguridad. Si no lo sabe, póngase en contacto con el administrador de este sitio."}
                value={pass.value}
                onChange={(input) => {
                    const value = input.target.value;
                    const valid = validarPass(value);
                    setPass({ value, valid });
                }}
                onBlur={handleBlurPass}
                required
            />

            <Stack direction="row" spacing={2} >
                <Button variant="contained" type="onsubmit">Guardar</Button>
                <Button variant="outlined" onClick={handleReset}>Limpiar</Button>
            </Stack>
        </Box>
    );
}

export default ActualizandoCategoria;
