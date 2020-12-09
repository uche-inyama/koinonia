import styled from 'styled-components'

export const AboutWrapper = styled.div`
  position: relative;
  top: 50px;
  main {
    height: 1100px;
  }
  .footer-section {
    margin-top: 40px;
  }
`;

export const HeroSection = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9em;
  line-height: 1.5;
  padding: 30px 50px 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-gap: 30px;
  grid-template-rows: repeat(1, 350px);
  list-style: none;
  margin-top: 100px;
  position: relative;
  .active {
    display: block;
    height: 600px;
    position: absolute;
    z-index: 10;
    width: 50%;
    left: 450px;
    box-shadow: 0 0 10px 0 grey;
    padding: 10px;
    line-height: 1.5
  }
`;
export const ImageWrapper = styled.li`
  border-radius: 20px;
  position: relative;
  z-index: 1;
  img {
    width: 400px;
    height: 350px;
  }
`;

export const Details = styled.li`
  p:nth-child(n+2){
    margin-top: 10px;
  }
  span {
    border-bottom: solid 1px red;
    padding-bottom: 5px;
    width: 63px;
  }
  .vision {
    border: red 1px solid;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-left: 10px;
    width: 100%;
    height: 170px;
    z-index: 20;
    span {
      padding: 15px 0 10px 0px;
      border-bottom: 1px solid red;
      display: block;
      margin-bottom: 5px;
      height: 40px;
      text-transform: capitalize;
      width: 75px;
    }
  }
  strong {
    padding: 5px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const AllDetails = styled.li`
  display: none;
  span {
    border-bottom: solid 2px red;
    padding-bottom: 5px;
  }
  strong {
    padding: 5px;
    font-weight: 700;
    cursor: pointer;
  }
`;
