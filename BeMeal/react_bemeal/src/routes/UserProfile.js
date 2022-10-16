import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar.js"
import { useHistory } from "react-router-dom";
import profilepic from "../blank-profile-picture-973460_640.png"

function UserProfile() {
    const history = useHistory(); 
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Navbar/>
            <img
                src={profilepic}
                style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    width: "25vmin", /* width of container */
                    height: "25vmin",
                    marginTop: "5vh"
                }}
            >
            </img>
            <h2>Name</h2>
            <h3>Real Name</h3>
        </div>
    );
}

export default UserProfile;