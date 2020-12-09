import React from 'react'
import Navigation from '../Navigation/nav'
import Footer from '../Footer/footer'
import { AboutWrapper, HeroSection, Ul, ImageWrapper, Details, AllDetails } from './styledAbout'




const About = () => {

  const readMore = () => {
    const details = document.querySelector('.details')
    const allDetails = document.querySelector('.all-details')
    const aboutMeaning = document.querySelector('.about-meaning')
    details.style.display = 'none'
    allDetails.classList.remove('all-details')
    allDetails.classList.add('active')
    aboutMeaning.style.gridTemplateRows = "550px"

  }

  const showLess = () => {
    const details = document.querySelector('.details')
    const active = document.querySelector('.active')
    const aboutMeaning = document.querySelector('.about-meaning')
    active.classList.remove('active')
    active.classList.add('all-details')
    details.style.display = 'block'
    aboutMeaning.style.gridTemplateRows = "350px"
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
              </p> <br />
              <p>Our buying power allows us to offer major brands at highly competitive prices, regardless of the size of the client’s purchase order.
              We also help our clients increase invoice value by keeping abreast of new technologies that allow the job to be done faster, better and cheaper.
              Our support has helped many small businesses scale successfully as we select products based on our client’s requirements (not cosy vendor partnerships). This means our vendors react to the market instead of dictating it.
              </p> <br />
              <p>
                Over the years Koinonia have been entrusted with the supply, design and support services for some of Australia’s and Egypt’s largest infrastructure
                and telecommunications projects and a multitude of industries including:
                Mining, Utility, Telecommunications, Education, Government, Construction and Enterprise market segments. <strong onClick={showLess}>show less</strong>
              </p> <br /> <br />
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

