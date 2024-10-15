import React, { useEffect, useState } from "react";
import cccef1b from "./img/3cccef1b-92ea-42ba-8689-dd0843f88363-1.png";
import authorBa from "./img/authorBack.png";
import header_back from "./img/header_background.png";
import image_72 from "./img/image72.png";
import outline from "./img/ion_people-outline.svg";
import solarcup from "./img/solar_cup-bold.svg";
import './assets/style.scss'
import { useNavigate } from "react-router-dom";

export const LoadingPage = () => {
    const navigate = useNavigate();

    const handleNavigate = (to: string) => {
        navigate(to);
    }

    return (
        <div className="content">
        <div className="landing-header">
          <p className="landing-header-text">Современный маркетплейс <br />
            творческих работ разных направленностей</p>
    
            <div className="landing-header-buttonBlock">
              <button className="landing-header-button">НАЧАТЬ ТВОРИТЬ</button>
              <button className="landing-header-button">ПЕРЕЙТИ В КАТАЛОГ </button>
            </div>
        </div>
        <div className="landing-header-about-us">
           <p className="landing-header-about-us-label">О платформе</p>
           <div className="landing-header-about-us-list">
              <div className="landing-header-about-us-block">
                <p className="landing-header-about-us-block-text">Делись своим творчеством,
                  участвуйте в событиях</p>
                <div className="landing-header-about-us-block-fotter">
                  <img className="anding-header-about-us-block-imgt" src={outline} alt="" />
                </div>
              </div>
              <div className="landing-header-about-us-block">
                <p className="landing-header-about-us-block-text">Возможность найти единомышленников для развития собственного проекта</p>
                <div className="landing-header-about-us-block-fotter">
                  <img className="anding-header-about-us-block-imgt" src={outline} alt=" " />
                </div>
              </div>
              <div className="landing-header-about-us-block">
                <p className="landing-header-about-us-block-text">Продавай свои работы,
                  покупай чужие</p>
                <div className="landing-header-about-us-block-fotter">
                  <img className="anding-header-about-us-block-imgt" src={outline} alt="" />
                </div>
              </div>
              <div className="landing-header-about-us-block">
                <p className="landing-header-about-us-block-text">Исследуйте креативную карту Смоленска и находите новые места для интересных знакомств и творческого развития</p>
                <div className="landing-header-about-us-block-fotter">
                  <img className="anding-header-about-us-block-imgt" src={outline} alt="" />
                </div>
              </div>
           </div>
        </div>
        <div className="landing-header-authors">
          <p className="landing-header-authors-label">Рекомендуемые авторы</p>
            <div className="landing-header-authors-categories-list">
              <button className="landing-header-authors-category">Музыканты</button>
              <button className="landing-header-authors-category">Иллюстраторы</button>
              <button className="landing-header-authors-category">Художники</button>
              <button className="landing-header-authors-category">Веб-дизайнеры</button>
              <button className="landing-header-authors-category">Анимация</button>
            </div>
            <div className="landing-author-card">
                <img src={image_72} alt="" />
                <div className="landong-author-info">
                  <div className="landing-author-base-info">
                    <p className="landing-author-FIO">Станислав Петрушкин</p>
                    <p className="landing-author-nickname">Художник</p>
                  </div>
                  <p className="landing-author-description">Самбист атлет валет Самбист атлет валет
                    Самбист атлет валет Самбист атлет валет
                    Самбист атлет валет Самбист атлет валет</p>  
                </div>
            </div>
            <div className="landing-author-works">
              <div className="landing-author-work">
                <img src={cccef1b} alt="" />
                <p className="landing-author-work-name">Винный день</p>
              </div>
            </div>
        </div>
        <div className="landing-header-events">
          <p className="landing-header-event-label">Рекомендуемые авторы</p>
          <div className="landing-header-event-list">
            <div className="landing-header-event">
              <div className="landing-header-event-info">
                <div className="landing-header-event-name">
                  <img src={solarcup} alt="" />
                  <p className="landing-header-event-name-text">Конкурс “Смоленский креатив”</p>
                </div>
                <p className="landing-header-event-description">Ежемесячный конкурс художников и
                  иллюстраторов. Сразитесь с сильнейшими
                  художникками и выиграйте!</p>
              </div>
              <button className="landing-header-event-btn">Подать заявку</button>
            </div>
          </div>
        </div>  
      </div>
    )

}