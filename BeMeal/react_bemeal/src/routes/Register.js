import React, {useEffect, useState} from "react";
import './Register.css';
import Navbar from "../components/Navbar.js"

function Register() {
    return (
        <div>
            <Navbar/>
            <div class='content'>
                <form onSubmit={(event) => {
                    //console.log(event.target.username.value)
                    //console.log(event.target.password.value)
                    const obj = {username: event.target.username.value, password: event.target.password.value}
                    fetch('http://localhost:8080/register', {
                        method: 'POST',
                        mode: 'cors',
                        body: JSON.stringify(obj)
                    })
                }}>
                    <h2 class="register-label">Register</h2>
                    <label>
                        <text>Enter Username: </text>
                        <input type="text" name="username"/>
                    </label>
                    <label>
                        <text>Enter Password: </text>
                        <input type="text" name="password"/>
                    </label>
                    <button>Create Account</button>
                    <a onClick={() => {window.location.href="/"}}>Already know your login?</a>
                </form>
            </div>
        </div>
    );
}

export default Register;