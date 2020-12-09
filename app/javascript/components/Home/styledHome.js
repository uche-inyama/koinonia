import styled from 'styled-components'
import { heroUrl } from '../imageUrl'
import { advert } from '../imageUrl'


export const HeroSection = styled.div`
  height: 908px;
  background-color:  #7b7d79;
  margin-bottom: 30px;
  padding: 0px;
  .image-wrapper {
    background-image: url(${heroUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  h3, .button {
    font-family: 'Open Sans', sans-serif;
    position: absolute;
    top: 170px;
    left: 100px;
  }
  .button {
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    background-color: #f7dcdc;
    color: red;
    cursor: pointer;
    font-size: 0.9em;
    wdith: 150px;
    top: 220px;
    left: 100px;
    &:hover {
      box-shadow: 0 0 10px 0  grey;
    }
  }

  h3 {
    font-size: 1.4em;
    margin-bottom: 30px;
    color: #fff;
    font-weight: 700;
  }
`;

export const OurEvents = styled.div`
  justify-content: space-around;
  font-family: 'Open Sans', sans-serif;
  .event-title {
    padding: 25px 0;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    h4 {
      padding: 20px;
      border-radius: 5px;
      background-color: #f7dcdc;
      color: red;
      font-size: 0.9em; 
      text-transform: capitalize;
    }
  }
  .event-one {
    display: flex;
    justify-content: space-evenly;
    height: 400px;
    margin-bottom: 20px;
    .event-details{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 600px;
      margin-left: 20px;
      h4 {
        border-bottom: solid 2px red;
        width: 120px;
        padding-bottom: 5px;
        margin-bottom: 10px;
      }
      p {
        line-height: 1.6;
        width: 100%;
        font-family: 'Open Sans', sans-serif;
      }
    }
    .events-image-wrapper {
      border-radius: 10px;
      box-shadow: 0 0 18px 0  #7f8cff, 0 0 15px -5px #505f79;
      margin: 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 400px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const Advert = styled.div`
  height: 350px;
  .advert-image-wrapper {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    background-image: 
    linear-gradient(to right, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.65) 94%,rgba(0,0,0,0.65) 99%,rgba(0,0,0,0) 100%),
    url(${advert});
    .square {
      color: #fff;
      display: flex;
      flex-direction: column;
      font-family: 'Open Sans', sans-serif;
      justify-content: center;
      align-items: center;
      position: relative;
      left: 120px;
      top: 70px;
      border: 6px solid white;
      height: 200px;
      width: 80%;
      opacity: 1;
      h2 {
        text-transform: capitalize;
        color: white;
        font-size: 2em;
        font-weight: 700;
        fontfont-family: 'Open Sans', sans-serif;
        padding: 20px 0;
      }
      span.a{
        border: 2px solid #fff;
        display: inline-block;
        width: 30px;
      }
      span.b{
        border: 2px solid #fff;
        display: inline-block;
        width: 60px;
      }
      p {
        fontfont-family: 'Open Sans', sans-serif;
        margin-top: 20px;
        font-weight: 700;
      }
    }
  }
`