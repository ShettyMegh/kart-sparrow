import './header.scss'
import Search from "../../components/search/search"
import Button from "../../components/button/button";
import { NavLink, Link, Outlet } from "react-router-dom";
import CartBtn from '../../components/button/cartBtn';
import React from 'react';
const Header = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <Link to="/">
          <img className="navbar-brand" src="https://i.ibb.co/QJbSGys/Screenshot-2023-02-22-at-11-33-29-AM-2.png" alt="KartSparrow Logo" width="250px"></img>
        </Link>
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
              <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">
                More
              </Link>
              <div className="dropdown-menu">
                <div className="dropdown-item" >Men</div>
                <div className="dropdown-item" >Women</div>
                <div className="dropdown-item" >Kids</div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="cart">
                <CartBtn css={{ fontSize: "15px" }} classes="nav-link btn-light text-light" />
              </NavLink>
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

export default React.memo(Header);