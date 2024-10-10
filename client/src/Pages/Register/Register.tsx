import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import './assets/style.scss'
import {Context} from "../../index";


function Register() {
    // state variables for email and passwords
    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");
    const [nick, setNick] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const {store} = useContext(Context);
    // state variable for error messages
    const [error, setError] = useState("");

    const handleLoginClick = () => {
        navigate("/login");
    }

    const validateRussianNumber = (number: string): boolean => {
        const regex = /^(\+7|8)\d{10}$/; // Пример формата: +7XXXXXXXXXX или 8XXXXXXXXXX
        return regex.test(number);
    };

    const validateBelarusianNumber = (number: string): boolean => {
        const regex = /^\+375(29|33|44|25|17)\d{7}$/; // Пример формата: +37529XXXXXXXX
        return regex.test(number);
    };

    
    // handle change events for input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "name") setName(value);
        if (name === "surName") setSurName(value);
        if (name === "nick") setNick(value);
        if (name === "phone") setPhone(value);
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        if (name === "confirmPassword") setConfirmPassword(value);

    };

    // handle submit event for the form
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword || !name || !surName || !nick || !phone) {
            setError("Заполните все поля");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Проверьте правильность введеного адреса.");
        } else if (password !== confirmPassword) {
            setError("Пароли не совпадают");
        } else if (!(validateRussianNumber(phone) || validateBelarusianNumber(phone))) {
            setError("Проверьте правильность номера");
        }  else {
            setError("");
            var status = store.registration(email, password, confirmPassword, name, surName, nick, phone);
            await status.then((data) => {
                if(data === 200){
                    console.log("ВОШЛО УСПЕШНО");
                    navigate(`/profile/${store.user.nickname}`);
                }
                else {
                    console.log(data);
                    setError("Ошибка при входе. Код: " + data);
                }
            })
        }
    };

    return (
        <div className="reg_page">
            <h3 >ArtConnect Smolensk</h3>
            <div className="auth_box"> 
                <h1>РЕГИСТРАЦИЯ</h1>
                <form onSubmit={handleSubmit}>
                <div className="box_input">
                    <div className="input_item">
                    <p>Имя</p>
                    <input type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChange} />
                    </div>
                    <div className="input_item">
                    <p>Фамилия</p>
                    <input type="text"
                        id="surName"
                        name="surName"
                        value={surName}
                        onChange={handleChange} />
                    </div>
                    <div className="input_item">
                    <p>Ник-нейм</p>
                    <input type="text"
                        id="nick"
                        name="nick"
                        value={nick}
                        onChange={handleChange} />
                    </div>
                    <div className="input_item">
                    <p>Номер телефона</p>
                    <input type="phone"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={handleChange} />
                    </div>
                    <div className="input_item">
                    <p>E-mail</p>
                    <input type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange} />
                    </div>
                    <div className="input_item">
                    <p>Пароль</p>
                    <input type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange} />
                    </div>
                    <div className="input_item">
                    <p>Повторите пароль</p>
                    <input type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange} />
                    </div>

                </div>
                    {/* TO DO CAPTHA */}
                    <div className="box_buttons">
                        <button className="buttons_login" type="submit">ЗАРЕГЕСТРИРОВАТЬСЯ</button>
                        <button className="buttons_reg" onClick={handleLoginClick}>ВОЙТИ</button>
                    </div>
                    </form>
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Register;
