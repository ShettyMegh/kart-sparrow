import "./card.scss"
import Quantity from "../../quantity/quantity"
import Button from "../../button/button"

const Card = (productData) => {
  const data = {
    id: 1, title: " Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category: "men's clothing", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", rating: { rate: 3.9, count: 120 }
  }


  return (
    <div className="card" style={{ width: "calc(33.33% - 32px )" }}>
      <div className="card-img">
        <img className="card-img-top" src={data.image} alt="Card cap" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description.slice(0, 80)}...</p>
        <div className="d-flex justify-content-between card-price">
          <p>{data.price}$</p>
          <Quantity />
        </div>

        <div className="card-rating d-flex">
          <i class="fa-sharp fa-solid fa-star"> </i>
          <p>
            {data.rating.rate}/5.0
            <span>({data.rating.count} customers reviewed)</span>
          </p>
        </div>
        <div className="d-flex justify-content-between card-btn">
          <a href="">
            <Button text="Add to cart" classes="btn-outline" css={{ borderRadius: "120px", padding: "15px 18px", fontSize: "14px" }} />
          </a>
          <a href="">
            <Button text="Buy Now" css={{ borderRadius: "120px", padding: "15px 18px", fontSize: "14px" }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card;