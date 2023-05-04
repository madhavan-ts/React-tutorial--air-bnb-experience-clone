import Card from "./Card";
import "./styles/Card.css";
import Carddata from "./carddata.js";

function CardSec() {
  const elements = Carddata.map((items) => (
    <Card
      {...items}
    />
  ));

  return (
    <>
      <div className="card-section">
        {elements}
        {/* <Card
          image="image 12.png"
          rating={5.0}
          count={4}
          title="Life Lessons with Kate Zaferes"
          rate={136}
          country="USA"
        />

        <Card
          image="wedding-photography 1.png"
          rating={4.8}
          count={8}
          title="Learn Wedding Photograpty"
          rate={96}
          country="France"
        />

        <Card
          image="mountain-bike 1 (1).png"
          rating={3.6}
          count={2}
          title="Experience Dirt Biking in Mountains"
          rate={300}
          country="Tibet"
        /> */}
      </div>
    </>
  );
}

export default CardSec;
