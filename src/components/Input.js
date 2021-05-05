const Input = ({onInput, onEnterClick, value}) => {
    const handleClickEnter = (e) => {
        if (e.key === "Enter") {
            onEnterClick();
        }
    }

    return (
        <label className="input-wrap">
            Number of cards
            <input type="number" className="input" value={value} onInput={onInput} onKeyDown={handleClickEnter}/>
        </label>
    )
}

export default Input;
