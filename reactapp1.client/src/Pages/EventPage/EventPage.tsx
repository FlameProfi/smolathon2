import React, { useEffect, useState } from "react";
import './assets/style.scss'
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import picture from "./assets/picture.png"
import QrModal from "../../components/QrModal/QrModal";
interface IEvent {
    id: number;
    name: string;
    owner: string;
    date: string;
    time: string;
    address: string;
    price: number;
}

const Card= () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState<IEvent>();
    const apiUrl = `http://localhost:7209/event=${eventId}`;
    const [modalActive, setModalActive] = useState(); 
    useEffect(() => {
        getEvent();
    }, []);




    return (
        <div className="event">
            <Header authorized={false}/>
            <div className="event__content">
                <div className="event__content__left"> 
                    <img src={picture} alt="" />
                    <div className="slider">
                        <img src={picture} alt="" />
                        <img src={picture} alt="" />
                        <img src={picture} alt="" />
                    </div>
                </div>
                <div className="event__content__right"> 
                    <p style={{marginBottom: "25px"}}>Выставка</p>
                    <div className="event__content__right__info">
                        <p>{event?.name}</p>
                        <h1>{event?.price} Р</h1>
                        <button className="buy_ticket" onClick={() => setModalActive(true)}>Купить билет</button>
                    </div>
                    <div className="event__content__right__about__company" style={{marginTop: "80px"}}>
                        <p style={{marginBottom: "25px"}}>О событии</p>
                        <div className="fake__table">
                        <div className="dark__item">
                            <p>Организатор:</p> <span>текст</span>
                        </div>
                        <div className="light__item">
                        <p>Дата:</p> <span>текст</span>
                        </div>
                        <div className="dark__item">
                            <p>Время:</p> <span>текст</span>
                        </div>
                        <div className="light__item">
                            <p>Адрес:</p> <span>текст</span>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
            <QrModal active={modalActive} setActive={setModalActive}/>
        </div>
    )




    async function getEvent() {
        setEvent({id: 1, name: "ArtConnect Smolenks", owner: "СМОЛАПО", date: "12.12.12", time: "00:00", address: "Смоленск, гагарина 56", price: 150000});
        fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Данные не найдены');
          }
          return response.json();
        })
        .then((data: IEvent) => setEvent(data))
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