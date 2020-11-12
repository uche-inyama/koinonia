import React, { Fragment } from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'
import {
  imgUrl1, imgUrl2, imgUrl3,
  imgUrl4, imgUrl5, imgUrl6,
  imgUrl7, imgUrl8, imgUrl9,
  imgUrl10
} from './imageUrl'

const ImageWrapperFirst = styled.div`
  background-repeat: no-repeat;
  background-position: 0px;
  background-size: cover;
  width: 100%;
  height: 550px;
`

const ImageWrapper = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 550px;
`

const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap:10px;
  text-align: center;

`
const Card = styled.div`
  border: solid black 1px;
`

const VendorSection = styled.div`
  padding: 0 20px;
  h2 {
    text-align: center;
    font-size: 2em;
    weight: 700;
    padding: 50px 0;
  }
  .description {
    font-size: 1.4em;
    height: 150px;
    line-height: 1.4;
  }
`
const Vendors = () => {
  return (
    <Fragment>
      <Navigation />
      <VendorSection>
        <h2 className="header">JPT</h2>
        <p className="description">JPT is the first manufacturer of commercial Pulse width adjustable- high power fiber lasers (MOPA fiber lasers) and provider of leading photoelectric precision inspection and laser processing intelligent equipment in China.
        Qualified supplier of ZTE, Huawei, Nokia, TE Connectivity, etc…</p>
        <CardList>
          <Card>
            <ImageWrapperFirst className="first" style={{ backgroundImage: 'url("' + imgUrl1 + '")' }} />
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
        </CardList>
      </VendorSection >
    </Fragment >
  )
}
export default Vendors;