import React, {useEffect, useState} from "react";
import Post from "../components/Post";

function Home() {
    return (
        <div>
            <div>
                <h1>BeMeal</h1>
            </div>
            <Post></Post>
        </div>
    );
}

export default Home;