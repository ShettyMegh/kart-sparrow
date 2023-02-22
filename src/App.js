import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./layouts/header";
import Home from "./pages/home";
import AddProduct from "./pages/addProduct";
import Product from "./pages/product";
import { createContext } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
