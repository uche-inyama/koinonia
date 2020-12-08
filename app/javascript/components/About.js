import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation/nav'
import Footer from './footer'


const AboutWrapper = styled.div`
  position: relative;
  top: 50px;
  main {
    height: 1100px;
  }
  .footer-section {
    margin-top: 40px;
  }
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
  grid-template-columns: 400px 400px;
  grid-gap: 30px;
  grid-template-rows: repeat(1, 350px);
  list-style: none;
  margin-top: 100px;
  position: relative;
  .active {
    display: block;
    height: 600px;
    position: absolute;
    z-index: 10;
    width: 50%;
    left: 450px;
    box-shadow: 0 0 10px 0 grey;
    padding: 10px;
    line-height: 1.5
  }
`;
const ImageWrapper = styled.li`
  border-radius: 20px;
  position: relative;
  z-index: 1;
  img {
    width: 400px;
    height: 350px;
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
  strong {
    padding: 5px;
    font-weight: 700;
  }
`;

const AllDetails = styled.li`
  display: none;
  span {
    border-bottom: solid 2px red;
    padding-bottom: 5px;
  }
`;


const About = (props) => {

  const readMore = () => {
    const details = document.querySelector('.details')
    const allDetails = document.querySelector('.all-details')
    const aboutMeaning = document.querySelector('.about-meaning')
    details.style.display = 'none'
    allDetails.classList.remove('all-details')
    allDetails.classList.add('active')
    aboutMeaning.style.gridTemplateRows = "550px"

  }

  return (
    <AboutWrapper>
      <Navigation />
      <main>
        <HeroSection>
          <Ul className="about-meaning">
            <ImageWrapper>
              <img src="https://koinoniamaya.s3.us-east-2.amazonaws.com/network-digital-hologram-internet-things-city-background-5g-network-wireless-systems.png" alt="aboutImage" />
            </ImageWrapper>
            <Details className="details">
              <span>Meaning</span>
              <p>Koinonia is a leading Network Solutions provider and Distribution Company located in Australia with
              wide regional presence in Egypt and the Middle East.
              Our independent Australian ownership puts us in a unique position to offer our integration and installation partners and customers a best-in-class solution.
              We are exclusive agents for optical tools and equipment from around the world, and bring them to you backed with full local after sales services, warranty and technical support.
              <strong onClick={readMore}>Read More</strong>
              </p>
            </Details>
            <AllDetails className="all-details">
              <span>Meaning</span>
              <p style={{ marginTop: '20px' }}>Koinonia is a leading Network Solutions provider and Distribution Company located in Australia with
              wide regional presence in Egypt and the Middle East.
              Our independent Australian ownership puts us in a unique position to offer our integration and installation partners and customers a best-in-class solution.
              We are exclusive agents for optical tools and equipment from around the world, and bring them to you backed with full local after sales services, warranty and technical support.
              </p>
              <p>Our buying power allows us to offer major brands at highly competitive prices, regardless of the size of the client’s purchase order.
              We also help our clients increase invoice value by keeping abreast of new technologies that allow the job to be done faster, better and cheaper.
              Our support has helped many small businesses scale successfully as we select products based on our client’s requirements (not cosy vendor partnerships). This means our vendors react to the market instead of dictating it.
                </p>
              <p>
                Over the years Koinonia have been entrusted with the supply, design and support services for some of Australia’s and Egypt’s largest infrastructure
                and telecommunications projects and a multitude of industries including:
                Mining, Utility, Telecommunications, Education, Government, Construction and Enterprise market segments.
                </p>
            </AllDetails>
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
      <div className="footer-section">
        <Footer />
      </div>
    </AboutWrapper>
  )
}
export default About;

