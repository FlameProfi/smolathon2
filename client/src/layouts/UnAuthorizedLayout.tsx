import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";

import '../styles/AuthorizedLayout.scss'

import logo from "../assets/logo.svg";
import searchLogo from "../assets/search.svg";
import profile from "../assets/profile.svg";
import message from "../assets/message.svg";



const UnAuthorizedLayout = () => {
    const navigate = useNavigate();


    const [search, setSearch] = useState<boolean>(false);
    const [inputSearch, setInputSearch] = useState<string>("");


    const inputCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "inputSearch") setInputSearch(value);
    };



    return (
        <>

            <header className="header__custom">
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

                    <NavLink to="/auth/login">
                        АВТОРИЗАЦИЯ
                    </NavLink>
                    <NavLink to="/auth/register">
                        РЕГИСТРАЦИЯ
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
                {/* <input type="text"
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

                </div> */}

            </header>
            <main>
                <Outlet />
            </main>
        </>
    )

}

export default UnAuthorizedLayout;