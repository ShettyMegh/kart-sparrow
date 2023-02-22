import Button from '../button/button'
import { useRef } from 'react'

const Search = () => {

  const searchRef = useRef(null)
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search")
    console.log(searchRef.current.value)
  }

  return (
    <form className="form-inline my-2 my-lg-0 m-auto" onSubmit={handleSearch} >
      <input className="form-control mr-sm-2" type="search" placeholder="Search" ref={searchRef} aria-label="Search" />
      <Button text={<i class="fa-solid fa-magnifying-glass"></i>} classes='btn-light my-2 my-sm-0' type='submit' />
    </form>
  )
}

export default Search;