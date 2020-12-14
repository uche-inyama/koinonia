import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Clients = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: cover;
    box-shadow: 0 0 5px 0  grey, 0 0 5px -5px #505f79;
    border-radius: 5px;
    margin-top: 20px;
    text-align: center;
    width: 170px;
    height: 150px;
    .client {
      width: 80px;
    }
    .One.Expert {
      height: 256px;
    }
  }
`

const Slide = ({ content, slug }) => {
  if (slug) {
    return (
      <Clients>
        <li className="image-wrapper">
          <Link to={`/products/${slug}/${content.id}`}>
            <img className={`${content.attributes.name} product`} src={`${content.attributes.image_url}`} />
          </Link>
        </li>
      </Clients>
    )
  } else {
    return (
      <Clients>
        <li className="image-wrapper">
          <img className="client product" src={`${content}`} />
        </li>
      </Clients>
    )
  }
}

export default Slide;

