import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = styled.div`
  display: grid;
  font-family: 'Open Sans', sans-serif;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
  grid-gap: 20px;
  margin-top: 20px;
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
  justify-content: flex-start;
  padding-left: 40px;
  width: 100%;
  list-style: none;
  li {
    margin-left: 10px;
    pdding: 5px;
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
    margin-top: 2px;
    padding: 2px 0 0 2px;
    div {
      display: flex;
    }
    p {
      margin-left: 10px;
    }
    svg {
      color: red;
      font-size: 1.2em;
    }
  }
`;

const SocialMediaWrapper = styled.div`
  margin-top: 20px;
  h4 {
    padding: 10px;
    font-size: 0.9em;
    font-weight: 700;
    text-transform: capitalize;
  }
`;

const ContactWrapper = styled.div`
  h4 {
    padding: 10px;
    font-size: 0.9em;
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
            <li>
              <div>
                <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                <p>12 Dr. Mazhar Ashour, El Nozha Cairo,<br /> Egypt.</p>
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={['fas', 'phone-square-alt']} />
                <p>20226226760 - 201118199932 - <br />201060900959 </p>
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
            <li>
              <div>
                <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                <p>36/65 Marigold st, Revesby, NSW 2212,<br /> Australia. </p>
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={['fas', 'phone-square-alt']} />
                <p>6102 8003 3339</p>
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