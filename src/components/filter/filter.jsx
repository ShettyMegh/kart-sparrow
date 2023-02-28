import "./filter.scss"
import { useState, useEffect, useContext } from "react";
import { fetchCats } from "../../actions/commonActions";
import { productsContext } from "../../App";
import Button from "../button/button";
const Filter = () => {
  const { setFilterData, productsData } = useContext(productsContext)
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(20)
  const [filters, setFilters] = useState({
    category: "false",
    ratings: "false",
    price: "false",
    sort: "false"
  })
  const filterProducts = () => {
    let filterdProductsData = productsData;
    let sortedProducts = [...filterdProductsData];
    Object.keys(filters).forEach(filterKey => {
      if (filters[filterKey] !== 'false') {
        if (filterKey === 'category') {
          filterdProductsData = filterdProductsData.filter(product => product.category === filters[filterKey])
        }

        if (filterKey === 'price') {
          filterdProductsData = filterdProductsData.filter(product => product.price > filters[filterKey])
        }
        if (filterKey === 'ratings') {
          filterdProductsData = filterdProductsData.filter(product => product.rating.rate <= filters[filterKey])
        }

        if (filterKey === 'sort') {
          if (filters["sort"] === 'low') {
            sortedProducts = filterdProductsData.sort(
              (p1, p2) => (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0);
          }

          if (filters["sort"] === 'high') {
            sortedProducts = filterdProductsData.sort(
              (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
          }

          filterdProductsData = [...sortedProducts]
        }
      }
    })
    setFilterData(filterdProductsData);
  }

  const clearFilters = (e) => {
    setPriceRange(20);
    setFilterData(productsData);
  }


  useEffect(() => {
    filterProducts();
  }, [filters])

  const handleInputChange = (e, key) => {
    if (key === "price") setPriceRange(() => e.target.value);
    setFilters((prevFilters) => {
      prevFilters[key] = e.target.value;
      return { ...prevFilters };
    })
  }


  useEffect(() => {
    fetchCats(productsData, setCategories)
  }, [])
  return (
    <div className="filter__container">
      <h6>Filters</h6>
      <form onReset={clearFilters}>
        <div className="form-group">
          <label htmlFor="formControlRange">Categories</label>
          <select className="form-control" onChange={(e) => handleInputChange(e, "category")}>
            <option key="catAll" value="false" >All</option>
            {
              categories.map((cat) => {
                return (
                  <option key={cat} value={cat} >{cat}</option>
                )
              })
            }
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="formControlRange">Ratings</label>
          <select className="form-control" onChange={(e) => handleInputChange(e, "ratings")}>
            <option value={false}>Select</option>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </div>


        <div className="form-group">
          <label htmlFor="formControlRange">Price</label>
          <input type="range" min="1" max="1000" value={priceRange} onChange={(e) => handleInputChange(e, "price")} className="form-control-range" id="formControlRange" />
          <div className="d-flex justify-content-between">
            <p>0</p>
            <p>{priceRange}</p>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="formControlRange">Sort By</label>
          <select className="form-control" onChange={(e) => handleInputChange(e, "sort")}>
            <option value={false}>Select</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
        <div className="form-group">
          <Button text="Clear" type="reset" />
        </div>
      </form>
    </div>
  )
}

export default Filter;