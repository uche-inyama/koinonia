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
  box-shadow: 0 0 2px 0  grey;
  .logo {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 250px;
    height: 100px;
     }
  @media (min-width: 1024px){
    display: flex;
    .logo {
      margin-right: 100px;
    }
  }
`

const NavItems = styled.nav`
  display: none;
  height: 100%;
  @media (min-width: 1024px){
    display: block;
      display: flex;
      justify-content: space-around;
      list-style: none;
      width: 70%;
      padding: 0 10px;
      align-items: center;
      a {
        color: #8c8c88;
        text-decoration: none;  
        font-size: 1.2em;
      }
  }
`
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
