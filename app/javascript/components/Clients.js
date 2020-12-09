import React from 'react'
import Navigation from './Navigation/nav'
import styled from 'styled-components'
import { zte, uplink, sky, protech, optimum, etisalat, elsewedy, alhamd } from './imageUrl'
import Footer from './Footer/footer'
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
      </ClientsWrapper>
      <Footer />
    </div>
  )
}

export default Clients
