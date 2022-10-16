import foodpic from "../2-2-2-3foodgroups_fruits_detailfeature.jpg"
import './Post.css';
import Button from "./Button";
import { useState, useEffect } from 'react';

function Post() {
    return (
        <div class="post">
            <div class="img-post">
                <img
                    src={foodpic}
                    class="crop"
                >
                </img>
            </div>
            <div>
                <Button text="Abhorrrent"></Button>
                <Button text="Poor"></Button>
                <Button text="Mid"></Button>
                <Button text="Bussin"></Button>
                <Button text="Climaxed"></Button>
            </div>
        </div>
    );
}

export default Post;