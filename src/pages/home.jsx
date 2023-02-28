import ProductList from "../layouts/productList";
import Carousel from "../layouts/carousel";

const Home = () => {
  return (
    <>
      <Carousel />
      <h3 style={{ textAlign: "center", marginTop: "50px" }}>Shop Today!</h3>
      <div className="container">
        <ProductList/>
      </div>
    </>

  )
}

export default Home;