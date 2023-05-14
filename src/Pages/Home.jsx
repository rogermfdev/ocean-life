import Header from "../componentes/Header"
import HomeCarrusel from "../HomeCarrusel";
import Banner from "../componentes/Container/HeroPage";
import Footer from "../componentes/Footer";

const Home = () => {
    return (
        <main>
            <Header />
            <Banner />
            <HomeCarrusel />
            <Footer />
        </main>
    )
}

export default Home