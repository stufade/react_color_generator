const Input = ({onInput, onEnterClick}) => {
    const handleClickEnter = (e) => {
        if (e.key === "Enter") {
            onEnterClick();
        }
    }

    return (
        <label className="input-wrap">
            Number of cards
            <input type="number" className="input" defaultValue={5} onInput={onInput} onKeyDown={handleClickEnter}/>
        </label>
    )
}

export default Input;
