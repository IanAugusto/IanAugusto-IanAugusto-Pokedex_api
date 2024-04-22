import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Header from './components/Header';
import Error from './Error';

// configurando o componente de roteamento
export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/"  element={<Home />} />  
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}