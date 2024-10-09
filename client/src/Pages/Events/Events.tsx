import React, { useEffect, useState, useContext } from "react";
import './assets/style.scss'
import down from "./assets/downgrade.svg";
import mesto from "./assets/mesto.png";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import WebFont from 'webfontloader';
import {Context} from "../../index";

interface IEvent {
    id: number;
    name: string;
    pos: string;
    price: number;
}

const Card= () => {
    const [events, setEvents] = useState<IEvent[]>();
    const apiUrl = `http://localhost:7209/events`;
    const navigate = useNavigate();
    const {store} = useContext(Context);

    const navigateToEvent = (eventID: number) => {
        navigate(`/event/${eventID}`);
    }
     
    // useEffect(() => {
    //     WebFont.load({
    //         google: {
    //           families: ['Exo 2', 'Inter']
    //         }
    //       });
    //     getEvents();
    // }, []);




    return (
        <div className="event__list">
            <Header authorized={false} />
            <div className="event__main"> 
            <div className="left">
                <div className="left__item"><p>Художник</p>
                <img src={down} alt="" />
                </div>
                <div className="left__item"><p>Цена</p>
                <img src={down} alt="" />
                </div>
                <div className="left__item"><p>Размер</p>
                <img src={down} alt="" />
                </div>
                <div className="left__item"><p>Категории</p>
                <img src={down} alt="" />
                </div>
            </div>
            <div className="right">
                <p style={{marginBottom: "50px"}}>События</p>
                <h1 style={{marginBottom: "10px"}}>Рекомендуем</h1>
                <div className="right__items" style={{marginBottom: "40px"}}>
                {events?.map((item, index) => {
                    return (
                        <div className="right__items__item" key={index} onClick={() => navigateToEvent(item.id)}>
                            <img src={mesto} alt="" />
                            <div className="top"> 
                                <p style={{fontFamily: "Exo 2"}}>{item.name}</p>
                                <p>от {item.price} р</p>
                            </div>
                            <p>{item.pos}</p>
                    </div>
                    );
                })}
                </div>
                <div className="right__sort">
                    <p>Сортировка новинки</p>
                    <img src={down} alt="" />
                </div>
                   <div className="right__items" style={{marginBottom: "40px"}} >
                {events?.map((item, index) => {
                    return (
                        <div className="right__items__item" key={index} onClick={() => navigateToEvent(item.id)}>
                            <img src={mesto} alt="" />
                            <div className="top"> 
                                <p>{item.name}</p>
                                <p>от {item.price} р</p>
                            </div>
                            <p>{item.pos}</p>
                    </div>
                    );
                })}
                </div>
            </div>
            </div>
        </div>
    )




    async function getEvents() {
        setEvents([{id: 1, name: "Качалка в смолапо", pos: "смолапо", price: 999999},{id: 2, name: "Качалка в смолапо", pos: "смолапо", price: 999999},{id: 3, name: "Качалка в смолапо", pos: "смолапо", price: 999999},{id: 4, name: "Качалка в смолапо", pos: "смолапо", price: 999999},{id: 1, name: "Качалка в смолапо", pos: "смолапо", price: 999999},{id: 1, name: "Качалка в смолапо", pos: "смолапо", price: 999999}]);
        fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Данные не найдены');
          }
          return response.json();
        })
        .then((data: IEvent[]) => setEvents(data))
        .catch((error) => {
          if (error.message === 'Данные не найдены') {
            // Обработка ошибки 404
            console.error('Ошибка 404: Данные не найдены');
          } else {
            console.error('Произошла ошибка при загрузке данных:', error);
          }
        });
    }
};
export default Card;