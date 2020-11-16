import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation/nav'
import ContactForm from './form/contactForm'
import { contactImage } from './imageUrl'
import Footer from './footer'

const ContactWrapper = styled.div`
  .sc-hKgILt.gbjFnV {
    position: relative;
    top: 150px;
  }
`;
const ContactImage = styled.div`
  position: relative;
  top: 150px;
  display: flex;
  justify-content: space-around;
  padding: 0 50px;
  width: 100%;
  
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <Navigation />
      <ContactImage>
        <ContactForm />
        <div className="contact-image-wrapper">
          <img src={contactImage} />
        </div>
      </ContactImage>
      <Footer className="contact-footer" />
    </ContactWrapper>
  )
}
export default Contact;