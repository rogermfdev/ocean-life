import GlobalStyle from "./GlobalStyle";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import FormPage from "./Pages/FormPage";


function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nuevo-video/" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
