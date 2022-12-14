import { useState } from "react";
import logo from "../assets/logo.png";
import gramofon from "../assets/gran.png";
import PlayScreen from "./PlayScreen";
import Header_intro from "./Header_intro";
import bgVideo from "../assets/home-hero.mp4";

export default function Header() {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <video
        src={bgVideo}
        autoPlay
        playsInline
        loop
        muted
        className="header-video"
      ></video>
      <header className="Header">
        <div className="title-button">
          {!flag ? <Header_intro /> : ""}
          {!flag ? (
            <button
              id="play-btn"
              className="nes-btn is-success"
              onClick={() => {
                setFlag(!flag);
                callAPI();
              }}
            >
              Play
            </button>
          ) : (
            ""
          )}
        </div>
        {flag ? <PlayScreen /> : ""}
      </header>
    </>
  );
}
