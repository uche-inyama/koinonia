import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import { logoUrl } from '../imageUrl'

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  background-color: #fff;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
    .logo {
      padding: 15px 0;
    }

    @media(min-width: 1024px){
      font-family: 'Open Sans', sans-serif;
      position: fixed;
      z-index: 20;
     .nav-items {
       display: flex;
       justify-content: space-around;
       list-style: none;
       width: 70%;
       padding: 0 10px;
       align-items: center;
       a {
         color: #8c8c88;
         text-decoration: none;
       }
     }
     .logo {
       background-repeat: no-repeat;
       background-position: center;
       background-size: cover;
       width: 100px;
       height: auto;
     }
    }
`


const nav = () => {
  return (
    <Nav>
      <div className="logo" style={{ backgroundImage: 'url("' + logoUrl + '")' }}></div>
      <ul className="nav-items">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About Us</Link>
        <Link to={'/partners'}>Our Partners</Link>
        <Link to={'/clients'}>Clients</Link>
        <Link to={'/services'}>Services</Link>
        <Link to={'/news'}>News</Link>
        <Link to={'/contact'}>Contact Us</Link>
        <Link to={'#'}>search</Link>
      </ul>
      <Hamburger />
    </Nav>
  )
}

export default nav
