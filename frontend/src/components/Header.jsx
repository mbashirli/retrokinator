import {useState} from "react";
import logo from "../assets/logo.png"
import gramofon from "../assets/gran.png"
import bgVideo from "../assets/home-hero.mp4"


export default function Header() { 
    return (
    <>
    <video src={bgVideo} autoPlay playsInline loop muted className="header-video"></video>
            {/* <video className="header-video"  loop>
                <source type="video/mp4" src={bgVideo}/>
            </video> */}
            <header className="Header">
            
                <img src={logo} className="logo" alt="Retrokinator" />
                <h3>Retrokinator</h3>
            </header>
        </>
    );
}

