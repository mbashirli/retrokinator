import musicPath from "../assets/sweet_dreams.mp3"
export default function Navbar() {
    return (
        <>
        <div className="navbar">
<audio controls className="nes-badge">
  <source src={musicPath} type="audio/mpeg"/>
  Your browser does not support the audio tag.
        </audio>
        
        </div>
        </>
    );
}