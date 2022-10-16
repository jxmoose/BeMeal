import React, {useEffect, useState} from "react";
import './Register.css';

function Register() {
    return (
        <div>
            <div>
                <h1>BeMeal</h1>
            </div>
            <div class = 'content'>
                <h2 style={{
                    marginBottom: '5vh',
                }}>Register</h2>
                <form style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }} onSubmit={(event) => {
                    //console.log(event.target.username.value)
                    //console.log(event.target.password.value)
                    const obj = {username: event.target.username.value, password: event.target.password.value}
                    fetch('http://localhost:8080/register', {
                        method: 'POST',
                        mode: 'cors',
                        body: JSON.stringify(obj)
                    })
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
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Register;