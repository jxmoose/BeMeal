import './Button.css';
import React, { useState } from "react";

function Button({text}) {
    const [style, setStyle] = useState("btnInactive");
  
    const handleClick = (event) => {
        if(style === "btnInactive") {
            setStyle("btnActive");
        } else {
            setStyle("btnInactive");
        }
    };
    return (
        <button class={style} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button;