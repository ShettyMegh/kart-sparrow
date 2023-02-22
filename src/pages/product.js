import ProductList from "../layouts/productList";
import Search from "../components/search/search";
const Product = () => {
  return (
    <>
      <h1>Products</h1>
      <Search />
      <ProductList />
    </>
  );
};

export default Product;
