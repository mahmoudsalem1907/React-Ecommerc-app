import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import ReactDom from "react-dom/client";
import Product from "./component/Product";
import Cart from "./pages/Cart";
import { useState } from "react";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import AboutTeam from "./pages/AboutTeam";
import AboutCompany from "./pages/AboutCompany";
import MCard from "./component/Card";
import Menu from "./pages/Menu";
import CurrentItem from "./pages/CurrentItem";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // without deps []
  // implement after first render
  // implement after every render
  //
  // with empty deps []
  // implement after first render
  //
  // with  deps []
  // implement after first render
  // implement after every change in the array deps render
  //

  useEffect(() => {
    //  call backend
    setTimeout(() => {
      fetch("http://localhost:3000/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data));
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, 2000);
  }, []);
  const handlerReset = () => {
    //clone
    let newProducts = [...products];
    // update
    newProducts = newProducts.map((p) => {
      return { ...p, count: 0 };
    });
    // setState
    setProducts(newProducts);
  };

  const handlerIncrement = (item) => {
    //clone
    let newProducts = [...products];
    // update
    let index = newProducts.findIndex((newItem) => newItem.name === item.name);
    console.log(index);
    newProducts[index].count = newProducts[index].count + 1;
    // newProducts = newProducts.map((p) => {});
    //setState
    setProducts(newProducts);
  };

  const handlerDecrement = (item) => {
    //clone
    let newProducts = [...products];
    // update
    let index = newProducts.findIndex((newItem) => newItem.name === item.name);
    console.log(index);
    if (newProducts[index].count > 0) {
      newProducts[index].count = newProducts[index].count - 1;
    }
    // newProducts = newProducts.map((p) => {});
    //setState
    setProducts(newProducts);
  };

  const handlerDelete = (item) => {
    //clone
    let newProducts = [...products];
    //update
    newProducts = products.filter((o) => o.name !== item.name);
    //setState
    setProducts(newProducts);
  };
  const handlerAddToCart = (item) => {
    //clone
    let newProducts = [...products];
    // update
    let index = newProducts.findIndex((newItem) => newItem.name === item.name);
    console.log(index);
    newProducts[index].isEmpty = !newProducts[index].isEmpty;
    newProducts[index].count = 1;
    // newProducts = newProducts.map((p) => {});
    //setState
    setProducts(newProducts);
    // toast.info("Added Done");
  };
  const handleAddNewProduct = (product) => {
    const newProducts = [...products];
    newProducts.push(product);
    setProducts(newProducts);
    toast.info("Added Done");
  };
  const handleDeleteProduct = (product) => {
    let newProducts = [...products];
    newProducts = newProducts.filter((p) => p.id !== product.id);
    setProducts(newProducts);
    toast.error("Deleted Done");
  };
  const handleEditProduct = (product) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === product.id);
    newProducts[index] = product;
    setProducts(newProducts);
    toast.info("Edit Done");
  };
  return (
    <>
      <ToastContainer />
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="team" element={<AboutTeam />} />
              <Route path="company" element={<AboutCompany />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route
              path="admin"
              element={
                <Admin
                  products={products}
                  handleDeleteProduct={handleDeleteProduct}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <AddProduct
                  handleAddNewProduct={handleAddNewProduct}
                  categories={categories}
                  handleEditProduct={handleEditProduct}
                  products={products}
                />
              }
            />
            <Route
              path="/menu"
              element={
                <Menu
                  products={products}
                  handlerAddToCart={handlerAddToCart}
                  categories={categories}
                >
                  {/* <Route path="currentItem" element={<CurrentItem />} /> */}
                </Menu>
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  products={products.filter((p) => p.isEmpty)}
                  handlerDecrement={handlerDecrement}
                  handlerIncrement={handlerIncrement}
                  handlerDelete={handlerDelete}
                  handlerReset={handlerReset}
                />
              }
            />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/card" element={<MCard />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
