import React, { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import searchLogo from "./assets/search.svg";
import profile from "./assets/profile.svg";
import message from "./assets/message.svg";
import './assets/style.scss'
import { useNavigate } from "react-router-dom";

export const Header = (_props: { authorized: boolean }) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState<boolean>(false);
    const [inputSearch, setInputSearch] = useState<string>("");

    const handleSearch = () => {
        if(search){
            setSearch(false)
            // ЛОГИКА ПОИСКА
            console.log(inputSearch)
        }else{
            setSearch(true)
        }
    }
    const inputCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "inputSearch") setInputSearch(value);
    };
    const handleLogin = () => {
        navigate("/login");
    }

    return (
        <div className="header" style={{marginLeft: "30px", marginBottom: "20px"}}>
            <div className="logo__">
            <img src={logo} alt="" style={{marginRight: "20px"}} />
            <div className="logo__name">
                <h1>ARTCONNECT</h1>
                <div className="logo__name__block">
                    <div className="block" />
                    <p>SMOLENSK</p>
                    <div className="block" />
                </div>
            </div>
            </div>
            <div className={search ? "header__menu" : "header__menu active"} style={{marginLeft: "90px"}}>
                <p>АВТОРЫ</p>
                <p>ПРОЕКТЫ</p>
                <p>ВЕБИНАРЫ</p>
                <p>ВЫСТАВКИ В СМОЛЕНСКЕ</p>
                <p>ОНЛАЙН СОБЫТИЯ</p>
            </div>
            <input type="text" 
            className={search ? "input_test active" : "input_test"}
            style={{marginLeft: "90px"}} 
            name="inputSearch"
            value={inputSearch}
            onChange={inputCheck}
            placeholder="Поиск"/>
            <div className="icons">
                <img src={searchLogo} alt="" onClick={handleSearch}/>
                <img src={message} alt="" />
                <img src={profile} alt="" />

            </div>
            {/* <div className="search__login"> 
            <div className="header__search">
                <img src={search_logo} alt="" onClick={handleSearch}/>
                <input type="text" placeholder="Поиск" />
            </div>
            <button className="header__login" onClick={handleLogin}>Войти</button>
            </div> */}
        </div>
    )

}