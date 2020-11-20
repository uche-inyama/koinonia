import React from 'react'
import Navigation from './Navigation/nav'
import styled from 'styled-components'
import Footer from './footer'

const OurEvents = styled.div`
position: relative;
top: 150px;
justify-content: space-around;
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
      margin: 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 400px;
    }
  }
`;

const News = () => {
  return (
    <div>
      <Navigation />
      <OurEvents>
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
      <Footer />
    </div>
  )
}

export default News
