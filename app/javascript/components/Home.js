import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navigation from './Navigation/nav'
import Footer from './footer'

const Main = styled.div`
padding: 0 20px;
position: relative;
top: 100px;

`;
const HeroSection = styled.div`
  height: 60vh;
  background-color:  #7b7d79;
  margin-bottom: 30px;
 
`;

const OurEvents = styled.div`
  height: 80vh;
  border: solid 1px black;
  background-color: #a4a6a2;

`;

const Advert = styled.div`
  height: 40vh;
  border: solid 1px black;
  margin-top: 30px;
  background-color: #959693;

`

const About = () => {
  return (
    <Fragment>
      <Navigation />
      <Main>
        <HeroSection>
          <div className="image-wrapper">
            <h3>It's all about Networks</h3>
            <div className="button">Request a Quote</div>
          </div>
        </HeroSection>
        <OurEvents>
          <div></div>
          <div></div>
        </OurEvents>
        <Advert>

        </Advert>
        <Footer />
      </Main>
    </Fragment>
  )
}
export default About;