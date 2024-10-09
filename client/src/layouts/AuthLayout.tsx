import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";

import '../styles/AuthorizedLayout.scss'

import logo from "../assets/logo.svg";
import searchLogo from "../assets/search.svg";
import profile from "../assets/profile.svg";
import message from "../assets/message.svg";



const AuthLayout = () => {
    const navigate = useNavigate();


    const [search, setSearch] = useState<boolean>(false);
    const [inputSearch, setInputSearch] = useState<string>("");


    const inputCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "inputSearch") setInputSearch(value);
    };



    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )

}

export default AuthLayout;