import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getProduct, getPartnerBySlug } from '../../action'
import styled from 'styled-components'
import Slider from '../Carousal/slider'
import Nav from '../Navigation/nav'
import Footer from '../Footer/footer'


const ProductDetailWrapper = styled.div`
  padding: 0 70px;
  .slider {
    .arrow {
     
    }
  }
`;

const ProductDetail = styled.div`
  display: flex;
  width: 100%;
  margin: 150px 0 50px 0;
  // padding-top: 30px;
  padding: 0 40px;

  .product-detail {
    margin: 0 40px 0px 0;
    width: 200px;
    padding-top: 20px;
   
    .image-wrapper {
      width: 200px;
      img {
        width: 100%;
        padding-top: 20px;
      } 
      .NSC, .ONX {
        width: 200px;
        height: 330px;
      }
      .Vision {
        padding-top: 40px;
      }
    }
  }
  .description {
    text-align: left;
    line-height: 1.4;
    padding-top: 50px;
    margin-bottom: 30px;
  }
  .name {
    text-align: center;
    height: 40px;
    padding-top: 20px;
    // padding-right: 140px;
  }
  
`;


const productDetail = ({ isFetchingProduct, loadPartner, fetchDetail, product, partner }) => {

  const { id, slug } = useParams()
  const url = `/api/v1/partners/${slug}`


  useEffect(() => {
    fetchDetail(id)
    loadPartner(url)
  }, [id, url])

  if (isFetchingProduct && isFetchingPartner) {
    return <div className="status">loading...</div>
  }
  if (product && partner) {
    const products = partner.included.map(ele => (ele))

    return (
      <Fragment>
        <Nav />
        <ProductDetailWrapper>
          <ProductDetail>
            <div className="product-detail">
              <div className={`image-wrapper ${product.name}`}>
                <img className={`${product.name}`} src={`${product.image_url}`} />
                <p className="name">{product.name}</p>
              </div>
            </div>
            <p className="description">
              {product.description}
            </p>
          </ProductDetail>
          <Slider
            slides={products}
            slug={slug}
          // id={Id}
          />
        </ProductDetailWrapper>
        <Footer />
      </Fragment>
    )
  }
  return <ProductDetail>No product details yet.</ProductDetail>;
}

const mapDispatchToProps = (dispatch) => ({
  fetchDetail: (id) => {
    dispatch(getProduct(id));
  },
  loadPartner: ((url) => {
    dispatch(getPartnerBySlug(url));
  })
})

const mapStateToProps = (state) => {
  const { isFetchingProduct, product } = state.product
  const { isFetchingPartner, partner } = state.partner
  return {
    isFetchingProduct,
    product,
    partner,
    isFetchingPartner
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(productDetail)
