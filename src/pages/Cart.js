import React, { useState } from "react";
import ReactDOM from "react-dom";
import Product from "../component/Product";

const Cart = ({
  products,
  handlerDecrement,
  handlerIncrement,
  handlerDelete,
  handlerReset,
}) => {
  //state
  // const [products, setProducts] = useState([
  //   { name: "Milk", price: "50", count: 0 },
  //   { name: "Soda", price: "40", count: 0 },
  //   { name: "Cola", price: "30", count: 0 },
  // ]);
  //

  //   let res = <h1>Not Found</h1>;
  //   if (products.length) {
  //     res = products.map((p) => <Product item={p} key={p.name} />);
  //   }

  // handler

  //render
  return (
    <>
      {products.length === 0 && <h1>Cart is Empty</h1>}
      {products.length !== 0 && (
        <div className="d-flex justify-content-between mt-1">
          <h1>My Cart</h1>
          {products.length !== 0 && (
            <button
              onClick={() => handlerReset()}
              type="button"
              className="btn btn-warning ms-2"
            >
              Reset All
            </button>
          )}
        </div>
      )}
      {products.map((p) => (
        <Product
          item={p}
          key={p.name}
          handlerDecrement={handlerDecrement}
          handlerIncrement={handlerIncrement}
          handlerDelete={handlerDelete}
        />
      ))}
    </>
  );
};
export default Cart;
