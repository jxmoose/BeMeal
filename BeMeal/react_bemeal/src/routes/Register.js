import React, {useEffect, useState} from "react";
import './Register.css';
import Navbar from "../components/Navbar.js";
import axios from 'axios';

function Register() {
    return (
        <div>
            <Navbar/>
            <div class='content'>
                <form onSubmit={(event) => {
                    //console.log(event.target.username.value)
                    //console.log(event.target.password.value)
                    axios.post('/register', {
                        username: event.target.username.value,
                        password: event.target.password.value
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }}>
                    <h2 class="register-label">Register</h2>
                        <input class="un" type="text" name="username" placeholder="Username"/>
                        <input class="pass" type="text" name="password" placeholder="Password"/>
                    <button class="btn">Create Account</button>
                    <p class="login-stuff">Already know your <a class="login-label" onClick={() => {window.location.href="/"}}>login?</a> </p>
                </form>
            </div>
        </div>
    );
}

export default Register;