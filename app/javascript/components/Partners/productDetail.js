import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getProduct } from '../../action'
import styled from 'styled-components'


const ProductDetail = styled.div`
  width: 70%;
  margin: 0 auto;
  .list {
    width: 500px;
    margin 0 auto;
    height: 400px;
    img {
      width: 100%;
    } 
  }
`;


const productDetail = ({ fetchDetail, product, isFetching }) => {

  const { id } = useParams()

  useEffect(() => {
    fetchDetail(id)
  }, [])

  if (isFetching) {
    return <div className="status">loading...</div>
  }
  if (product) {
    return (
      <ProductDetail>
        <ul className="detail">
          <li className="list">
            <img src={`${product.image_url}`} />
          </li>
        </ul>
        <p>{product.name}</p>
        <p>
          {product.description}
        </p>
      </ProductDetail>
    )
  }
  return <h2>No product found</h2>;
}

const mapDispatchToProps = (dispatch) => ({
  fetchDetail: (id) => {
    dispatch(getProduct(id));
  },
})

const mapStateToProps = (state) => {
  const { isFetching, product } = state.product
  return {
    isFetching,
    product
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(productDetail)
