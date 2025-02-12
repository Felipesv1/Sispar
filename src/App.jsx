import Login from "./components/login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reembolsos from "./components/reembolso/Reembolsos.jsx";
import Solicitar_reembolso from "./components/solicitacao/Solicitacao.jsx";
import "../src/global.scss";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reembolso" element={<Reembolsos />} />
          <Route
            path="/solicitar-reembolso"
            element={<Solicitar_reembolso />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
