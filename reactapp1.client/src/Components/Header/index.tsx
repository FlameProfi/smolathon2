import React, { useEffect, useState } from "react";
import logo from "./assets/stena.png";
import './assets/style.scss'


export const Header = () => {

    return (
        <div className="header">
            <div className="burger">
                <div className="item" />
                <div className="item" />
                <div className="item" />
            </div>

            <div className="center">
                <div className="logo">
                <img src={logo} alt="" />
                <h1>ArtConnect Smolensk</h1></div>
                <div className="new__items">
                    <p>НОВИНКА</p>
                    <p>НОВИНКА</p>
                    <p>НОВИНКА</p>
                    <p>НОВИНКА</p>
                    <p>НОВИНКА</p>
                    <p>НОВИНКА</p>
                </div>
            </div>

        </div>
    )

}