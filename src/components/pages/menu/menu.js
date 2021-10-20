import React from "react";
import Product from "./Product";
import "./menu.css";

// import Cart from "./Cart";
// import data from "../../../data";
// import nymenu from "../../../assets/ny-menu.png";
// import chicago from "../../../assets/chicago.png";
// import sausage from "../../../assets/sausage.png";
// import garlic from "../../../assets/garlic-bread.png";
// import spaghetti from "../../../assets/spaghetti-menu.png";
// import nachos from "../../../assets/nachos-menu.png";

export default function Menu (props) {
  const {products, onAdd } = props ;

  return (
    <section className="features-boxed">
      <div className="container product">
        <div className="intro">
          <h2>Menu</h2>
        </div>

        <div className="row justify-content-center features">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}

          {/* <Product 
            id='1'
            productItems={productItems}
            onAdd={onAdd}
            
          />
          <Product 
            id='2'
            productItems={productItems}
            onAdd={onAdd}
           
          />
          <Product 
            id='3'
            productItems={productItems}
            onAdd={onAdd}
            
          />
          <Product 
            id='4'
            productItems={productItems}
            onAdd={onAdd}
           
          />
          <Product 
            id='5'
            productItems={productItems}
            onAdd={onAdd}
           
          />
          <Product
            id='6'
            productItems={productItems}
            onAdd={onAdd}
           
          /> */}
        </div>

        {/* <div className="col-sm-12 col-md-8">
          <Cart onAdd={onAdd} cartItems={cartItems} />
        </div> */}
      </div>
    </section>
  );
};

// export default Menu;
