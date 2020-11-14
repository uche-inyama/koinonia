import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Nav = styled.div`
  background-color: #000;
  font-size: 2em;
  height: 80px;
  width: 100% !important;
  .large{
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    a{
      color: #fff;
      margin-left: 10px;
    }
  }

  @media(min-width: 1024px){

  }
  
  `
const Navigation = () => {
  return (
    <Nav>
      <ul className="large">
        <Link to={'/'}>Home</Link>
        {/* <Link to={'/about'}>About</Link> */}
        <Link to={'/koinonia/vendors'}>Vendors</Link>
        {/* <Link to={'/koinonia/products'}>Products</Link> */}
        {/* <Link to={'/contact'}>Contact</Link> */}
      </ul>
    </Nav >
  )
}

export default Navigation