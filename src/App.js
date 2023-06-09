import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import FormPage from "./Pages/FormPage";
import PageCategoria from "./Pages/PageCategoria";
import Page404 from "./Pages/Page404";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import VideoPost from "./Pages/VideoPost";
import EditarCategoriaPage from "./Pages/EditarCategoria";
import VideoCategoria from "./Pages/VideoCategorias";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (

    <div>

      <ToastContainer
        position="top-center"
      />

      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />


          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="nuevo-video/" element={<FormPage />} />
            <Route path="nueva-categoria/" element={<PageCategoria />} />
            <Route path='/videos/:id' element={<VideoPost />} />
            <Route path='/categorias/:id' element={<VideoCategoria />} />
            <Route path="/editar-categoria/:id" element={<EditarCategoriaPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
