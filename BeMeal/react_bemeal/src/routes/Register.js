import React, {useEffect, useState} from "react";

function Register() {
    return (
        <div>
            <div>
                <h1>BeMeal</h1>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50vw',
                flexDirection: 'column'
            }}>
                <form>
                    <label>Enter your username:
                        <input type="text" />
                    </label>
                    <label>Enter your password:
                        <input type="text" />
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Register;