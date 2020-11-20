import React from 'react'
import Navigation from './Navigation/nav'
import styled from 'styled-components'
import { zte, uplink, sky, protech, optimum, etisalat, elsewedy, alhamd } from './imageUrl'
import Footer from './footer'

const ClientsWrapper = styled.div`
  padding: 0 50px;
  position: relative;
  top: 100px;
  font-family: 'Open Sans', sans-serif;
  h2 {
    text-transform: capitalize;
    text-align: center;
    font-weight: 700;
    color: red;
  }
  p {
    text-align: center;
    padding: 0 200px;
    line-height: 2;
    margin-top: 30px;
  }
  .slide {
    height: 300px;
    margin-top: 40px;
  }
  .clients-logo{
    display: flex;
    justify-content: space-between;
    .image-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      background-position: center;
      background-size: cover;
      box-shadow: 0 0 5px 0  grey, 0 0 5px -5px #505f79;
      border-radius: 5px;
      margin-top: 20px;
      text-align: center;
      width: 100px;
      height: 100px;
    }
  }
`;

const Clients = () => {
  return (
    <div>
      <Navigation />
      <ClientsWrapper>
        <h2>our clients</h2>
        <p>
          Over the years, we have amassed many happy customers and that is because of
          the quality of our products and for providing the lightning support they deserve
        </p>
        <div className="slide">
          <ul className="clients-logo">
            <li className="image-wrapper">
              <img src={`${zte}`} />
            </li>
            <li className="image-wrapper">
              <img src={`${uplink}`} />
            </li>
            <li className="image-wrapper" >
              <img src={`${sky}`} />

            </li>
            <li className="image-wrapper">
              <img src={`${protech}`} />
            </li>
            <li className="image-wrapper" >
              <img src={`${optimum}`} />

            </li>
            <li className="image-wrapper" >
              <img src={`${etisalat}`} />

            </li>
            <li className="image-wrapper" >
              <img src={`${elsewedy}`} />

            </li>
            <div className="image-wrapper" >
              <img src={`${alhamd}`} />
            </div>
          </ul>
        </div>
      </ClientsWrapper>
      <Footer />
    </div>
  )
}

export default Clients
