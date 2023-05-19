import GlobalStyle from "./GlobalStyle";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import FormPage from "./Pages/FormPage";
import PageCategoria from"./Pages/PageCategoria";



function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nuevo-video/" element={<FormPage />} />
        <Route path="nueva-categoria/" element={<PageCategoria />} />
      </Routes>
    </div>
  );
}

export default App;
