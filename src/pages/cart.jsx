import CartItem from "../layouts/cartItem";
import Button from "../components/button/button";
import Response from "../components/response/response";
import { useEffect, useState } from "react";
import './cart.scss';
import { useContext } from "react";
import { productsContext } from "../App"

const Cart = () => {

  const { cartData, setCartData } = useContext(productsContext)
  const [totals, setTotals] = useState({ "subTotal": 0, "shipping": 50, "tax": 12 });
  useEffect(() => {
    setTotals((prevData) => {
      let subTotal = 0;
      cartData.forEach((cart) => {
        subTotal += cart.totalPrice;
      })
      return { ...prevData, subTotal: subTotal }
    })

  }, [cartData])

  if (cartData.length > 0) {
    return (
      <div className="carts container py-5">
        <h2 className="text-center">My Cart</h2>

        <div className="d-flex cart__container">
          <div className="container__left">
            <h4 className="py-2">Bag</h4>

            {cartData.map((cartItem) => {
              return (
                <CartItem key={cartItem.id} cartItem={cartItem} setCartData={setCartData} />
              )
            })}



          </div>
          <div className="container__right">
            <div className="right__fixed">
              <h4>Summary</h4>
              <div className="d-flex justify-content-between amount">
                <p>Subtotal</p>
                <p>${totals.subTotal.toFixed(2)}</p>
              </div>
              <div className="d-flex justify-content-between amount">
                <p>Estimated Shipping & Handling</p>
                <p>${totals.shipping}</p>
              </div>
              <div className="d-flex justify-content-between amount">
                <p>Estimated Tax</p>
                <p>${totals.tax}</p>
              </div>
              <div className="d-flex justify-content-between amount-total">
                <p>Total</p>
                <p>${`${(totals.shipping + totals.subTotal + totals.tax).toFixed(2)}`}</p>
              </div>
              <Button text="Checkout" classes="my-3" height="62px" width="100%" css={{ borderRadius: "20px", fontSize: "16px" }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <Response />
    </>
  )

}

export default Cart;