import styled from "styled-components"
import React, { useState, useEffect } from "react";
import { buscar, borrarDatos } from "../../api/api";
import { Link } from "react-router-dom";

const Table = styled.table`

margin:40px 0;
border: 1px solid;
`
const Td = styled.tr`
border: 1px solid;
`


const StyledTable = styled.table`

  margin: 30px 0;  

  caption-side: top;
  border: none;
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */
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
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
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
       if (borrarDatos(`/categorias/${id}`)
          .then(() => {
            console.log("Categoría eliminada correctamente");
            setTablaActualizada(true); // Actualiza la tabla
          })
          .catch((error) => {
            console.error("Error al eliminar la categoría:", error);
          })) {
            return true
          }
      };


    //   useEffect(() => {
    //     if (tablaActualizada) {
    //       buscar("/categorias", setCategorias);
    //       setTablaActualizada(false); // <-- Se restablece el estado tablaActualizada a false
    //     }
    //   }, [tablaActualizada]);


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
      }, [tablaActualizada]);
    
      useEffect(() => {
        console.log("Recuperando categorías inicialmente...");
        buscar("/categorias", setCategorias)
          .then(() => {
            console.log("Categorías recuperadas:", categorias);
          })
          .catch((error) => {
            console.error("Error al buscar categorías:", error);
          });
      }, []);

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
                    <td> <button onClick={() => handleBorrarCategoria(categoria.id)}> Remover</button></td>
                </tr>
            ))}
        </tbody>
    </StyledTable>

}

export default TablaCategoria;