import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/koinonia/vendors'}>Vendors</Link>
        <Link to={'/koinonia/products'}>Products</Link>
        <Link to={'/contact'}>Contact</Link>
      </ul>
    </div>
  )
}

export default Navigation