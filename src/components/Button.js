const Button = ({onClick}) => {
    return (
        <button className="btn" onClick={onClick}><img src="/img/refresh.png" alt="refresh-icon"/> Go!</button>
    )
}

export default Button;
