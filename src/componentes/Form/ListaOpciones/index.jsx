import { Select, FormControl, InputLabel, MenuItem, FormHelperText } from "@mui/material"
import { useState, useEffect } from "react";
import { buscar } from "../../../api/api";

const ListaOpciones = ({cat, setCat}) => {

    const [categorias, setCategorias] = useState([]);


    useEffect(() => {
        buscar("http://localhost:3000/categorias", setCategorias);
    
      }, []);


    const handleSelect = (e) =>{
        const selectedValue = e.target.value;
        setCat(selectedValue);
        
    }

    

    return <FormControl
        variant="filled"
        fullWidth
        margin="dense"
        required>
        <InputLabel id="cate">Seleccione una categoria</InputLabel>
        <Select 
        value={cat} 
        onChange={handleSelect}
      
        
        onBlur={(e)=> {
            const valor = e.target.value;
        }}
        >

        {/* value={props.value} onChange={handleSelect} */}
        {/* <MenuItem value={props.categoria} disable defaultValue="" hidden>Categoría</MenuItem> */}
            {categorias.map((categoria, index) => <MenuItem key={index} value={categoria.nombre}>{categoria.nombre}</MenuItem>)}
        </Select> 
       

    </FormControl>

}

export default ListaOpciones;



// import { Select, FormControl, InputLabel, MenuItem } from "@mui/material"
// import { useState, useEffect } from "react";
// import { buscar } from "../../../api/api";

// const ListaOpciones = (props) => {

//     const [categorias, setCategorias] = useState([]);


//     useEffect(() => {
//         buscar("http://localhost:3000/categorias", setCategorias);
    
//       }, []);


//     const handleSelect = (e) =>{
//         const selectedValue = e.target.value;
//         console.log("cambio", e.target.value)
//         props.setCat(selectedValue)
//     }

//     return <FormControl
//         variant="filled"
//         fullWidth
//         margin="dense">
//         <InputLabel id="cate">Seleccione una categoria</InputLabel>
//         <Select value={props.categoria} onChange={handleSelect}
//         >

// {/* value={props.value} onChange={handleSelect} */}
           
//             {categorias.map((categoria, index) => <MenuItem key={index} value={categoria}>{categoria}</MenuItem>)}

//             {/* <MenuItem value={30}>Arrecifes de Coral</MenuItem> */}
//         </Select>
//     </FormControl>

// }

// export default ListaOpciones;