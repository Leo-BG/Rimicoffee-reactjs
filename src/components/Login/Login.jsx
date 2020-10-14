import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import logo from '../header/logo.png'
import { auth } from 'firebase';

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (event) => {
        event.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to home
                history.push("/");
            })
            .catch((e) => alert(e.message))
    };
    const register = (event) => {
        event.preventDefault();
        //register

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //creat a user
                history.push('/');

            }).catch((e) => alert(e.message))
    };
    return (
        <div className="login">
            <Link to="/">
                <img src={logo} alt="logo.png" className="login__logo" />
            </Link>
            <div className="login__container">
                <h1>Đăng nhập</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signBt">Đăng nhập</button>

                </form>
                <p>Đăng nhập để theo dõi đơn hàng, lưu
                danh sách sản phẩm yêu thích, nhận
                nhiều ưu đãi hấp dẫn.
                    </p>
                <button onClick={register} className="login__registerBt">Đăng ký tài khoản</button>
            </div>
        </div>

    )
}

export default Login
