import Card from "../components/product/card/card"
import Button from "../components/button/button";
import { useContext, useState, useEffect, useRef } from "react";
import { productsContext } from "../App";
import React from 'react';


const ProductList = () => {
  const { filterData } = useContext(productsContext)
  const [loadMore, setLoadMore] = useState(filterData.slice(0, 3));
  const [loadMoreDisabled, setLoadMoreDisabled] = useState(false);

  useEffect(() => {
    setLoadMore(filterData.slice(0, 3));
    setLoadMoreDisabled(false);
  }, [filterData])


  const handleLoadMore = (e) => {
    setLoadMore((prevLoadMore) => {
      const newData = filterData.slice(prevLoadMore.length, prevLoadMore.length + 3)
      const b = prevLoadMore.concat(newData);
      return b;
      // console.log(newData)
      // return [...prevLoadMore, ...newData]
    })
    setTimeout(() => {
      window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
      if (loadMore.length >= filterData.length) {
        setLoadMoreDisabled(true);
      } else {
        setLoadMoreDisabled(false);
      }
    })
  }


  if (filterData.length < 1) {
    return (
      <h3 className="text-danger text-center">No Products Found</h3>
    )
  }
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {loadMore.map((product) => {
          return (
            <Card key={product.id} data={product} />
          )
        })}
      </div >
      <div className="d-flex justify-content-center">
        <Button text="Load More" classes="text-dark" id="loadBtn" css={{ backgroundColor: "white" }} isDisabled={loadMoreDisabled} onClick={handleLoadMore} />
      </div>
    </>
  )
}

export default ProductList;