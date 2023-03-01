import ProductList from "../../layouts/productList/productList";
import Carousel from "../../components/carousel/carousel";

const Home = () => {
  return (
    <>
      <Carousel />
      <h3 style={{ textAlign: "center", marginTop: "50px" }}>Shop Today!</h3>
      <div className="container">
        <ProductList />
      </div>
    </>

  )
}

export default Home;