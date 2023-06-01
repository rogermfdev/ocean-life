import HomeCarrusel from "../HomeCarrusel";
import Banner from "../componentes/Container/HeroPage";
import React from 'react';
// import { CatContexto } from "../Context";
// import CatContextoProvider from "../Context"



const Home = () => {

    return (
        <main>       
                <Banner />
                <HomeCarrusel />
        </main>
    )

}

export default Home