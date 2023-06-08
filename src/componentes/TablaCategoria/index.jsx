import styled from "styled-components"
import React, { useState, useEffect } from "react";
import { buscar, borrarDatos } from "../../api/api";
import { Link } from "react-router-dom";


const StyledTable = styled.table`

  margin: 30px 0;  

  caption-side: top;
  border: none;
  border-collapse: collapse;


  caption-side: bottom;

  td,
  th {
    border: none;
  }
  td,
  th {
    border: 1px solid;
  }

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
    }
    :hover {
      background-color: #535151;
    }
  }
  thead > tr {
  }
  caption {
    font-size: 0.8em;
    padding: 5px;
    font-weight: bold;
  }
`;


const TablaCategoria = ({ tablaActualizada, setTablaActualizada }) => {

  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    buscar("/categorias", setCategorias);
  }, [tablaActualizada]);


  const handleBorrarCategoria = (id) => {
    return alert("Categoria Borrada. Esta función está desactivada por seguridad.")
    // if (borrarDatos(`/categorias/${id}`)
    //   .then(() => {
    //     console.log("Categoría eliminada correctamente");
    //     setTablaActualizada(true); // Actualiza la tabla
    //   })
    //   .catch((error) => {
    //     console.error("Error al eliminar la categoría:", error);
    //   })) {
    //   return true
    // }
  };



  useEffect(() => {
    if (tablaActualizada) {
      console.log("Actualizando categorías...");
      buscar("/categorias", setCategorias)
        .then(() => {
          console.log("Categorías actualizadas:", categorias);
          setTablaActualizada(false); // Restablece el estado
        })
        .catch((error) => {
          console.error("Error al buscar categorías:", error);
        });
    }
  }, [tablaActualizada, categorias, setTablaActualizada]);

  useEffect(() => {
    console.log("Recuperando categorías inicialmente...");
    buscar("/categorias", setCategorias)
      .then(() => {
        console.log("Categorías recuperadas:", categorias);
      })
      .catch((error) => {
        console.error("Error al buscar categorías:", error);
      });
  }, [categorias]);

  return <StyledTable>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Editar</th>
        <th>Remover</th>
      </tr>
    </thead>
    <tbody>
      {categorias.map((categoria, index) => (
        <tr key={index}>

          <td>{categoria.nombre}</td>
          <td>{categoria.texto}</td>
          <td><Link to={`/editar-categoria/${categoria.id}`}>Editar</Link></td>
          <td><a href="#" onClick={() => handleBorrarCategoria(categoria.id)}>Remover</a></td>
        </tr>
      ))}
    </tbody>
  </StyledTable>

}

export default TablaCategoria;