import React, { useState } from "react";
function Product(props) {
  const { name, price, count } = props.item;
  return (
    <div className="p-2 m-2 row d-flex justify-content-around">
      <span className="me-2 col-2">{name}</span>
      <span className="me-2 col-2">{price}</span>
      <button
        onClick={() => {
          props.handlerDecrement(props.item);
        }}
        type="button"
        className=" me-2 col-1 btn btn-dark"
      >
        -
      </button>
      <span className="col-2 d-flex justify-content-center">{count}</span>
      <button
        onClick={() => props.handlerIncrement(props.item)}
        type="button"
        className=" ms-2 col-1 btn btn-dark"
      >
        +
      </button>
      <button
        onClick={() => props.handlerDelete(props.item)}
        type="button"
        className=" ms-2 col-1 btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
}

export default Product;

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// let count = 0;
// function Product() {
//   const productName = "Meet";
//   //   const productNumber = 0;

//   const ChangeClassesStyle = () => {
//     let classStyle = " ms-2 badge bg-primary";
//     if (productNumber == 0) {
//       classStyle = " ms-2 badge bg-danger";
//     }
//     return classStyle;
//   };
//   let [productNumber, setProductNumber] = useState(count);

//   return (
//     <div className="p-2 m-2">
//       <button
//         type="button"
//         className=" me-2 btn btn-dark"
//         onClick={() => {
//           if (productNumber > 0) {
//             setProductNumber((count -= 1));
//           }
//         }}
//       >
//         -
//       </button>
//       <span>{productName}</span>
//       <span className={ChangeClassesStyle()}>{productNumber}</span>
//       <button
//         type="button"
//         className=" ms-2 btn btn-dark"
//         onClick={() => {
//           setProductNumber((count += 1));
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// }

// export default Product;

//////////////////////////////////////-----------------------------

// import React, { useState } from "react";
// // import ReactDOM from "react-dom";
// let counter = 0;
// function Product(props) {
//   //   const productName = "Meet";
//   //   const productNumber = 0;

// //state
//   let [product, setProduct] = useState({
//     name: props.item.name,
//     price: props.item.price,
//     count: props.item.count,
//   });

//   // handler
//   const ChangeClassesStyle = () => {
//     let classStyle = " ms-2 badge bg-primary";
//     if (product.count == 0) {
//       classStyle = " ms-2 badge bg-danger";
//     }
//     return classStyle;
//   };
//   //render
//   return (
//     <div className="p-2 m-2">
//       <span className="me-2">{product.name}</span>
//       <span className="me-2">{product.price}</span>
//       <button
//         type="button"
//         className=" me-2 btn btn-dark"
//         onClick={() => {
//           if (product.count > 0) {
//             setProduct({ ...product, count: (product.count -= 1) });
//           }
//         }}
//       >
//         -
//       </button>
//       <span className={ChangeClassesStyle()}>{product.count}</span>
//       <button
//         type="button"
//         className=" ms-2 btn btn-dark"
//         onClick={() => {
//           setProduct({ ...product, count: (product.count += 1) });
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// }

// export default Product;
