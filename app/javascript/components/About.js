import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navigation from './Navigation/nav'
import Footer from './footer'

const Main = styled.main`
  position: relative;
  z-index: 10;
`;
const HeroSection = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9em;
  line-height: 1.5;
  padding: 30px 50px 0 50px;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  grid-template-rows: repeat(1, 400px);
  list-style: none;
  margin-top: 100px;
`;
const ImageWrapper = styled.li`
  border: solid 1px black;
  background-color: gray;
  border-radius: 20px;
  position: relative;
  z-index: 1;
`;

const Details = styled.li`
  p:nth-child(n+2){
    margin-top: 10px;
  }
  .vision {
    border: red 1px solid;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-left: 10px;
    width: 100%;
    height: 170px;
    z-index: 20;
    span {
      padding: 15px 0 10px 0px;
      border-bottom: 1px solid red;
      margin-bottom: 10px;
      height: 40px;
      width: 100px;
      display: block;
    }
  }
`;

const Home = () => {
  return (
    <Fragment>
      <Navigation />
      <main>
        <HeroSection>
          <Ul>
            <ImageWrapper></ImageWrapper>
            <Details>
              <p>Koinonia Enterprises is an Australian company specialized in fixed line
              and Mobile Communications Networks providing turnkey solutions in
              design, deployment and integration services for high-performance
              telecommuications networks, providing an end to end capability,
              commencing with Engineering and planning services, through to
              Equipment Supply, Installation, Commissioning, Integration and Managed Services.
              </p>
              <p>Along with our ISO 9001, ISO 14100 and ISO AS/NZS 4801 certifications
              by SAI Global; We pride ourselves in delivering quality work to the
              highest regard with proven tracked records and reference across Australia.
              </p>
              <p>
                Using Koinonia extensive database we have access to qualified local
                and international resources around the globe. Our experience
                in working visas ensures a smooth transition for both clients and
                candidates when sourcing international candidates.
              </p>
            </Details>
          </Ul>
          <Ul>
            <Details>
              <p className="vision">
                <span>our Vision</span>
                The Management team has comprehensive experience in the telecommunications
                industry, all with relevant qualifications and training.
                Our experience covers the full spectrum of installations, maintenance and
                project management in all work phases.
              </p>
            </Details>
            <ImageWrapper></ImageWrapper>
          </Ul>
        </HeroSection>
      </main>
      <Footer />
    </Fragment>
  )
}
export default Home;