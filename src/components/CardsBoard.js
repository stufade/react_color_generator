import Card from "./Card";

const CardsBoard = ({n}) => {

    let colors = createColors(n);

    return (
        <div className="flex">
            {colors.map((color, index) => 
                <Card color={color} key={index}/>
            )}
        </div>  
    )
}

export default CardsBoard;

function createColors(n) {
    let tempColors = [];
    for (let i = 0; i < n; i++) {
      tempColors.push(randomColor());
    }
    return tempColors;
  }

function randomColor() {
    let c = '';
  
    while (c.length < 6) {
        c += (Math.random()).toString(16).substr(-6).substr(-1);
    }
  
    return '#' + c.toUpperCase();
  }