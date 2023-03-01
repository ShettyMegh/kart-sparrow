import ProductList from "../../layouts/productList/productList";
import Filter from "../../components/filter/filter";
import './products.scss'
import { productsContext } from "../../App";
import { useContext } from "react";

const Products = () => {
  const { filterData } = useContext(productsContext)
  return (
    <>
      <div className="d-flex products">
        <div className="products__left">
          <Filter />
        </div>
        <div className="products__right">
          <h1 className="text-center" style={{ marginTop: "30px" }}>Products</h1>
          {filterData && <ProductList lassName="products__right" />}
        </div>
      </div>
    </>
  );
};

export default Products;
