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
`


const nav = () => {
  return (
    <Nav>
      <div className="logo">logo</div>
      <Hamburger />
    </Nav>
  )
}

export default nav
