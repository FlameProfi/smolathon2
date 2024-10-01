import React, { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import search_logo from "./assets/search_logo.png";
import './assets/style.scss'
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    const handleSearch = () => {
        alert("кнопка")
    }
    const handleLogin = () => {
        navigate("/login");
    }

    return (
        <div className="header">
            <img src={logo} alt="" />
            <div className="header__menu">
                <p>ПРОЕКТЫ</p>
                <p>АВТОРЫ</p>
                <p>ВЕБИНАРЫ</p>
                <p>ВЫСТАВКИ В СМОЛЕНСКЕ</p>
                <p>ОНЛАЙН СОБЫТИЯ</p>
            </div>
            <div className="search__login"> 
            <div className="header__search">
                <img src={search_logo} alt="" onClick={handleSearch}/>
                <input type="text" placeholder="Поиск" />
            </div>
            <button className="header__login" onClick={handleLogin}>Войти</button>
            </div>
        </div>
    )

}