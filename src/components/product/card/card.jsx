import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./card.scss"
import Quantity from "../../quantity/quantity"
import Button from "../../button/button"
import { productsContext } from '../../../App';
import { useContext } from 'react';
import { handleAddCart } from '../../../actions/productCardActions';
import Rating from '../rating/rating';

const Card = ({ data }) => {
  const [quant, setQuant] = useState(1);
  const { setCartData } = useContext(productsContext);
  return (
    <div className="card">
      <Link to={`/products/${data.id}`} >
        <div className="card-img">
          <img className="card-img-top" src={data.images[0]} alt="Card cap" />
        </div>
      </Link>
      <div className="card-body">
        <Link to={`/products/${data.id}`} >
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description.slice(0, 80)}...</p>
        </Link>
        <div className="d-flex justify-content-between card-price">
          <p>{data.price}$</p>

          <Quantity quant={quant} setQuant={setQuant} />
        </div>

        <Rating rating={data.rating} />

        <div className="d-flex justify-content-between card-btn">
          <Button onClick={(e) => handleAddCart(e, data, quant, setCartData)} text="Add to cart" classes="btn-outline" css={{ borderRadius: "120px", padding: "15px 18px", fontSize: "14px" }} />

          <Link to={`/products/${data.id}`} >
            <Button text="Buy Now" css={{ borderRadius: "120px", padding: "15px 18px", fontSize: "14px" }} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Card);