import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import axios from "axios";

import "./App.scss";
import Header from "./layouts/header/header";
import Home from "./pages/home/home";
import AddProduct from "./pages/addProduct/addProduct";
import Products from "./pages/products/products";
import Product from "./pages/singleProduct/product";
import Footer from "./layouts/footer/footer";
import Cart from "./pages/cart/cart";
import NotFoundError from "./pages/notFoundError/notFoundError";
import Response from "./components/response/response";
export const productsContext = createContext();

function App() {
  const [productsData, setProductsData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const location = useLocation();
  const [cartData,setCartData] = useState(localStorage.getItem('products')!==null? JSON.parse(localStorage.getItem("products")) : []);
  const [respMes,setRespMes] = useState({
    mess:"",
    color:""
  });

  useEffect(()=>{
    localStorage.setItem("products",JSON.stringify(cartData));
  },[cartData])


  useEffect(() => {
    setFilterData(productsData)
  }, [productsData]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    location.pathname==='/' && fetchData();
  }, [location]);


  const fetchData = (searchKey="",url="") => {
    axios
      .get((searchKey==="")?`${process.env.REACT_APP_BASEURL}/products?_sort=id`:`${process.env.REACT_APP_BASEURL}/products?title_like=${searchKey}`)
      .then((data) => {
        setRespMes("Loading Please Wait")
        setProductsData(data.data);
        setIsLoadingProducts(false)
        setRespMes({
          mess:"Loading, Please Wait",
          color:"text-success"
        })
      })
      .catch((error) => {
        setRespMes({
          mess:"Server is down, please try again later",
          color:"text-danger"
        })
        console.log(error);
      })
  };

  return (
    <div className="App">
      <productsContext.Provider value={{productsData,setProductsData,isLoadingProducts,fetchData,cartData,setCartData, filterData, setFilterData}}>
      <Header />
      <main>
        {filterData ? <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route
              path="/products"
              element={<Products />}
            ></Route>
            <Route
              path="/products/:id"
              element={<Product />}
            ></Route>
            <Route path="addproduct" element={<AddProduct />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="*" element={<NotFoundError />}></Route>
          </Route>
        </Routes> : <Response textClass={respMes.color} message={respMes.mess} noImage={true}/>}
      </main>
      </productsContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
