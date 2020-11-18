import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation/nav'
import { getPartners, getProducts } from '../action'


const Viavi = ({ dispatch, partners, products }) => {
  console.log(partners)
  console.log(products)
  useEffect(() => {
    dispatch(getPartners());
    dispatch(getProducts());
  }, [])

  return (
    <div>
      <Navigation />
      <div>
        <div>
          {partners.name}
        </div>
        <div>{ }</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  partners: state.partners,
  products: state.products
})

export default connect(mapStateToProps, null)(Viavi)
