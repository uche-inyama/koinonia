import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation/nav'
import styled from 'styled-components'
import Footer from './footer'

const PartnerLogoName = styled.div`
  position: relative;
  top: 100px;
  ul {
    display: flex;
    padding-right: 50px;
  }
  .partner-profile {
    display: grid;
    grid-template-columns: 2fr 5fr;
    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .profile {
      fontfont-family: 'Open Sans', sans-serif;
      .description {
        line-height: 1.4;
      }
      .name {
        height: 40px;
        font-size: 1.2em;
        padding: 10px 0;
        font-size: 1.2em;
        border-bottom: 3px solid red;
        width: 150px;
        margin-bottom: 10px;
      }
    }
  }
`;

const ProductItem = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 350px 350px;
  grid-gap: 50px;
  justify-content: center;
  position: relative;
  padding: 0 20px;
  top: 250px;
  list-style: none;
  li {
    box-shadow: 0 0 5px 0  grey, 0 0 5px -5px #505f79;
    border-radius: 5px;
  }
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    display: flex;
    align-items: center;
  }
  
  .description{
   fontfont-family: 'Open Sans', sans-serif;
   text-align: center;
   line-height: 1.2
  }
  .name {
    padding: 10px 0;
    font-size: 1.2em;
    text-align: center;
  }
`
const ViaviWrapper = styled.div`
  .gTLZXx {
    position: relative;
    top: 250px;
  }
`;
const Viavi = ({ partners, products }) => {
  return (
    <ViaviWrapper>
      <Navigation />
      <PartnerLogoName>
        <ul>
          {partners.map((ele, index) =>
            <li key={index} className="partner-profile">
              <div className="image-wrapper">
                <img src={`${ele.logo_url}`} />
              </div>
              <div className="profile">
                <div className="name">VIAVI Solutions</div>
                <div className="description">{ele.name}</div>
              </div>
            </li>
          )}
        </ul>
      </PartnerLogoName>
      <ProductItem>
        {products.map((ele, index) =>
          <li key={index}>
            <div className="image-wrapper"><img src={`${ele.attributes.image_url}`} /></div>
            <div className="name">{ele.attributes.name}</div>
          </li>
        )}
      </ProductItem>
      <Footer />
    </ViaviWrapper>
  )
}

const mapStateToProps = (state) => ({
  partners: state.partners,
  products: state.products
})

export default connect(mapStateToProps, null)(Viavi)
