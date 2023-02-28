import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { productsContext } from "../App";
import { useLocation } from "react-router-dom";
import Quantity from "../components/quantity/quantity";
import Button from "../components/button/button";
import Rating from "../components/product/rating/rating";
import Response from "../components/response/response";
import { handleAddCart } from "../actions/productCardActions";
import { useNavigate } from "react-router-dom";
import './product.scss'


const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [quant, setQuant] = useState(1)
  const { setCartData } = useContext(productsContext)
  const location = useLocation().pathname;
  const fetchSingleData = () => {
    axios
      .get(`http://localhost:3232${location}`)
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        navigate('/product-not-found')
      });
  };

  useEffect(() => {
    fetchSingleData()
  }, [location])
  if (isLoading) {
    return (
      <>
        <Response loading={true} gif="https://s9.gifyu.com/images/editor-1.2s-47px.gif" />
      </>
    )
  }

  return (
    <>
      <div className="container my-5 product__container">
        <div className="d-flex align-items-center">
          <div className="left mx-5">
            <img src={product.images[0]} alt="" width="350px" />
          </div>
          <div className="right">
            <h2 className="right__title">{product.title}</h2>
            <p className="right__desc">{product.description}</p>
            <Rating rating={product.rating} classes="d-inline-flex" />

            <hr />
            <div className="d-flex justify-content-between price-quant-card align-items-center">
              <h3 className="right__price">${product.price}</h3>
              <Quantity quant={quant} setQuant={setQuant} />
            </div>
            <hr />

            <div className="d-flex justify-content-between right__btns">
              <Button text="Buy Now" css={{ padding: "0.8rem 2.8rem", borderRadius: "50px" }} />
              <Button onClick={(e) => { handleAddCart(e, product, quant, setCartData) }} text="Add to Cart" classes="btn-outline" css={{ padding: "0.8rem 2rem", borderRadius: "50px" }} />
            </div>
            <div className="right__info">
              <div className="info-1">
                <h6><i className="fa-solid fa-truck"></i> Free Delivery</h6>
                <p><u>Enter your Postal code for Delivery Availability</u></p>
              </div>
              <hr />
              <div className="info-2">
                <h6><i className="fa-solid fa-file-invoice"></i> Return Delivery</h6>
                <p>Free 30days Delivery Returns. <u>Details</u></p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )

}

export default Product;