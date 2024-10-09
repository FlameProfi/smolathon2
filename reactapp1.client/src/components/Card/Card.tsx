import React, { useEffect, useState } from "react";
import './assets/style.scss'
import { useParams } from "react-router-dom";
import testImg from "./assets/test_logo.png";
import star from "./assets/star.svg";
import { Header } from "../Header/Header";
interface ICard {
    id: number;
    name: string;
    size: string;
    canvas: string;
    TODO1: string;
    TODO2: string;
}

const Card= () => {
    const { productId } = useParams();
    const [card, setCard] = useState<ICard>();
    const apiUrl = `http://localhost:7209/cardId=${productId}`;

    useEffect(() => {
        getCard();
    }, []);




    return (
        <div className="modal active">
            <div className="modal__content">
            <Header authorized={false}/>
                <div className="top">
                    <div className="left">
                        <h1>{card?.name}</h1>
                        <div className="description">
                            <div className="description__item"> 
                            <p>Размер(шXвXд)</p><span>{card?.size}</span>
                            </div>
                            <div className="description__item"> 
                            <p>Холст</p><span>{card?.canvas}</span>
                            </div>
                            <div className="description__item"> 
                            <p>Комплектация</p><span>xkxskxkxk</span>
                            </div>
                            <div className="description__item"> 
                            <p>Масса товара с упаковкой</p><span>xkxskxkxk</span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src={testImg} alt="" />
                    </div>
                </div>
                <button className="toSellerPage">Перейти на страницу продавца</button>
                <div className="reviews">
                    <h1>Отзывы</h1>
                    <div className="reviews__items">
                        <div className="reviews__item"> 
                            <div className="name__stars"> 
                            <h1>Алек</h1>
                            <div className="stars"> 
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            </div>
                            </div>
                            <p>Ужасная доставка, все не по срокам, не советую!!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )




    async function getCard() {
        setCard({id: 1, name: "Картина", size: "100x100x100", canvas: "Бумага", TODO1: "sdllsd", TODO2: "lfdlfdlfd"});
        fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Данные не найдены');
          }
          return response.json();
        })
        .then((data: ICard) => setCard(data))
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