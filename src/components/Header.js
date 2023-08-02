import React from "react";
import './Header.css';

export default function Header() {
    return(
        <div className="header">
            <img src="./images/logo.png"  className="logo" alt="logo"/>
           <h2 className="title">Meme Generator</h2>
           <h2 className="projectName">React Practice</h2>
        </div>
    )
}