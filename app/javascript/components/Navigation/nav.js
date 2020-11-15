import React from 'react'
import styled from 'styled-components'
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
       padding: 0 50px;
       align-items: center;
       li {
         color: #8c8c88;
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
        <li>Home</li>
        <li>About Us</li>
        <li>Our Partners</li>
        <li>Clients</li>
        <li>Services</li>
        <li>News</li>
        <li>Contact Us</li>
        <li>search</li>
      </ul>
      <Hamburger />
    </Nav>
  )
}

export default nav
