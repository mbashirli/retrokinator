
import musicPath from "../assets/sweet_dreams.mp3"

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div>
                    <audio controls className="nes-badge" width="100" height="100">
                    <source src={musicPath} type="audio/mpeg"/>
                        Your browser does not support the audio tag.
                    </audio>
                </div>
            </div>
        </>
    );
}