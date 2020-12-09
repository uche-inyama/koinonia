import styled from 'styled-components'

export const Footer = styled.div`
  display: grid;
  font-family: 'Open Sans', sans-serif;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
  grid-gap: 20px;
  margin-top: 20px;
  padding: 40px;
  .footer-wrapper {
    box-shadow: 0 0 10px 0  grey, 0 0 15px -5px #505f79;
    border-radius: 5px;
    li {
      font-size: 1em;
    }
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 40%;
  padding-left: 0px;
  list-style: none;
  a {
    margin-left: 10px;
    color: red;
    text-decoration: none;
    cursor: pointer;
    svg {
      font-size: 1.2em;
    }
  }
`;

export const Contact = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
font-size: 0.9em;
padding-left: 10px;
  li {
    margin-top: 2px;
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

export const SocialMediaWrapper = styled.div`
  h3 {
    padding: 10px;
    font-size: 0.9em;
    font-weight: 700;
    text-transform: capitalize;
  }
`;

export const ContactWrapper = styled.div`
  h3 {
    padding: 10px;
    font-size: 0.9em;
    font-weight: 700;
    text-transform: capitalize;
  }
`