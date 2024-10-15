import React, { useEffect, useState, useContext } from "react";
import cccef1b from "./img/3cccef1b-92ea-42ba-8689-dd0843f88363-1.png";
import authorBa from "./img/authorBack.png";
import header_back from "./img/header_background.png";
import image_72 from "./img/image72.png";
import outline from "./img/ion_people-outline.svg";
import solarcup from "./img/solar_cup-bold.svg";
import './assets/style.scss'
import { useNavigate } from "react-router-dom";
import {Context} from "../../index";

export const CreateObject = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [photo, setPhoto] = useState(null);
    const [count, setCount] = useState<number>();
    const [price, setPrice] = useState<number>();
    const setInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
     };
    const setInputDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
     };
    const setInputCount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(Number(event.target.value));
     };
    const setInputPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
     };
    const handleNavigate = (to: string) => {
        navigate(to);
    }

    const pushItem = () => {
        console.log(name, description, count, price)
        store.putGoods(name, description, count, price, store.user.id)
        handleNavigate("/")
    }
 
    return (
        <div className="LoadPageContainer">
        <h1>Новое объявление</h1>

        <div className="category-section">
            <div className="category">
                <button>Цифровое искусство</button>
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="ad-title">Название объявления</label>
            <input type="text" id="ad-title" placeholder="Введите название" value={name} onChange={setInputName}/>
        </div>

        <h2>Внешний вид</h2>
        <div className="form-group toggle-group">
            <label>Демонстрационные экземпляры</label>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
        <div className="form-group">
            <label>Фотографии (не более 10)</label>
            {/* <button className="photo-button">
                <img src="./raphael_photo.png" alt="Добавить фото" />
            </button> */}
        </div>

        <h2>Подробности</h2>
        <div className="form-group">
            <label htmlFor="ad-description">Описание объявления</label>
            <textarea id="ad-description" placeholder="Введите описание" value={description} onChange={setInputDesc}></textarea>
        </div>

        <div className="form-group">
            <label htmlFor="price">Цена</label>
            <input type="number" id="price" placeholder="Введите цену" value={price} onChange={setInputPrice}/>
        </div>

        <div className="form-group">
            <label htmlFor="price">Количество</label>
            <input type="number" id="price" placeholder="Введите количество" value={count} onChange={setInputCount}/>
        </div>

        <button className="publish-button" onClick={() => pushItem() }>Опубликовать</button>
    </div>
    )

}