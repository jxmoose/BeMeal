import React, {useEffect, useState} from "react";
import Post from "../components/Post";
import Navbar from "../components/Navbar"
import "./Home.css"

function Home() {
    return (
        <div>
            <Navbar/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default Home;