import React, {useEffect, useState} from "react";
import Post from "../components/Post.js";
import Navbar from "../components/Navbar.js"
import "./Home.css"

function Home() {
    return (
        <div>
            <Navbar/>
            <div style={{ overflow: "scroll" }}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default Home;