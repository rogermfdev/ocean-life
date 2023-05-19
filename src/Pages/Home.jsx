import Header from "../componentes/Header"
import HomeCarrusel from "../HomeCarrusel";
import Banner from "../componentes/Container/HeroPage";
import Footer from "../componentes/Footer";
import Categoria from "../componentes/Categoria";
import React, { useContext, useState } from 'react';
// import { CatContexto } from "../Context";
import CatContextoProvider from "../Context"



const Home = () => {

    // const catDatos = useContext(CatContexto);
    // const { categorias, videos } = datos
    // const { categorias, videos } = datos

    // const categorias = [
    //     {
    //         titulo: "Animales Marinos",
    //         texto: "Descubre la vida marina como nunca antes",
    //         color: "#f40",
    //     },
    //     {
    //         titulo: "Oceano Profundo",
    //         texto: "Descubre la Oceano Profundo como nunca antes",
    //         color: "#6120d8",
    //     },
    //     {
    //         titulo: "Arrecifes de Coral",
    //         texto: "Descubre la Arrecifes de Coral como nunca antes",
    //         color: "#d06fa9",
    //     },
    //     {
    //         titulo: "Arrecifes",
    //         texto: "Descubre la Arrecifes de Coral como nunca antes",
    //         color: "#eae73a",
    //     },
    //     {
    //         titulo: "Plantas Marinas",
    //         texto: "Descubre la Plantas Marinas como nunca antes",
    //         color: "#2ba67b",
    //     }
    // ]

    // console.log("Desde Home", catDatos.categorias)

    // console.log("Cate", categorias)

    return (
        <main>

                <Header />
                <Banner />
                <HomeCarrusel />
                {/* <Categoria/> */}
            <Footer />
        </main>
    )

}

export default Home