import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  // list-style: none;
  // display: flex;
  // flex-flow: row nowrap;

  // li {
  //   padding: 18px 10px;
  // }
  // display: none;
  flex-flow: column nowrap;
  background-color: black;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  text-align: center;
  li {
    color: white;
  }
`

const navRight = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </Ul>
  )
}

export default navRight
