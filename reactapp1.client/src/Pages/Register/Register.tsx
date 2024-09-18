import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './assets/style.scss'


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

    // state variable for error messages
    const [error, setError] = useState("");

    const handleLoginClick = () => {
        navigate("/login");
    }


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
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // validate email and passwords
        if (!email || !password || !confirmPassword || !name || !surName || !nick || !phone) {
            setError("Please fill in all fields.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match.");
        } else {
            // clear error message
            setError("");
            // post data to the /register api
            fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })
                //.then((response) => response.json())
                .then((data) => {
                    // handle success or error from the server
                    console.log(data);
                    if (data.ok)
                        setError("Successful register.");
                    else
                        setError("Error registering.");

                })
                .catch((error) => {
                    // handle network error
                    console.error(error);
                    setError("Error registering.");
                });
        }
    };

    return (
        <div className="reg_page">
            <h3>ArtConnect Smolensk</h3>
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
        // <div className="containerbox">
        //     <h3>Register</h3>

        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="email">Email:</label>
        //         </div><div>
        //             <input
        //                 type="email"
        //                 id="email"
        //                 name="email"
        //                 value={email}
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div>
        //             <label htmlFor="password">Password:</label></div><div>
        //             <input
        //                 type="password"
        //                 id="password"
        //                 name="password"
        //                 value={password}
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div>
        //             <label htmlFor="confirmPassword">Confirm Password:</label></div><div>
        //             <input
        //                 type="password"
        //                 id="confirmPassword"
        //                 name="confirmPassword"
        //                 value={confirmPassword}
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div>
        //             <button type="submit">Register</button>

        //         </div>
        //         <div>
        //             <button onClick={handleLoginClick}>Go to Login</button>
        //         </div>
        //     </form>

        //     {error && <p className="error">{error}</p>}
        // </div>
    );
}

export default Register;
