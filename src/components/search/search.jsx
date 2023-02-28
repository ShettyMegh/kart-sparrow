import Button from '../button/button'
import { useContext } from 'react'
import { productsContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const Search = ({ inpWidth = "360px" }) => {
  const navigate = useNavigate();
  const { fetchData } = useContext(productsContext)

  const handleSearch = (e) => {
    fetchData(e.target.value);
    navigate('/products')
  }

  return (
    <>
      <form className="form-inline my-2 my-lg-0 m-auto" onSubmit={(e) => e.preventDefault()} >
        <input className="form-control" type="search" placeholder="Search" onChange={handleSearch} aria-label="Search" style={{ width: inpWidth }} required />
        <Button text={<i className="fa-solid fa-magnifying-glass"></i>} type="button" classes='btn-light my-2 my-sm-0' />
      </form>
    </>

  )
}

export default Search;