import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar"
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './Login.css';

function Login() {
    const history = useHistory(); 
    return (
        <div>
            <Navbar/>
            <div class='content'>
                <form onSubmit={(event) => {
                    let path = `/home`; 
                    history.push(path);
                    //console.log(event.target.username.value)
                    //console.log(event.target.password.value)
                    let condition = ""
                    axios.post('/auth', {
                        username: event.target.username.value,
                        password: event.target.password.value
                    })
                    .then(function (response) {
                        condition = response.data
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    if (condition === "Authenticated!") {
                        let path = `/home`; 
                        history.push(path);
                    }
                }}>
                    <h2 class="register-label">Login</h2>
                        <input class="un" type="text" name="username" placeholder="Username"/>
                        <input class="pass" type="text" name="password" placeholder="Password"/>
                    <button class="btn">Login</button>
                    <p class="need-account-cover"><a class="need-account" onClick={() => {window.location.href="/register"}}>Don't have an account?</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login;