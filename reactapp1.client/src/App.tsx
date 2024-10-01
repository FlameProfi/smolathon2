import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.tsx';
import Login from './Pages/Login/Login.tsx';
import Register from './Pages/Register/Register.tsx';
import Events from './Pages/Events/index.tsx';
import Event from "./Pages/EventPage/index.tsx"
import Card from './Components/Card/index.tsx';
import "./styles/fonts.css"

function App() {
    return (
        //<Modal active={true} setActive={true}></Modal>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/card/:productId" element={<Card/>} />
                <Route path="/events" element={<Events />} />
                <Route path="/event/:eventId" element={<Event />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );

}
export default App;