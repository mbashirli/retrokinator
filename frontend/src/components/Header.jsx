import {useState} from "react";
import logo from "../assets/logo.png"
import gramofon from "../assets/gran.png"
import bgVideo from "../assets/home-hero.webm"

export default function Header() { 
    return (
        <>
            <video src={bgVideo}></video>
            <header className="Header">
                <img src={logo} className="logo" alt="Retrokinator" />
                <h3>Retrokinator</h3>
            </header>
        </>
    );
}

