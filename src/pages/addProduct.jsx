import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { productsContext } from "../App";
import { fetchCats } from "../actions/commonActions";
import Button from "../components/button/button";
import "./addProduct.scss"


const AddProduct = () => {
  const [updating, setUpdating] = useState(false);
  const [newProduct, setNewProduct] = useState();
  const [categories, setCategories] = useState([]);
  const [response, setResponse] = useState(false);
  const { productsData, fetchData, isLoadingProducts } = useContext(productsContext);

  const addProduct = (data) => {
    setUpdating(true);
    axios.post("http://localhost:3232/products/", data).then(resp => {
      setNewProduct(resp.data);
      setUpdating(false);
      setResponse({ text: "Added Succesfully", respStatus: "alert-success" });
    }).catch(error => {
      setResponse({ text: "Something Went Wrong", respStatus: "alert-danger" })
      console.log(error)
    })
  }



  useEffect(() => {
    if (!isLoadingProducts) {
      fetchCats(productsData, setCategories);
    }
  }, [productsData])

  useEffect(() => {
    fetchData();
  }, [newProduct])

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formObj = new FormData(form);
    let formData = { id: productsData.length + 1, rating: {}, images: [] };
    for (let [key, value] of formObj.entries()) {
      if (key === "rate" || key === "count") {
        formData["rating"][key] = parseInt(value);
        continue;
      }
      if (key === "price") {
        formData[key] = parseInt(value);
        continue;
      }
      if (key === "images") {
        formData["images"][0] = value;
        continue;
      }
      formData[key] = value;
    }
    console.log(formData)
    addProduct(formData)
    e.target.reset();
  }


  return (
    <div className="container my-5">
      <div className="add-product-card">
        <h3 className="text-center">Add Product</h3>
        {response && <p className={`response ${response.respStatus}`}>{response.text}</p>}
        <form method="post" onSubmit={handleAdd}>
          <div className="form-group">
            <input type="text" name="title" className="form-control" id="exampleFormControlInput1" placeholder="Title" required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Select Category</label>
            <select name="category" className="form-control" id="exampleFormControlSelect1" required>
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
            <label htmlFor="price">Price</label>
            <input name="price" step="0.01" type="number" className="form-control price" placeholder="ex: 12.88" required />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image Url</label>
            <input name="images" type="text" className="form-control image" placeholder="ex: https://assets.kartsparrow.com/img" required />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" type="number" rows="2" className="form-control description" placeholder="ex: original fauji cereals muesli fruit nuts flakes breakfast cereal" required />
          </div>

          <div className="form-group">
            <label htmlFor="ratings">Ratings</label>
            <div className="d-flex justifu-content-between">
              <input name="rate" step="0.1" min="1" max="5" type="number" className="form-control ratings" placeholder="rating (4.0/5.0)" />
              <input name="count" type="number" className="form-control ratings" placeholder="count" required />
            </div>
          </div>

          <Button type="submit" className="btn" text="Add" disabled={updating ? true : false} value={updating ? "Adding..." : "Add"} width="100%" height="50px" css={{ fontSize: "20px" }} />
        </form >
      </div>

    </div>
  )
}

export default AddProduct;