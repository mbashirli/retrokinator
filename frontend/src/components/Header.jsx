import {useState} from "react";
import logo from "../assets/logo.png"
import gramofon from "../assets/gran.png";
import PlayScreen from "./PlayScreen"
import Header_intro from "./Header_intro";

export default function Header() {
    const [flag, setFlag] = useState(false); 
    return (
        <>
            <header className="Header">
                {!flag ? <nav><img src={logo} className="logo" alt="" /></nav> : ""}
                {!flag ? <button className="nes-btn is-success" onClick={() => setFlag(!flag)}>Play</button> : ""}
                { !flag ? <Header_intro/> : "" }
                { flag ? <PlayScreen/> : "" }
            </header>
        </>
    );
}

