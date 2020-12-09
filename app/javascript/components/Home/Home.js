import React, { useState } from 'react'
import Navigation from '../Navigation/nav'
import Footer from '../Footer/footer'
import { heroUrl } from '../imageUrl'
import { advert } from '../imageUrl'
import QuotationForm from '../form/quotationForm'
import { HeroSection, OurEvents, Advert } from './styledHome'

const Home = (props) => {

  const [isOpen, setOpen] = useState(false)
  const handleSubmit = () => {
    const form = document.querySelector('form');
    if (!isOpen) {
      form.style.display = 'block'
      setOpen(true)
    } else {
      form.style.display = 'none'
      setOpen(false)
    }
  }
  return (
    <div>
      <Navigation {...props} />
      <main>
        <HeroSection>
          <QuotationForm />
          <div className="image-wrapper">
            <h3>It's all about Networks</h3>
            <div className="button" onClick={handleSubmit}>Request a Quote</div>
          </div>
        </HeroSection>
        <OurEvents>
          <div className="event-title"><h4>our events</h4></div>
          <div className="event-one">
            <div className="events-image-wrapper" >
              <img src='https://koinoniamaya.s3.us-east-2.amazonaws.com/eventCairo.jpg'></img>
            </div>
            <div className="event-details">
              <h4>ICT 2020</h4>
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
          <div className="advert-image-wrapper">
            <div className="square">
              <h2>The Best from around the world</h2>
              <div className="line"><span className="a"></span> <span className="b"></span></div>
              <p>We believe that our customers deserve the best, so koinonia brings you the best from the world</p>
            </div>
          </div>
        </Advert>
        <Footer />
      </main>
    </div>
  )
}
export default Home;