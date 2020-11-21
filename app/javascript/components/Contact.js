import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation/nav'
import ContactForm from './form/contactForm'
import { contactImage } from './imageUrl'
import Footer from './footer'

const ContactWrapper = styled.div`
  position: relative;
  top: 150px;
  left: 0px;
`;
const ContactImage = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  .contact-image-wrapper {
    padding-top: 20px;
    img {
      width: 400px;
    }
  }
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
      <div>
        <Footer className="contact-footer" />
      </div>
    </ContactWrapper>
  )
}
export default Contact;