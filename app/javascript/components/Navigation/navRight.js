import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DropDown from '../DropDown/dropDown';


const Ul = styled.ul`  
  flex-flow: column nowrap;
  background-color: #fff;
  box-shadow:  0 4px 5px -2px gray;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 400px;
  width: 30%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  text-align: left;
  padding-top: 50px;
  li {
    padding: 10px 10px;
    a {
      color: #000;
      font-size: 2em;
      
    }
  }
  
  // @media(min-width: 1024px){
  //   display: none;
  // }
  
`

const navRight = (props) => {
  return (
    <Ul open={props.open}>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/about'}>About</Link></li>
      <DropDown {...props} />
      <li><Link to={'/clients'}>Clients</Link></li>
      {/* <li><Link to={'/services'}>Services</Link></li> */}
      <li><Link to={'/contact'}>Contact</Link></li>
    </Ul>
  )
}

export default navRight
