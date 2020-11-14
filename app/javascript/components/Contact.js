import React, { Fragment } from 'react'
import Navigation from './Navigation/nav'
import ContactForm from './form/contactForm'


const Contact = () => {
  return (
    <Fragment>
      <Navigation />
      <ContactForm />
      <div>Contact</div>
    </Fragment>
  )
}
export default Contact;