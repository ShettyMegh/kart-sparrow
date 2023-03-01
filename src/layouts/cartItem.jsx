import Quantity from "../components/quantity/quantity";
import Button from "../components/button/button";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../App";

const CartItem = ({ cartItem, cartInfo = { qunatity: 1 } }) => {
  const { cartData, setCartData } = useContext(productsContext);
  const [quant, setQuant] = useState(cartInfo.quantity);
  const handleRemove = () => {
    setCartData(cartData.filter((cart) => {
      return cart.id !== cartItem.id
    }))
  }

  useEffect(() => {
    const foundItem = cartData.find(cart => cart.id === cartItem.id)
    setQuant(foundItem.quantity)
  }, [])


  useEffect(() => {
    setCartData(() => {
      cartData.forEach((cart) => {
        if (cart.id === cartItem.id) {
          cart.quantity = quant;
        }
      })
      return [...cartData]
    })
  }, [quant])

  return (
    <>
      <div className="d-flex item-card justify-content-around align-items-center my-4">
        <Link to={`/products/${cartItem.id}`}>
          <div className="mx-5 item-card__img">
            <img src={cartItem.images[0]} alt={cartItem.title} />
          </div>
        </Link>

        <div className="item-card__details">
          <div className="d-flex justify-content-between align-items-center card__header">
            <h6 className="mr-4">{cartItem.title}</h6>
            <h6 className="price">${`${(cartItem.price * quant).toFixed(2)}`}</h6>
          </div>
          <p>{cartItem.description.slice(0, 100)}...</p>
          <div className="details__contorls d-flex align-items-center">
            <Quantity quant={quant} setQuant={setQuant} btnCss={{ backgroundColor: "black", borderColor: "black" }} />
            <Button classes="mx-4" onClick={handleRemove} css={{ fontSize: "12px", backgroundColor: "black", borderColor: "black" }} text="Remove" />
          </div>
        </div>
      </div>
    </>

  )
}

export default CartItem;