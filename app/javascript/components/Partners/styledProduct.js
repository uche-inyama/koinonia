import styled from 'styled-components'

export const ProductWrapper = styled.div`
  position: relative;
  top: 150px;
  .footer-section {
    margin-top: 40px;
  }
`;

export const PartnerLogoName = styled.div`
  margin-bottom: 40px;
  ul {
    display: flex;
    padding-right: 50px;
  }
  .partner-profile {
    display: grid;
    grid-template-columns: 2fr 5fr;
    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .profile {
      fontfont-family: 'Open Sans', sans-serif;
      .description {
        line-height: 1.4;
      }
      .name {
        height: 40px;
        font-size: 1.2em;
        padding: 10px 0;
        font-size: 1.2em;
        border-bottom: 3px solid red;
        width: 150px;
        margin-bottom: 10px;
        margin-left: 20px;
      }
    }
  }
`;

export const ProductItem = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 400px;
  grid-gap: 50px;
  justify-content: center;
  padding: 0 20px;
  list-style: none;
  a {
    box-shadow: 0 0 5px 0  grey, 0 0 5px -5px #505f79;
    border-radius: 5px;
  }
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    display: flex;
    align-items: center;
  }
  
  .description{
   fontfont-family: 'Open Sans', sans-serif;
   text-align: center;
   line-height: 1.2
  }
  .name {
    color: #000;
    height: 50px;
    font-size: 1.2em;
    text-align: center;
  }

  @media(min-width: 1024px){
    grid-template-columns: repeat(3, 1fr);
  }
`