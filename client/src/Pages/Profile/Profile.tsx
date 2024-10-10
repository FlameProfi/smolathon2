import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {Context} from "../../index";
import './assets/style.scss'
import ava from "./assets/ava.png";
import message_icon from "./assets/message_ico.svg";
import share_icon from "./assets/share_ico.svg";
import change_icon from "./assets/change_ico.svg";
import verifed from "./assets/verifed.svg"
import WebFont from 'webfontloader';
import StarRating from "../../components/Stars/Stars";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Portfolio from "../../components/Portfolio/Portfolio";

interface IUser {
    id:                     number;
    Name:                   string;
    SurnameName:            string;
    SubscriberCount:        number;
    LikeCount:              number;
    WorkCount:              number;
    Discription:            string;
    AvatarPic:              string;
    BackgroundPic:          string;
    works: { title: string; year: number }[];
  }

const Profile= () => {
    const [user, setUser] = useState<IUser>();
    const [page, setPage] = useState<string>("portfolio");
    const apiUrl = `http://localhost:7209/user/`;
    const {store} = useContext(Context);
    const navigate = useNavigate();
    const checkBearer =() =>{
      if(store.isAuth){
        store.testBearer();
        navigate("/auth/login")
      }
    }

    const changePage = (page: string) => {
      if(!(page == "portfolio" || page == "endOrders" || page == "goods")){
        toast.error('Данная страница не найдена!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      }
      setPage(page);
    }

    const renderPage = () => {
      if(page == "portfolio"){ 
       return <Portfolio userName={"lololo"}/>
      }else if(page == "endOrders"){
        return 
      }else{
        return 
      }

    }

    useEffect(() => {
        WebFont.load({
            google: {
              families: ['Exo 2', 'Exo 2']
            }
          });
        // checkAuth();
        getUserByUsername();
    }, []);




    return (
        <div className="profile">
            <div className="profile__content"> 
              <div className="profile__info__block">
                <img src={ava} alt="" />
                <div className="block__info">
                  <h1>{user?.Name} {user?.SurnameName}</h1>
                  <div className="reviev__block_etc">
                    <div className="stars">
                      <StarRating stars={7} /> 
                      <img src={verifed} alt="" />
                    </div>
                  </div>
                  <div className="block__stats">
                    <h1>{user?.SubscriberCount} <br/> подписчиков</h1>
                    <h1>{user?.LikeCount} <br/> лайков</h1>
                    <h1>{user?.WorkCount} <br/> работ</h1>
                  </div>
                  <div className="block__buttons">
                    <button onClick={() => checkBearer()}>
                      <img src={message_icon} alt="" />
                      Сообщение</button>
                    <button>
                      <img src={share_icon} alt="" />
                      Поделиться</button>
                    <button>
                      <img src={change_icon} alt="" />
                      Редактировать</button>
                  </div>
                </div>
              </div>
              <div className="profile__desc__block">
                <h1>Об авторе:</h1>
                <p>{user?.Discription}</p>
                <div className="profile__desc__block__tags">
                    <div className="tags__item">Художник</div>
                    <div className="tags__item">Художник</div>
                    <div className="tags__item">Художник</div>
                </div>
              </div>
              <div className="profile__desc__block__selector"> 
                <h1 className={page === "portfolio" ? "selector__text active" : "selector__text"} 
                onClick={ () => changePage("portfolio")}>
                Портфолио</h1>
                <h1 className={page === "endOrders" ? "selector__text active" : "selector__text"}
                onClick={ () => changePage("endOrders")}
                >Завершенные заказы</h1>
                <h1 className={page === "goods" ? "selector__text active" : "selector__text"}
                onClick={ () => changePage("goods")}
                >Товары</h1>
              </div>

              {renderPage()}
            </div>
            <ToastContainer />
        </div>
    )

    async function getUserByUsername() {
    
        setUser({id: 1,
          Name: "Александр",
          SurnameName: "Иванов",
          SubscriberCount: 250,
          LikeCount: 1200,
          WorkCount: 10,
          Discription: "Креативный дизайнер с опытом работы в различных проектах.",
          AvatarPic: "https://example.com/avatar.jpg",
          BackgroundPic: "https://example.com/background.jpg",
          works: [
              { title: "Логотип для компании", year: 2022 },
              { title: "Дизайн вебсайта", year: 2023 },
              { title: "Брендинг", year: 2021 },
          ],
      })
    }
};
export default Profile;