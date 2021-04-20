import Card from "./Card";

const CardsBoard = ({colors}) => {
    let number = colors.length;

    function renderCard(key) {
        let clr = colors[key];
        return <Card key={key} color={clr}/>
    }

    let cards = [];

    for (let i = 0; i < number; i++) {
        cards.push(renderCard(i));
    }

    return (
        <div className="flex">
            {cards}
        </div>  
    )
}

export default CardsBoard;
