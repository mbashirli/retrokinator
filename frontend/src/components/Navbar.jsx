import gran from "../assets/gran.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="left">
                <div className="gran">
                    <img src={gran}/>
                </div>
            </div>
            <div className="right"></div>
        </div>
    );
}