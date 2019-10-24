import React from 'react';
import logo from '../assets/tindev.svg';
import './Login.css';
export default function Login() {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="tindev"/>
                <input type="text" placeholder="Digite seu usuário no Github"/>
                <button type="submit">Enviar</button>
            </form>
        </div>      
    );
}

