import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navigation from './Navigation/nav'
import Footer from './footer'
import { heroUrl } from './imageUrl'
import { advert } from './imageUrl'
import QuotationForm from './form/quotationForm'


const Main = styled.main`
position: absolute;
width: 100%;
top: -50px;
height: 250vh;
`;
const HeroSection = styled.div`
  height: 908px;
  background-color:  #7b7d79;
  margin-bottom: 30px;
  padding: 0px;
  .image-wrapper {
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
    // border: solid 0.8px red;
    border-radius: 5px;
    background-color: #f7dcdc;
    color: red;
    cursor: pointer;
    font-size: 0.9em;
    wdith: 150px;
    top: 220px;
    left: 100px;
  }

  h3 {
    font-size: 1.4em;
    margin-bottom: 30px;
    color: #fff;
    font-weight: 700;
  }
 
`; <label>comment</label>


const OurEvents = styled.div`
justify-content: space-around;
// padding: 20px 20px 20px 100px;
height: 1000px;
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
      margin-left: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 400px;
    }              <label>comment</label>

  }
`;

const Advert = styled.div`
  height: 500px;
  .advert-image-wrapper {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    .square {
      color: #fff;
      display: flex;
      flex-direction: column;
      font-family: 'Open Sans', sans-serif;
      justify-content: center;
      align-items: center;
      position: relative;
      left: 120px;
      top: 50px;
      border: 6px solid white;
      height: 350px;
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

const Home = () => {

  const handleSubmit = () => {
    const form = document.querySelector('form');
    form.style.display = 'block'
    console.log('submit a quote')
  }
  return (
    <div>
      <Navigation />
      <Main>
        <HeroSection>
          <QuotationForm />
          <div className="image-wrapper" style={{ backgroundImage: 'url("' + heroUrl + '")' }}>
            <h3>It's all about Networks</h3>
            <div className="button" onClick={handleSubmit}>Request a Quote</div>
          </div>
        </HeroSection>
        <OurEvents>
          <div className="event-title"><h4>our events</h4></div>
          <div className="event-one">
            <div className="events-image-wrapper" >
              <img src='https://koinoniamaya.s3.us-east-2.amazonaws.com/2018-Logo-01-300x272-1.png'></img>
            </div>
            <div className="event-details">
              <h4>ICT 2018</h4>
              <p>
                Cairo ICT is an international exhibition and conference for information
                and communication technology and a meeting place for amateurs and professionals
                alike in the IT business field. The event will cover the fields of telecom, Information
                Technology, Electronics, integrated systems, Satellite and Broadcasting, Hardware
                and software, security, internet and related sectors.
                </p>
            </div>
          </div>
          <div className="event-one">
            <div className="event-details">
              <h4>ICT 2019</h4>
              <p>
                Cairo ICT is an international exhibition and conference for information
                and communication technology and a meeting place for amateurs and professionals
                alike in the IT business field. The event will cover the fields of telecom, Information
                Technology, Electronics, integrated systems, Satellite and Broadcasting, Hardware
                and software, security, internet and related sectors.
                </p>
            </div>
            <div className="events-image-wrapper" >
              <img src='https://koinoniamaya.s3.us-east-2.amazonaws.com/ICT_2019_Logo-01-300x266.png'></img>
            </div>
          </div>
        </OurEvents>
        <Advert>
          <div className="advert-image-wrapper" style={{ backgroundImage: 'url("' + advert + '")' }}>
            <div className="square">
              <h2>The Best from around the world</h2>
              <div className="line"><span className="a"></span> <span className="b"></span></div>
              <p>We believe that our customers deserve the best, so koinomis brings you the best from the world</p>
            </div>
          </div>
        </Advert>
        <Footer />
      </Main>
    </div>
  )
}
export default Home;