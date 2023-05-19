import React, { createContext, useState } from "react";
// import { listarVideos } from "./services/videos.services";
// import { listarCategorias } from "./services/categorias.services";

export const CatContexto = createContext();

export default function CatContextoProvider ({ children }) {
    const categorias =[
        {
            titulo: "Animales",
            texto: "Descubre la vida marina como nunca antes",
            colores: "#f40",
        },
        {
            titulo: "Oceano Profundo",
            texto: "Descubre la Oceano Profundo como nunca antes",
            colores: "#6120d8",
        },
        {
            titulo: "Arrecifes de Coral",
            texto: "Descubre la Arrecifes de Coral como nunca antes",
            colores: "#d06fa9",
        },
        {
            titulo: "Arrecifes",
            texto: "Descubre la Arrecifes de Coral como nunca antes",
            colores: "#eae73a",
        },
        {
            titulo: "Plantas Marinas",
            texto: "Descubre la Plantas Marinas como nunca antes",
            colores: "#2ba67b",
        }
    ];



// const [videos, setVideos] = useState();

// const [actulizador, setActualizador] = useState(1);

// useEffect(() => {
//     listarVideos("/videos", setVideos);x x   
// }, [actulizador]);

// useEffect(() => {
//     listarCategorias("/categorias", setCategorias);
// }, [actulizador]);

// if (videos && categorias) {
return (
    <CatContexto.Provider
        value=
            {categorias}
            // // videos: videos.data,
            // categorias: categorias.data,
            // // valor: actulizador,
            // // recargar: setActualizador
       
    >
        {children}
    </CatContexto.Provider>
);
    }