import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {Context} from "../../index";
import './assets/style.scss'
import ava from "./assets/ava.png";
import message_icon from "./assets/message_ico.svg";
import share_icon from "./assets/share_ico.svg";
import WebFont from 'webfontloader';

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
    const apiUrl = `http://localhost:7209/user/`;
    const {store} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        WebFont.load({
            google: {
              families: ['Exo 2', 'Inter']
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
                  <div className="block__stats">
                    <h1>{user?.SubscriberCount} <br/> подписчиков</h1>
                    <h1>{user?.LikeCount} <br/> лайков</h1>
                    <h1>{user?.WorkCount} <br/> работ</h1>
                  </div>
                  <div className="block__buttons">
                    <button>
                      <img src={message_icon} alt="" />
                      Сообщение</button>
                    <button>
                      <img src={share_icon} alt="" />
                      Поделиться</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )



    async function checkAuth(){
      if(!store.isAuth){
        navigate("/login")
      }
    }

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