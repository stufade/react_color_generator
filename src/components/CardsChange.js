import Input from "./Input";
import Button from "./Button";
import {useState} from "react";

function CardsChange({onClick}) {
    function onInput(e) {
        let value = e.target.value;
        if (value.length > 3) {
          value = value.slice(1, 4);
          e.target.value = value;
        }
        setNumber(+value);
    }

    function onClickHandler() {
        onClick(number);
    }

    const [number, setNumber] = useState(5);

    return (
        <>
            <Button onClick={onClickHandler}/>
            <Input onInput={onInput} onEnterClick={onClickHandler} value={number} />
        </>
    )

}

export default CardsChange
