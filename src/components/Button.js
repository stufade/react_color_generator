import refresh from "../img/refresh.png";

const Button = ({onClick}) => {
    return (
        <button className="btn" onClick={onClick}><img src={refresh} alt="refresh-icon"/> Go!</button>
    )
}

export default Button;
