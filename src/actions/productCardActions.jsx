export const handleAddCart = (e, data, quant, setCartData) => {

  e.target.innerText = "Added";
  e.target.disabled = true;
  let localCart = [];
  if (localStorage.getItem("products") !== null) {
    localCart = JSON.parse(localStorage.getItem("products"))
  }
  let itemFound = false;
  localCart.forEach((item) => {
    if (item.id === data.id) {
      itemFound = true;
      item.quantity = item.quantity + quant;
    }
  })
  if (!itemFound) {
    localCart.push({ id: data.id, quantity: quant })
  }
  localStorage.setItem("products", JSON.stringify(localCart))
  setCartData(() => localCart);
  setTimeout(() => {
    e.target.innerText = "Add to cart";
    e.target.disabled = false;
  }, 1000)

}

export const fetchCartData = () => {

}