import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Oferta from "./pages/Oferta";


export default function MyRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/oferta" element={<Oferta/>}/>
        </Routes>         
        </>
    );
  }
