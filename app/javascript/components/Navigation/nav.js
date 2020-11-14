import React from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger'

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
    .logo {
      padding: 15px 0;
    }

    @media(min-width: 1024px){
      font-family: 'Open Sans', sans-serif;
     .nav-items {
       display: flex;
       justify-content: space-around;
       width: 70%;
       padding: 0 50px;
       align-items: center;
       li {
         color: #8c8c88;
       }
     }
     .logo {
       padding-left: 50px;
     }
    }
`


const nav = () => {
  return (
    <Nav>
      <div className="logo">logo</div>
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
