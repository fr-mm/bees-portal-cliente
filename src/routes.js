import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Oferta from "./pages/Oferta";
import PerguntasFrequentes from "./pages/PerguntaFrequentes";

export default function MyRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/oferta" element={<Oferta/>}/>
            <Route path="/perguntasFrequentes" element={<PerguntasFrequentes/>}/>
        </Routes>         
        </>
    );
  }
