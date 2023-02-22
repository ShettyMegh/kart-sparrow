import './header.scss'
import Search from "../components/search/search"
import Button from "../components/button/button";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <img className="navbar-brand" src="https://i.ibb.co/Ph1bJtW/Screenshot-2023-02-22-at-11-33-29-AM.png" width="250px"></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Search />
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" > Home  <span className="sr-only">(current)</span></NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/products" className="nav-link" > Products </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">
                More
              </a>
              <div className="dropdown-menu">
                <div className="dropdown-item" >Men</div>
                <div className="dropdown-item" >Women</div>
                <div className="dropdown-item" >Kids</div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="addProduct"><Button text="Add Product" css={{ fontSize: "15px" }} classes="nav-link btn-light text-light" /></NavLink>
            </li>

          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Header;