import CartItem from "../layouts/cartItem";
import Button from "../components/button/button";
import Response from "../components/response/response";
import { useEffect, useState } from "react";
import './cart.scss';
import { useContext } from "react";
import { productsContext } from "../App"

const Cart = () => {

  const { cartData, setCartData, productsData } = useContext(productsContext)
  const [cartItems, setCartItems] = useState([])
  const [totals, setTotals] = useState({ "subTotal": [], "shipping": 50, "tax": 12 });

  //get cart data from product data using localstorage
  const getCartData = (cartData, productsData) => {
    const cartItems = [];
    cartData.forEach((cartItem, idx) => {
      cartItems.push(productsData.find((product) => product.id === cartItem.id))
    })
    return cartItems;
  }


  const getSubTotal = () => {
    let subTotal = [];
    cartData.forEach((product, idx) => {
      let foundProduct = cartItems.find((cartItem) => cartItem.id === product.id)
      if (foundProduct) {
        subTotal[idx] = (foundProduct.price * cartData[idx].quantity)
      }
    })
    return subTotal;
  }

  const sumSubTotal = (subTotal) => {
    let sum = 0;
    console.log(subTotal)
    subTotal.forEach((t) => sum += t);
    console.log(sum)
    return sum;
  }

  useEffect(() => {
    setCartItems(getCartData(cartData, productsData));
    setTotals(prevVal => {
      return { ...prevVal, "subTotal": getSubTotal() }
    });
  }, [cartData])

  if (cartItems.length > 0) {
    return (
      <div className="carts container py-5">
        <h2 className="text-center">My Cart</h2>

        <div className="d-flex cart__container">
          <div className="container__left">
            <h4 className="py-2">Bag</h4>

            {cartItems.map((product) => {
              return (
                <CartItem key={product.id} cartItem={product} cartInfo={cartData.find((cart) => cart.id === product.id)} setCartData={setCartData} />
              )
            })}
          </div>
          <div className="container__right">
            <div className="right__fixed">
              <h4>Summary</h4>
              <div className="d-flex justify-content-between amount">
                <p>Subtotal</p>
                <p>${sumSubTotal(totals.subTotal).toFixed(2)}</p>
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
                <p>${`${(totals.shipping + sumSubTotal(totals.subTotal) + totals.tax).toFixed(2)}`}</p>
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