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
                }}>
                    <label style={{
                        marginBottom: '2vh',
                    }}>
                        <text>Enter Username: </text>
                        <input type="text"/>
                    </label>
                    <label>
                        <text>Enter Password: </text>
                        <input type="text" />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Register;