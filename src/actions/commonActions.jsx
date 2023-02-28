export const fetchCats = (productsData, setCategories) => {
  let cats = [];
  productsData.forEach((product) => {
    if (!cats.includes(product.category)) {
      cats.push(product.category)
    }
  })
  setCategories(cats)
}
