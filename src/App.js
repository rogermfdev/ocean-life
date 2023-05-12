import GlobalStyle from "./GlobalStyle";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";


function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
