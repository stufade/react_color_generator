import {useState} from "react";
import './index.css';
import Button from "./components/Button";
import Input from "./components/Input";
import CardsBoards from "./components/CardsBoard";

function App() {
  const [n, setn] = useState(5);
  const [colors, setcolors] = useState(createColors());
  const max = 3;

  function createColors() {
    let tempColors = [];
    for (let i = 0; i < n; i++) {
      tempColors.push(randomColor());
    }
    return tempColors;
  }

  function changeCards() {
    setcolors(createColors());
  }

  function onInput(e) {
    let value = e.target.value;
    if (value.length > max) {
      value = value.slice(1, 4);
      e.target.value = value;
    }
    setn(+value);
  }

  

  return (
    <div className="container">
      <Button onClick={() => changeCards()}/>
      <Input onInput={onInput} onEnterClick={changeCards}/>
      <CardsBoards colors={colors}/>
    </div>
  );
}

export default App;

function randomColor() {
  let c = '';

  while (c.length < 6) {
      c += (Math.random()).toString(16).substr(-6).substr(-1);
  }

  return '#' + c.toUpperCase();
}
