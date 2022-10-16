import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar"
import { useHistory } from "react-router-dom";
import profilepic from "../blank-profile-picture-973460_640.png"

function UserProfile() {
    const history = useHistory(); 
    return (
        <div style={{alignItems: 'center'}}>
            <Navbar/>
            <img
                src={profilepic}
                style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    width: "20vmin", /* width of container */
                    height: "20vmin",
                    alignSelf: "center"
                }}
            >
            </img>
        </div>
    );
}

export default UserProfile;