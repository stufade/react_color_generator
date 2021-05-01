import Input from "./Input";
import Button from "./Button";
import {useState} from "react";

function CardsChange({changeCards}) {
    function onInput(e) {
        let value = e.target.value;
        if (value.length > 3) {
          value = value.slice(1, 4);
          e.target.value = value;
        }
        setNumber(+value);
    }

    function onClick() {
        changeCards(number);
    }

    const [number, setNumber] = useState(5);

    return (
        <>
            <Button onClick={onClick}/>
            <Input onInput={onInput} onEnterClick={onClick}/>
        </>
    )

}

export default CardsChange
