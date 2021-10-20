import React from "react";

export default function Cart (props) {
  // const { cartItems, onAdd, onRemove } = props;
  return (
    <div>
      <div className="box product-box">
        <h4>Your Cart</h4>
        {/* <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className='col-2'>{item.name}</div>
            <div className='col-2'>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </div>
            <div className='col-2 text-right'>
                {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

// export default Cart;
