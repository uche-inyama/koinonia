import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  // list-style: none;
  // display: flex;
  // flex-flow: row nowrap;

  
  // display: none;
  
  flex-flow: column nowrap;
  background-color: black;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;-
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  text-align: center;
  padding-top: 100px;
  li {
    padding: 50px 10px;
    a {
      color: white;
      font-size: 2.5em;
      
    }
  }
  
`

const navRight = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/about'}>About</Link></li>
      <li><Link to={'/koinonia/vendors'}>Vendors</Link></li>
      <li><Link to={'/koinonia/products'}>Products</Link></li>
      <li><Link to={'/contact'}>Contact</Link></li>
    </Ul>
  )
}

export default navRight
