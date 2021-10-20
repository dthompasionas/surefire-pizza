import React, {useState} from "react";
import Menu from "./Menu";
// import Product from "./Product";
import Cart from "./Cart";
import data from "../../../data";

function MenuPage() {
  const { products } = data;
//   const onAdd = (products) => {
//     const exist = cartItems.find((x) => x.id === products.id);
//     if (exist) {
//       setCartItems(
//         cartItems.map((x) =>
//           x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...products, qty: 1 }]);
//     }
//   };

  return (
    <div>
      <Menu products={products} />
      <div className="col-sm-12 col-md-8">
        <Cart/>
      </div>
    </div>
  );
};

export default MenuPage;
