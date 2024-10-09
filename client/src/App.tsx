import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthorizedLayout from './layouts/AuthorizedLayout.tsx';
import UnAuthorizedLayout from './layouts/UnAuthorizedLayout.tsx';
import AuthLayout from "./layouts/AuthLayout.tsx"
import Login from './Pages/Login/Login.tsx';
import Register from './Pages/Register/Register.tsx';
import Events from './Pages/Events/Events.tsx';
import Event from "./Pages/EventPage/EventPage.tsx"
import Card from './components/Card/Card.tsx';
import "./styles/fonts.css"
import Profile from './Pages/Profile/Profile.tsx';

const App: FC = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }

    }, [])

    if (store.isLoading) {
        return <div>Загрузка...</div>
    }

    // if (!store.isAuth) {
    //     return(
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path="/login" element={<Login />} />
    //             <Route path="/register" element={<Register />} />
    //             <Route path="/card/:productId" element={<Card/>} />
    //             <Route path="/event/:eventId" element={<Event />} />
    //             <Route path="/profile/" element={<Profile />} />
    //             <Route path="/" element={<Login />} />
    //             <Route path="*" element={<Login />} />
    //         </Routes>
    //     </BrowserRouter>
    //     );
    // }

    return (
        <BrowserRouter>
        <Routes>



            {/* Авторизованный роутинг */}

            
            {store.isAuth ? 
            <Route path="/" element={<AuthorizedLayout />} >
                <Route index element={<p>12dfsgsdfgsdgf3</p>} />
                <Route path="events" element={<Events />} />
                <Route path="authors" element={<p>12dfsgsdfgsdgf3</p>} />
        


            


                
            </Route>
                :
            // {/* Неавторизованный роутинг */}
            <Route path="/" element={<UnAuthorizedLayout />} >
            <Route index element={<p>dhgfdfgdfgh</p>} />
            <Route path="events" element={<p>ggg</p>} />
            <Route path="authors" element={<p>12dfsgsdfgsdgf3</p>} />

                </Route>
            }




            {/* Роутинг с авторизацией без хедера и футера */}
            <Route path="/auth" element={<AuthLayout />} >
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

            </Route>



        </Routes>
    </BrowserRouter>
    );
};

export default observer(App);