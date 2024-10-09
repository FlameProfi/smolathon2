import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import './assets/style.scss'
import React from "react";
import {Context} from "../../index";

function Login() {
    // state variables for email and passwords
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    // state variable for error messages
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const {store} = useContext(Context);

    // handle change events for input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleRegisterClick = () => {
        navigate("/register");
    }

    // handle submit event for the form
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // validate email and passwords
        if (!email || !password) {
            setError("Please fill in all fields.");
        } else {
            setError("");

            var status = store.login(email, password);
            status.then((data) => {
                if (data?.status == 200){ 
                    console.log("ВОШЛО УСПЕШНО")
                    navigate("/events")
                }
                else
                    setError("Error registering.");

            })
            .catch((error) => {
                console.error(error);
                setError("Error registering.");
            });
            
        }
    };

    return (
        <div className="auth_page">
            <h3>ArtConnect Smolensk</h3>
            <div className="auth_box"> 
                <h1>АВТОРИЗАЦИЯ</h1>
                <form onSubmit={handleSubmit}>
                <div className="box_input">
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

                </div>
                    {/* TO DO CAPTHA */}
                    <div className="box_buttons">
                        <button className="buttons_login" type="submit">ВОЙТИ</button>
                        <button className="buttons_reg" onClick={handleRegisterClick}>РЕГИСТРАЦИЯ</button>
                    </div>
                    </form>
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Login;
