import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation/nav'
import ContactForm from './form/contactForm'
import { contactImage } from './imageUrl'
import Footer from './footer'

const ContactWrapper = styled.div`
  
  .sc-hKgILt  {
    position: relative;
    top: 150px;
  }
`;
const ContactImage = styled.div`
position: relative;
  top: 150px;
  left: 0px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  .dUtfIP {
    position: relative;
    left: 20px;
    margin-left: 40px
  }
  .contact-image-wrapper {
    margin-left: 20px;
  }
`;

const Contact = () => {
  return (
    <div>
      <Navigation />
      <ContactImage>
        <ContactForm />
        <div className="contact-image-wrapper">
          <img src={contactImage} />
        </div>
      </ContactImage>
      <Footer className="contact-footer" />
    </div>

  )
}
export default Contact;