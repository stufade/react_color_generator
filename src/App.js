import {useState} from "react";
import './index.css';
import CardsBoards from "./components/CardsBoard";
import CardsChange from "./components/CardsChange"

function App() {
  const [colors, setcolors] = useState(createColors(5));

  function createColors(n) {
    let tempColors = [];
    for (let i = 0; i < n; i++) {
      tempColors.push(randomColor());
    }
    return tempColors;
  }

  function changeCards(numberOfCards) {
    setcolors(createColors(numberOfCards));
  }
  
  return (
    <div className="container">
      <CardsChange changeCards={changeCards}/>
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
