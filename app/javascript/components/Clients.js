import React from 'react'
import Navigation from './Navigation/nav'
import styled from 'styled-components'
import { zte, uplink, sky, protech, optimum, etisalat, elsewedy, alhamd } from './imageUrl'
import Footer from './footer'
import Slider from './Carousal/slider'

const ClientsWrapper = styled.div`
  padding: 0 70px;
  position: relative;
  top: 150px;
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
`;

const Clients = () => {
  const images = [zte, uplink, sky, protech, optimum, etisalat, elsewedy, alhamd];
  return (
    <div>
      <Navigation />
      <ClientsWrapper>
        <h2>our clients</h2>
        <p>
          Over the years, we have amassed many happy customers and that is because of
          the quality of our products and for providing the lightning support they deserve
        </p>

        <Slider slides={images} />

        {/* <div className="slide">
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
        </div> */}
      </ClientsWrapper>
      <Footer />
    </div>
  )
}

export default Clients
