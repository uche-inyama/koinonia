import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation/nav'
import { getPartners, getProducts } from '../action'
import styled from 'styled-components'

const PartnerLogoName = styled.div`
  position: relative;
  top: 100px;
  .partner-profile{
    display: grid;
    grid-template-columns: 2fr 5fr;

  }

`;

const ProductItem = styled.ul`
display: grid;
  grid-template-columns: 310px 310px 310px;
  grid-gap: 20px;
  position: relative;
  top: 250px;
  .image-wrapper {
    width: 100px
    height: 100px;
  }
  .description{
    width: 100px;
    height: 100px;
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
              <img src={`${ele.logo_url}`} />
              <div className="description">
                <div>{ele.name}</div>
                <div>{`VIAVI solution has more than 3500 
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
            <div>{ele.attributes.name}</div>
            <div>{ele.attributes.description}</div>
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
