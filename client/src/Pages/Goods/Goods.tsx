import React, { useEffect, useState, useContext } from "react";
import './assets/style.scss'
import down from "./assets/downgrade.svg";
import pg_heart from "./assets/ph_heart.png";
import { useNavigate } from "react-router-dom";
import WebFont from 'webfontloader';
import {Context} from "../../index";
import Dropdown from "../../components/Dropdown/DropDown";
import { AllWorks } from "../../models/IProfile";

const Goods= () => {
    const [goods, setGoods] = useState<AllWorks[]>();
    const navigate = useNavigate();
    const {store} = useContext(Context);
     
    useEffect(() => {
        WebFont.load({
            google: {
              families: ['Exo 2', 'Exo 2']
            }
          });
        getGoods();
    }, []);




    return (
        <div className="event__list">
            <div className="event__main"> 
            <div className="left">
                <Dropdown title="Автор"/>
                <Dropdown title="Цена" />
                <Dropdown title="Размер" options={['Маленький', 'Средний', 'Большой']} />
                <Dropdown title="Категории" options={['Категория 1', 'Категория 2']} />
            </div>
            <div className="right">
                <p style={{marginBottom: "50px"}}>Товары</p>
                <div className="right__sort">
                    <p>Сортировка новинки</p>
                    <img src={down} alt="" />
                </div>
                   <div className="right__items" style={{marginBottom: "40px"}} >
                {goods?.map((item, index) => {
                    return (
                        <div className="product-card" key={index}>
                        <img src={`data:image/jpeg;base64,${item.photo}`} alt="Картина" className="product-image" />
                        <div className="product-info">
                            <span className="artist-name"></span>
                            <div className="product-like">
                                <span>{item.countLikes}</span>
                                <img src={pg_heart} alt="Like" /> 
                            </div>
                        </div>
                        <p className="product-title">{item.name}</p>
                        <p className="product-description">{item.description}</p>
                        <div className="product-footer">
                        <span className="price">100 р</span>
                        <button className="add-to-cart">В корзину</button>
                    </div>
                </div>
                    );
                })}
                </div>
            </div>
            </div>
        </div>
    )




    async function getGoods() {
        var getGoods = store.getAllWorks();
        setGoods(await getGoods);
    }
};
export default Goods;