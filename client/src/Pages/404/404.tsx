import { useNavigate, NavLink } from "react-router-dom";
import './assets/style.scss'
import photo from "./assets/img/ghost-img.png"

function NotFound() {

    const navigate = useNavigate();


    const handleLoginClick = () => {
        navigate("/login");
    }

    return (        
    <main className="main">
        <section className="home">
            <div className="home__container container">
                <div className="home__data">
                    <span className="home__subtitle">Error 404</span>
                    <h1 className="home__title">Привет</h1>
                    <p className="home__description">
                        Мы не можем найти страницу <br /> которую ты ищешь.
                    </p>
                    <NavLink to="/">
                    <a className="home__button">
                        Вернуться назад
                    </a> </NavLink>
                </div>

                <div className="home__img">
                    <img src={photo} alt="" />
                    <div className="home__shadow"></div>
                </div>
            </div>
        </section>
    </main>

    );
}

export default NotFound;
