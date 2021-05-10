import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from '../Navigation/nav'
import { getPartnerBySlug } from '../../action'
import Footer from '../Footer/footer'
import { PartnerLogoName, ProductItem, ProductWrapper } from './styledProduct'


const Product = ({ partner, isFetching, loadPartner }) => {
  let { slug } = useParams();
  const url = `/api/v1/partners/${slug}`
  useEffect(() => {
    loadPartner(url)
  }, [slug])

  if (isFetching) {
    return <div className="status">loading...</div>
  }

  if (partner) {
    return (
      <ProductWrapper>
        <Navigation />
        <main>
          <PartnerLogoName>
            <ul>
              <li className="partner-profile">
                <div className="image-wrapper">
                  <img src={`${partner.data.attributes.logo_url}`} />
                </div>
                <div className="profile">
                  <div className="name">{partner.data.attributes.name}</div>
                </div>
              </li>
            </ul>
          </PartnerLogoName>
          <ProductItem>
            {partner.included.map((ele, index) =>
              <Link to={`/products/${slug}/${ele.id}`} key={index}>
                <div className="image-wrapper"><img src={`${ele.attributes.image_url}`} /></div>
                <div className="name">{ele.attributes.name}</div>
              </Link>
            )}
          </ProductItem>
        </main>
        <div className="footer-section">
          <Footer />
        </div>
      </ProductWrapper>
    )
  }
  return <h2>No partners found for the name</h2>;
}

const mapDispatchToProps = (dispatch) => ({
  loadPartner: (url) => {
    dispatch(getPartnerBySlug(url));
  },
});

const mapStateToProps = (state) => {
  const { isFetching, partner } = state.partner
  return {
    partner,
    isFetching
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)
