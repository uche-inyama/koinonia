import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Map from '../map'
import { Footer, SocialMedia, Contact, SocialMediaWrapper, ContactWrapper } from './styledFooter'


const footer = () => {
  return (
    <Footer>
      <div className='footer-wrapper'>
        <ContactWrapper>
          <h3>egypt office</h3>
          <Contact>
            <li>
              <div>
                <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                <p>12 Dr. Mazhar Ashour, El Nozha Cairo, Egypt.</p>
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={['fas', 'phone-square-alt']} />
                <p>+20226226760 - +201118199932 - +201060900959 </p>
              </div>
            </li> <li>
              <div>
                <FontAwesomeIcon icon={['fas', 'envelope']} />
                <p>sales@koinonia-egypt.com</p>
              </div>
            </li>
          </Contact>
        </ContactWrapper>
        <SocialMediaWrapper>
          <h3>Follow Us</h3>
          <SocialMedia>
            <a href="https://www.facebook.com/KoinoniaEnterprises" target="_blank">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a href="https://www.linkedin.com/company/koinonia-enterprises-pty-ltd" target="_blank">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a href="https://www.youtube.com/channel/UCQZdm7RzpE9Kp80aFgraVpw" target="_blank">
              <FontAwesomeIcon icon={['fab', 'youtube']} />
            </a>
          </SocialMedia>
        </SocialMediaWrapper>
      </div>
      <div className='footer-wrapper map'>
        <Map />
      </div>
      <div className='footer-wrapper'>
        <ContactWrapper>
          <h3>Australia Office</h3>
          <Contact>
            <li>
              <div>
                <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                <p>36/65 Marigold st, Revesby, NSW 2212,<br /> Australia. </p>
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={['fas', 'phone-square-alt']} />
                <p>+6102 8003 3339</p>
              </div>
            </li> <li>
              <div>
                <FontAwesomeIcon icon={['fas', 'envelope']} />
                <p>sales@koinoniaenterprises.com.au</p>
              </div>
            </li>
          </Contact>
        </ContactWrapper>
        <SocialMediaWrapper>
          <h3>Follow Us</h3>
          <SocialMedia>
            <a href="https://www.facebook.com/KoinoniaEnterprises" target="_blank">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a href="https://www.linkedin.com/company/koinonia-enterprises-pty-ltd" target="_blank">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a href="https://www.youtube.com/channel/UCQZdm7RzpE9Kp80aFgraVpw" target="_blank">
              <FontAwesomeIcon icon={['fab', 'youtube']} />
            </a>
          </SocialMedia>
        </SocialMediaWrapper>
      </div>
    </Footer>
  )
}

export default footer;