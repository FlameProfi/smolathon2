import React, { useEffect } from "react";
import './assets/style.scss'
import likes_ico from "./assets/likes.svg"

const PhotoModal= ({active, setActive, photo, likes, description, tittle} : {active: any, setActive: any, photo: any, likes: number, description: string, tittle: string}) => {

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }
    }, [active]);

    if (!active) return null;



    return (
        <div className={active ? "photo_modal active" : "photo_modal"} onClick={() => setActive(false)}>
            <div className={active ? "photo_modal__content active" : "photo_modal__content"} onClick={e => e.stopPropagation()}>
                <div className="modal__gencontent">
                    <img src={`data:image/jpeg;base64,${photo}`} alt="" />
                    <div className="modal__gencontent__left">
                    <h1 style={{marginBottom: "10px"}}>{tittle}</h1>
                    <div className="gencontent__likes" style={{marginBottom: "20px"}}>
                        <img src={likes_ico} alt="" />
                        <p>{likes}</p>
                    </div>
                    <p>{description}</p>
                    </div></div>
            </div>
        </div>
    )

};
export default PhotoModal;