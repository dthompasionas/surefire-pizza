import React from "react";
import Item from "./Item";
import "./menu.css";
import nymenu from '../../../assets/ny-menu.png';
import chicago from '../../../assets/chicago.png';
import sausage from '../../../assets/sausage.png';
import garlic from '../../../assets/garlic-bread.png';
import spaghetti from '../../../assets/spaghetti-menu.png';
import nachos from '../../../assets/nachos-menu.png';

const menu = () => {
  return (
    <section className='features-boxed'>
      <div className="container product">
        <div className="intro">
            <h2>Menu</h2>
        </div>
          
        

        <div className="row justify-content-center features">
          <Item
            name="New York Style Pie"
            desc="Tasty New York style pizza with your choice of topping."
            price={12.50}
            img={nymenu}
          />
          <Item
            name="Chicago Style"
            desc="Tasty Chicago style pizza with your choice of topping."
            price={13.75}
            img={chicago}
          />
          <Item
            name="Pepperoni Sausage"
            desc="Pepperoni and sausage. what else is there to say?!"
            price={13.50}
            img={sausage}
          />
          <Item
            name="Garlic Bread pepperoni"
            desc="Try our new garlic bread dough with pepperoni and banana peppers"
            price={14.50}
            img={garlic}
          />
          <Item
            name="Spaghetti"
            desc="Tasty spaghetti noodles with homemade meat sauce."
            price={10.99}
            img={spaghetti}
          />
          <Item
            name="Zesty Nachos"
            desc="Tortilla chips with the works. Don't worry there's enough to share."
            price={12.50}
            img={nachos}
          />
          
        </div>
      </div>
    </section>
  );
};

export default menu;
