import React, {useEffect, useState} from "react";
import './Login.css';
import Navbar from "../components/Navbar"
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Login() {
    const history = useHistory(); 
    return (
        <div>
            <Navbar/>
            <div class = 'content' style={{
                height: '70vh'
            }}>
                <h2 class = 'content' style={{
                    marginBottom: '5vh',
                }}>Login</h2>
                <form onSubmit={(event) => {
                    //console.log(event.target.username.value)
                    //console.log(event.target.password.value)
                    axios.post('/auth', {
                        username: event.target.username.value,
                        password: event.target.password.value
                    })
                    .then(function (response) {
                        if (response == "Authenticated!") {
                            let path = `/home`; 
                            history.push(path);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }}>
                    <label style={{
                        marginBottom: '2vh',
                    }}>
                        <text>Enter Username: </text>
                        <input type="text" name="username"/>
                    </label>
                    <label>
                        <text>Enter Password: </text>
                        <input type="text" name="password"/>
                    </label>
                    <button class = "content" style={{
                        marginTop: '2vh'
                    }}>Login</button>
                    <a onClick={() => {window.location.href="/register"}}>Don't have an account?</a>
                </form>
            </div>
        </div>
    );
}

export default Login;