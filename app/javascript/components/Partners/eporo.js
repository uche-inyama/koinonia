import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from '../Navigation/nav'
import { getPartnerBySlug } from '../../action'
import Footer from '../footer'

const ViaviWrapper = styled.div`
  position: relative;
  top: 150px;
  .footer-section {
    margin-top: 40px;
  }
`;

const PartnerLogoName = styled.div`
  margin-bottom: 40px;
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
      width: 300px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
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
        margin-left: 20px;
      }
    }
    // @media(max-width: 997px){
    //   .profile {
    //     margin-left: 20px;
    //   }
    // }
  }
`;

const ProductItem = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 400px);
  grid-gap: 50px;
  justify-content: center;
  padding: 0 20px;
  list-style: none;
  a {
    box-shadow: 0 0 5px 0  grey, 0 0 5px -5px #505f79;
    border-radius: 5px;
  }
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    display: flex;
    align-items: center;
  }
  
  .description{
   fontfont-family: 'Open Sans', sans-serif;
   text-align: center;
   line-height: 1.2
  }
  .name {
    color: #000;
    height: 50px;
    font-size: 1.2em;
    text-align: center;
  }

  // @media(max-width: 997px){
  //   grid-template-columns: repeat(2, 1fr);
  // }
`

const eporo = ({ loadPartner }) => {
  const partner = useSelector((state) => state.partner.partner)
  const isFetching = useSelector((state) => state.partner.isFetching)
  const dispatch = useDispatch()

  let { slug } = useParams();
  const url = `/api/v1/partners/${slug}`
  useEffect(() => {
    dispatch(getPartnerBySlug(url))
  }, [slug])

  if (isFetching) {
    return <div className="status">loading...</div>
  }

  if (partner) {
    return (
      <ViaviWrapper>
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
              <Link to={`/products/:id`} key={index}>
                <div className="image-wrapper"><img src={`${ele.attributes.image_url}`} /></div>
                <div className="name">{ele.attributes.name}</div>
              </Link>
            )}
          </ProductItem>
        </main>
        <div className="footer-section">
          <Footer />
        </div>
      </ViaviWrapper >
    )
  }
  return <h2>No partners found for the name</h2>;
}

// const mapDispatchToProps = (dispatch) => ({
//   loadPartner: (url) => {
//     dispatch(getPartnerBySlug(url));
//   },
// });

// const mapStateToProps = (state) => {
//   const { isFetching, partner } = state.partner
//   return {
//     partner,
//     isFetching
//   };
// }
export default eporo
