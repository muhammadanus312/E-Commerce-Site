import React from 'react'
import style from './Navbar.module.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/images/icons/Logo.svg'
import cartLogo from '../../assets/images/icons/Vector.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const cartQuantity=useSelector((state) => {
    return state.cartProducts.cartProducts.cartProducts.length;
  });
  return (
  <div className={`sticky-top ${style.navbar}`}>
    <div className={`${style.nav} container`}>
        <Link to={'/'}>
            <img src={logo} alt="" />
        </Link>
        <div className={`d-flex`}>
            <button className={`d-flex ${style.locationBtn}`}>
                    Porto Alegre, RS
            </button>
            <Link to="/cart" className={`text-decoration-none d-flex mx-2 ${style.cartBtn}`}>
                <img className='mx-1' src={cartLogo} alt="" />
                <span class="badge badge-dark text-black">{cartQuantity>0?cartQuantity:null}</span>
            </Link>
        </div>

    </div>
  </div>
  )
}

export default Header