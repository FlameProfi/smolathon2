import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom';
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
import ProfileGoods from "../../components/ProfileGoods/ProfileGoods";
import UserService from "../../services/UserService";
import { IProfile, WorkInProfile } from "../../models/IProfile";

enum CategoryProduct
    {
        Художник = 1,
        Sculptures,
        Music,
        Video,
        Clothes
    }


const Profile= () => {
    const { username } = useParams();
    const [user, setUser] = useState<IProfile>();
    const [workInProfile, setWorkInProfile] = useState<WorkInProfile[]>();
    const [isOwner, setIsOwner] = useState<boolean>(false);
    const [page, setPage] = useState<string>("portfolio");
    const {store} = useContext(Context);
    const navigate = useNavigate();
    const checkBearer =() =>{
      if(store.isAuth){
        store.testBearer();
        navigate("/auth/login")
      }
    }

    const getStatusNameById = (id: number): string => {
        return CategoryProduct[id] || 'Не указана';
      };

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
       return <Portfolio works={user?.products} userName={user?.nickname}/>
      }else if(page == "endOrders"){
        return 
      }else{
        return <ProfileGoods worksProfile={workInProfile}/>
      }

    }

    useEffect(() => {
        WebFont.load({
            google: {
              families: ['Exo 2', 'Exo 2']
            }
          });
          if(store.user.nickname === user?.nickname){
            setIsOwner(true);
          }
        // checkAuth();
        getUserByUsername();
    }, []);




    return (
        <div className="profile">
            <div className="profile__content"> 
              <div className="profile__info__block">
              {user?.avatarPic ? (
                  <img src={`data:image/jpeg;base64,${user.avatarPic}`} alt="User Avatar" />
                ) : (
                  <img src={ava} alt="Default Avatar" />
                )}

                <div className="block__info">
                  <h1>{user?.name} {user?.surnameName}</h1>
                  <div className="reviev__block_etc">
                    <div className="stars">
                      <StarRating stars={5} /> 
                      { user?.isVerificate ? <img src={verifed} alt="" /> : null}
                    </div>
                  </div>
                  <div className="block__stats">
                    <h1>{user?.subscriberCount} <br/> подписчиков</h1>
                    <h1>{user?.likeCount} <br/> лайков</h1>
                    <h1>{user?.workCount} <br/> работ</h1>
                  </div>
                  <div className="block__buttons">
                    <button onClick={() => checkBearer()}>
                      <img src={message_icon} alt="" />
                      Сообщение</button>
                    <button>
                      <img src={share_icon} alt="" />
                      Поделиться</button>
                      {
                        isOwner ? 
                        <button>
                        <img src={change_icon} alt="" />
                        Редактировать</button>
                        : null
                      }
                  </div>
                </div>
              </div>
              <div className="profile__desc__block">
                <h1>Об авторе:</h1>
                <p>{user?.discription ? user?.discription : "Автор пока ничего не указал :("}</p>
                <div className="profile__desc__block__tags">
                    <div className="tags__item">{getStatusNameById(user?.preferredCategory)}</div>
                </div>
              </div>
              <div className="profile__desc__block__selector"> 
                <h1 className={page === "portfolio" ? "selector__text active" : "selector__text"} 
                onClick={ () => changePage("portfolio")}>
                Портфолио</h1>
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
        console.log(username);
        var getProfile = store.getProfile(username);
        setUser(await getProfile);
        var getWorkInProfile = store.getWorkProfile(username);
        setWorkInProfile(await getWorkInProfile);
        
        // setUser()
    }
};
export default Profile;