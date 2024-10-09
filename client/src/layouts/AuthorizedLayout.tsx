import React, { useEffect, useState, useContext } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";

import '../styles/AuthorizedLayout.scss'
import {Context} from "../index";
import logo from "../assets/logo.svg";
import searchLogo from "../assets/search.svg";
import profile from "../assets/profile.svg";
import message from "../assets/message.svg";



const AuthorizedLayout = () => {
    const navigate = useNavigate();

    const {store} = useContext(Context);
    const [search, setSearch] = useState<boolean>(false);
    const [inputSearch, setInputSearch] = useState<string>("");

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
        if(!store.isAuth){
            navigate("/")
        }
    }, [])


    const inputCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "inputSearch") setInputSearch(value);
    };



    return (
        <>

            <header className="header">
                <NavLink to="/">
                    <div className="logo__">
                        <img src={logo} alt="" style={{ marginRight: "20px" }} />
                        <div className="logo__name">
                            <h1>ARTCONNECT</h1>
                            <div className="logo__name__block">
                                <div className="block" />
                                <p>SMOLENSK</p>
                                <div className="block" />
                            </div>
                        </div>
                    </div>
                </NavLink>

                <div className="header__menu" >

                    <NavLink to="/events">
                        СОБЫТИЯ
                    </NavLink>
                    <NavLink to="/authors">
                        АВТОРЫ
                    </NavLink>
                    {/* <NavLink to="/">
                        ПРОЕКТЫ
                    </NavLink>
                    <NavLink to="/">
                        ВЕБИНАРЫ
                    </NavLink>
                    <NavLink to="/">
                        ВЫСТАВКИ В СМОЛЕНСКЕ
                    </NavLink> */}


                </div>
                <input type="text"
                    className={search ? "input_test" : "input_test"}
                    style={{ marginLeft: "90px" }}
                    name="inputSearch"
                    value={inputSearch}
                    onChange={inputCheck}
                    placeholder="Поиск" />
                <div className="icons">
                    <img src={searchLogo} alt="" />
                    <img src={message} alt="" />
                    <img src={profile} alt="" />

                </div>

            </header>
            <main>
                <Outlet />
            </main>
            <footer className="footer">
                <h1>Футер хуйня сделать</h1>
            </footer>
        </>
    )

}

export default AuthorizedLayout;