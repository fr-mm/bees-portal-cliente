import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Oferta from "./pages/Oferta";
import PerguntasFrequentes from "./pages/PerguntaFrequentes";
import ProcessamentoReq from "./componentes/ProcessamentoReq"
import BuscaDocInvalida from "./componentes/buscaDocumentoInvalido"
export default function MyRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/oferta" element={<Oferta/>}/>
            <Route path="/perguntasFrequentes" element={<PerguntasFrequentes/>}/>
            <Route path="/teste" element={<BuscaDocInvalida/>}/>
        </Routes>         
        </>
    );
  }
