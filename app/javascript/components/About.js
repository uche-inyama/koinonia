import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navigation from './Navigation/nav'
import Footer from './footer'


const AboutWrapper = styled.div`
// .sc-hKgILt  {
//   position: relative;
//   top: 50px;
// }
`;
const Main = styled.main`
  position: relative;
  z-index: 10;
`;

const HeroSection = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9em;
  line-height: 1.5;
  padding: 30px 50px 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 500px 500px;
  grid-gap: 30px;
  grid-template-rows: repeat(1, 400px);
  list-style: none;
  margin-top: 100px;
  @media(max-width: 1024px){
    grid-template-columns: 400px 400px;
  }
 
`;
const ImageWrapper = styled.li`
  border-radius: 20px;
  position: relative;
  z-index: 1;
  img {
    width: 500px;
    height: 450px;
  }
  @media(max-width: 1024px){
    img {
      width: 400px;
      height: 350px;
    }
  }
`;

const Details = styled.li`
  p:nth-child(n+2){
    margin-top: 10px;
  }
  span {
    border-bottom: solid 1px red;
    padding-bottom: 5px;
    width: 63px;
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
      display: block;
      margin-bottom: 5px;
      height: 40px;
      text-transform: capitalize;
      width: 75px;
    }
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <Navigation />
      <main>
        <HeroSection>
          <Ul>
            <ImageWrapper>
              <img src="https://koinoniamaya.s3.us-east-2.amazonaws.com/network-digital-hologram-internet-things-city-background-5g-network-wireless-systems.png" alt="aboutImage" />
            </ImageWrapper>
            <Details>
              <span>Meaning</span>
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
            <ImageWrapper>
              <img src="https://koinoniamaya.s3.us-east-2.amazonaws.com/5g-communication-technology-internet-network.png" alt="aboutImage" />
            </ImageWrapper>
          </Ul>
        </HeroSection>
      </main>
      {/* <Footer /> */}
    </AboutWrapper>
  )
}
export default About;