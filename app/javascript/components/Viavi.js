import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation/nav'
import { getPartners, getProducts } from '../action'
import styled from 'styled-components'

const PartnerLogoName = styled.div`
  position: relative;
  top: 100px;
  ul {
    display: flex;
    padding-right: 50px;
  }
  .partner-profile{
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
      .description{
        line-height: 1.4;
      }
      .name {
        height: 30px;
        font-size: 1.2em;
        padding-top: 5px;
      }
    }
    
  }

`;

const ProductItem = styled.ul`
  display: grid;
  grid-template-columns: 350px 350px 350px;
  grid-template-rows: 350px 350px;
  grid-gap: 50px;
  justify-content: center;
  position: relative;
  top: 250px;
  fontfont-family: 'Open Sans', sans-serif;
  li {
    box-shadow: 0 0 10px 0  grey, 0 0 15px -5px #505f79;
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
   text-align: center;
   line-height: 1.2
  }
  .name {
    padding: 10px 0;
    text-align: center;
  }
`

const Viavi = ({ dispatch, partners, products }) => {
  console.log(products)
  console.log(partners)

  useEffect(() => {
    dispatch(getPartners());
    dispatch(getProducts());
  }, [])

  return (
    <div>
      <Navigation />
      <PartnerLogoName>
        <ul>
          {partners.map(ele =>
            <div className="partner-profile">
              <div className="image-wrapper">
                <img src={`${ele.logo_url}`} />
              </div>
              <div className="profile">
                <div className="name">{ele.name}</div>
                <div className="description">{`VIAVI solution has more than 3500 
                  employees & 60 offices serving the needs of our global customers. 
                  Its Corporate Headquarters is in the united states of America. 
                  Viavi has acquired 7 major companies in the telecommunications sector in the last 10 years. 
                  VIAVI Solutions has two primary businesses – Network and Service Enablement (NSE) and Optical Security and Performance (OSP).
                  VIAVI customers include Communications Service Providers; Enterprises, Cloud Providers, and Data Centers; Network Equipment Manufacturers; Network Installers; 
                  Aerospace and Military`}
                </div>
              </div>
            </div>
          )}
        </ul>
      </PartnerLogoName>
      <ProductItem>
        {products.map(ele =>
          <li>
            <div className="image-wrapper"><img src={`${ele.attributes.image_url}`} /></div>
            <div className="name">{ele.attributes.name}</div>
            {/* <div className="description">{ele.attributes.description}</div> */}
          </li>
        )}
      </ProductItem>
    </div>
  )
}

const mapStateToProps = (state) => ({
  partners: state.partners,
  products: state.products
})

export default connect(mapStateToProps, null)(Viavi)
