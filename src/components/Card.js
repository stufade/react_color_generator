import {useState} from "react";
import Notification from "./Notification";
import {ntc} from "../ntc";
import copy from "../img/copy.png"

function Card({color}) {
    const [show, setshow] = useState(false);

    const handleClick = () => {
        setshow(true);
        setTimeout(() => setshow(false), 2500);
    }

    return (
        <div className="card" style={{backgroundColor: color, boxShadow: `0px 10px 25px ${color}`}}>
            <button className="card-btn" onClick = {() => navigator.clipboard.writeText(color)}>
                <img src={copy} alt="Copy" onClick={() => handleClick()}/>
            </button>
            <div className="text">{color}</div>
            <div className="text text-color">{ntc.name(color)[1]}</div>
            {show ? <Notification /> : ""}
        </div>
    )
}

export default Card;