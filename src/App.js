import React from "react";
import './index.css';
import CardsBoards from "./components/CardsBoard";
import CardsChange from "./components/CardsChange"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {number: 5};
    this.changeCards = this.changeCards.bind(this);
  }

  changeCards(numberOfCards) {
    this.setState({number: numberOfCards});
  }

  render() {
    return (
      <div className="container">
        <CardsChange changeCards={this.changeCards} />
        <CardsBoards n={this.state.number} />
      </div>
    );
  }
}

export default App;
