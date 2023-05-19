import { Select, FormControl, InputLabel, MenuItem } from "@mui/material"

const ListaOpciones = (props) => {

    const categorias = [
        "Animales Marinos",
        "Oceano Profundo",
        "Arrecifes de Coral",
        "Plantas Marinas"
    ]

    const handleSelect = (e) =>{
        const selectedValue = e.target.value;
        console.log("cambio", e.target.value)
        props.setCat(selectedValue)
    }

    return <FormControl
        variant="filled"
        fullWidth
        margin="dense">
        <InputLabel id="cate">Seleccione una categoria</InputLabel>
        <Select value={props.categoria} onChange={handleSelect}
        >

{/* value={props.value} onChange={handleSelect} */}
            <MenuItem value='Animales Marinos' disable defaultValue='' hidden>Categoría</MenuItem>
            {categorias.map((categoria, index) => <MenuItem key={index} value={categoria}>{categoria}</MenuItem>)}

            {/* <MenuItem value={30}>Arrecifes de Coral</MenuItem> */}
        </Select>
    </FormControl>

}

export default ListaOpciones;