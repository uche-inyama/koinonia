import React, { Fragment } from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'
import {
  imgUrl1, imgUrl2, imgUrl3,
  imgUrl4, imgUrl5, imgUrl6,
  imgUrl7, imgUrl8, imgUrl9,
  imgUrl10
} from './imageUrl'

const ImageWrapper = styled.div`
  background-repeat: no-repeat;
  background-position: 0px;
  background-size: cover;
  width: 300px;
  height: 250px;
`

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap:5px;
`
const Card = styled.div`
  border: solid black 1px;
`
const Vendors = () => {
  return (
    <Fragment>
      <Navigation />
      <section>
        <h2>JPT</h2>
        <p>JPT is the first manufacturer of commercial Pulse width adjustable- high power fiber lasers (MOPA fiber lasers) and provider of leading photoelectric precision inspection and laser processing intelligent equipment in China.
        Qualified supplier of ZTE, Huawei, Nokia, TE Connectivity, etc…</p>
        <CardList>
          <Card>
            <ImageWrapper style={{ backgroundImage: 'url("' + imgUrl1 + '")' }} />
            <h4>Passive Components (Indoor)</h4>
          </Card>
          <Card>
            <ImageWrapper style={{ backgroundImage: 'url("' + imgUrl2 + '")' }} />
            <h4>Passive Components (Outdoor)</h4>
          </Card>
          <Card>
            <ImageWrapper style={{ backgroundImage: 'url("' + imgUrl3 + '")' }} />
            <h4>Passive Components (Outdoor)</h4>
          </Card>
          <Card>
            <ImageWrapper style={{ backgroundImage: 'url("' + imgUrl4 + '")' }} />
            <h4>Passive Components (Outdoor)</h4>
          </Card>
          {/* <Card>
            <ImageWrapper style={{ backgroundImage: 'url("' + imgUrl5 + '")' }} />
            <h4>Passive Components (Indoor)</h4>
          </Card>
          <Card>
            <ImageWrapper style={{ backgroundImage: 'url("' + imgUrl6 + '")' }} />
            <h4>Passive Components (Outdoor)</h4>
          </Card>
          <Card>
            <ImageWrapper style={{ backgroundImage: 'url("' + imgUrl7 + '")' }} />
            <h4>Passive Components (Outdoor)</h4>
          </Card>
          <Card>
            <ImageWrapper style={{ backgroundImage: 'url("' + imgUrl8 + '")' }} />
            <h4>Passive Components (Outdoor)</h4>
          </Card>
          <Card>
            <ImageWrapper style={{ backgroundImage: 'url("' + imgUrl9 + '")' }} />
            <h4>Passive Components (Outdoor)</h4>
          </Card>
          <Card>
            <ImageWrapper style={{ backgroundImage: 'url("' + imgUrl10 + '")' }} />
            <h4>Passive Components (Outdoor)</h4>
          </Card> */}
        </CardList>
      </section >
    </Fragment >
  )
}
export default Vendors;