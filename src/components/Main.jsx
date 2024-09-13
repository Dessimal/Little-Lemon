import { meals } from "../constants";
import Card from "./Card";
import Button from "./Button";

const Main = () => {
  return (
    <section className="features-section">
      <div className="section-container">
        <div className="features-section-heading">
          <h3>This Week&apos;s Specials</h3>
          <Button>Online Menu</Button>
        </div>
        <div className="card-wrapper-container">
          {meals.map((meal) => (
            <Card
              className="card"
              key={meal.id}
              picture={meal.picture}
              title={meal.title}
              text={meal.text}
              price={meal.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
