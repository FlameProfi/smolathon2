import React, { useEffect, useState, useContext } from "react";
import './assets/style.scss'
import testImg from "./assets/test_logo.png";
import {Context} from "../../index";
import bg_picture from "./assets/image.png"
import love_ico from "./assets/ph_heart.png"
import { WorkInProfile } from "../../models/IProfile";
const ProfileGoods = (_props: { worksProfile: WorkInProfile[] }) => {
    const [tittle, setTittle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [likes, setLikes] = useState<number>();
    const [photo, setPhoto] = useState<any>();
    useEffect(() => {
        getCard();
    }, []);
    const findModal = (id: string) => {
        var work = _props.worksProfile?.find(x => x.id == id);
        setTittle(work?.name);
        setDescription(work?.description);
        setLikes(work?.countLikes);
        setPhoto(work?.photo);
        //setModalActive(true)
    }
    return (
        <div className="profile__gods">
            {_props.worksProfile?.map((item, index) => {
                    return (
                        <div className="card">
                            <img src={`data:image/jpeg;base64,${item.photo}`} alt={item.name} className="product-image" />
                            <div className="card-content">
                                <div className="header">
                                    <div className="like">
                                        <span>{item.countLikes}</span>
                                        <img src={love_ico} alt="Like" />
                                    </div>
                                </div>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="card-footer">
                                <span className="price">150 р</span>
                                <button className="buy-btn">Купить</button>
                            </div>
                        </div>
                    );
                })}
             {/* {card?.works.map((item, index) => {
                    return (
                        <div classNameName="portfolio__work" onClick={() => findModal(item.id)}> 
                        <img src={`data:image/jpeg;base64,${item.photo}`} key={index} />
                        <p>{item.title}</p>
                        </div>
                    );
                })} */}
        </div>
    )




    async function getCard() {
        
    }
};
export default ProfileGoods;