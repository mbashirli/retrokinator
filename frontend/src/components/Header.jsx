import {useState} from "react";
import logo from "../assets/logo.png"
import gramofon from "../assets/gran.png"
export default function Header() { 
    return (
        <>
            <header className="Header">
                <nav>
                    <img src={logo} className="logo" alt="" />
                </nav>
                <button className="nes-btn is-success">Play</button>
                <div className="nes-container with-title">
                    <h3 className="title">Radios</h3>
                    <div className="radios">
                        <label>
                            <input type="radio" className="nes-radio" />
                            <span>Yes</span>
                        </label>
                        <label>
                            <input type="radio" className="nes-radio" />
                            <span>No</span>
                        </label>
                    </div>
                    <div className="radios" >
                        <label>
                            <input type="radio" className="nes-radio" />
                            <span>Yes</span>
                        </label>
                        <label>
                            <input type="radio" className="nes-radio" />
                            <span>No</span>
                        </label>
                    </div>
                </div>
                <div className="nes-container is-dark with-title" id="transparent">
                    <h3 className="title">Recipe list</h3>
                    <div className="lists"> 
                        <ul className="nes-list is-circle">
                            <li>Lamb</li>
                            <li>Rice</li>
                            <li>Tahini</li>
                            <li>Hummus</li>
                            <li>Potatoes</li>
                        </ul>
                    </div>
                </div>
                {/* <progress className="nes-progress is-success" value="50" max="100"></progress> */}
            </header>
        </>
    );
}

