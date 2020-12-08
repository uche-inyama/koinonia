import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import { logoUrl } from '../imageUrl'
import DropDown from '../DropDown/dropDown'


const Nav = styled.div`
  background-color: #fff;  
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0px;
  z-index: 20;
  .logo {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 250px;
    height: 100px;
     }
`

const NavItems = styled.nav`
  display: none;
  height: 100%;
//   width: 100%;
//   border-bottom: 2px solid #f1f1f1;
//   background-color: #fff;
//   padding: 0 50px;
//   display: flex;
//   justify-content: space-between;
//   font-family: 'Open Sans', sans-serif;
//   
//   .nav-items {
//     display: flex;
//     justify-content: space-around;
//     list-style: none;
//     width: 70%;
//     padding: 0 10px;
//     align-items: center;
//     a {
//       color: #8c8c88;
//       text-decoration: none;  
//       font-size: 1.2em;
//     }
//   }
//   
// `
const nav = (props) => {

  return (
    <Nav>
      <div className="logo" style={{ backgroundImage: 'url("' + logoUrl + '")' }}></div>
      <NavItems>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About Us</Link>
        <DropDown {...props} />
        <Link to={'/clients'}>Clients</Link>
        {/* <Link to={'/services'}>Services</Link> */}
        <Link to={'/news'}>News</Link>
        <Link to={'/contact'}>Contact Us</Link>
        {/* <Link to={'#'}>search</Link> */}
      </NavItems>
      <Hamburger />
    </Nav>
  )
}

export default nav
