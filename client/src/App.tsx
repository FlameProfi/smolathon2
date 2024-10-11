import React, {FC, useContext, useEffect, useState} from 'react';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthorizedLayout from './layouts/AuthorizedLayout.tsx';
import UnAuthorizedLayout from './layouts/UnAuthorizedLayout.tsx';
import AuthLayout from "./layouts/AuthLayout.tsx"
import Login from './Pages/Login/Login.tsx';
import Register from './Pages/Register/Register.tsx';
import Goods from './Pages/Goods/Goods';
import NotFound from './Pages/404/404.tsx';
import "./styles/fonts.css"
import Profile from './Pages/Profile/Profile.tsx';
import { LoadingPage } from './Pages/LoadingPage/LoadingPage';
import { CreateObject } from './Pages/CreateObject/CreateObject';
const App: FC = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
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
                <Route index element={<LoadingPage />} />
                <Route path="goods" element={<Goods />} />
                <Route path="addGoods" element={<CreateObject />}/>
                <Route path="authors" element={<p>12dfsgsdfgsdgf3</p>} />
                <Route path="profile/:username" element={<Profile />}/>

            


                
            </Route>
                :
            // {/* Неавторизованный роутинг */}
            <Route path="/" element={<UnAuthorizedLayout />} >
            <Route index element={<LoadingPage/ > } />
            <Route path="events" element={<p >ggg</p>} />

                </Route>
            }




            {/* Роутинг с авторизацией без хедера и футера */}
            <Route path="/auth" element={<AuthLayout />} >
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

            </Route>

            <Route path="*" element={<NotFound />} />

        </Routes>
    </BrowserRouter>
    );
};

export default observer(App);