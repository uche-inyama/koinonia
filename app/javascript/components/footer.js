import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = styled.div`
  display: grid;
  font-family: 'Open Sans', sans-serif;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
  grid-gap: 20px;
  margin-top: 30px;
  padding: 40px;
  div {
    background-color: #b3b3ad;
    li {
      font-size: 1em;
    }
  }
`;

const SocialMedia = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  width: 40%;
  li {
    color: red;
    svg {
      font-size: 1.2em;
    }
  }
`;

const Contact = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
font-size: 0.9em;
  li {
    margin-top: 15px;
    padding: 5px 0 0 15px;
    svg {
      color: red;
      font-size: 1.2em;
    }
    span {
      display: inline-block;
      padding-left: 20px;
    }
  }
`;

const SocialMediaWrapper = styled.div`
  margin-top: 20px;
  h4 {
    padding: 15px;
    margin-bottom: 5px;
    font-weight: 700;
    text-transform: capitalize;
  }
`;

const ContactWrapper = styled.div`
  h4 {
    padding: 15px;
    font-weight: 700;
    text-transform: capitalize;
  }
`

const footer = () => {
  return (
    <Footer>
      <div>
        <ContactWrapper>
          <h4>egypt office</h4>
          <Contact>
            <li><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /><span>12 Dr. Mazhar Ashour, El Nozha Cairo, Egypt</span></li>
            <li><FontAwesomeIcon icon={['fas', 'phone-square-alt']} /><span>20226226760 - 201118199932 - 201060900959 </span></li>
            <li><FontAwesomeIcon icon={['fas', 'envelope']} /><span>sales@koinonia-egypt.com</span></li>
          </Contact>
        </ContactWrapper>
        <SocialMediaWrapper>
          <h4>Follow Us</h4>
          <SocialMedia>
            <li><FontAwesomeIcon icon={['fab', 'facebook-f']} /></li>
            <li><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></li>
            <li><FontAwesomeIcon icon={['fab', 'youtube']} /></li>
          </SocialMedia>
        </SocialMediaWrapper>
      </div>
      <div></div>
      <div>
        <ContactWrapper>
          <h4>Australia Office</h4>
          <Contact>
            <li><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /><span>36/65 Marigold st, Revesby, NSW 2212, Australia</span></li>
            <li><FontAwesomeIcon icon={['fas', 'phone-square-alt']} /><span>6102 8003 3339</span></li>
            <li><FontAwesomeIcon icon={['fas', 'envelope']} /><span>sales@koinoniaenterprises.com.au</span></li>
          </Contact>
        </ContactWrapper>
        <SocialMediaWrapper>
          <h4>Follow Us</h4>
          <SocialMedia>
            <li><FontAwesomeIcon icon={['fab', 'facebook-f']} /></li>
            <li><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></li>
            <li><FontAwesomeIcon icon={['fab', 'youtube']} /></li>
          </SocialMedia>
        </SocialMediaWrapper>
      </div>
    </Footer>
  )
}

export default footer;