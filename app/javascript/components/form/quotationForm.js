import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const Quotation = styled.div`
position: absolute;
top: 180px;
width: 100%;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Open Sans', sans-serif;
ul {
  list-style:none;
  padding-left: 0px;
}
form {
  border-radius: 5px;
  box-shadow: 0 0 10px 0  grey, 0 0 10px -5px #505f79;
  border-radius: 5px;
  background-color: #fff;
  display: none;
  padding: 10px;
  .field {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 320px;
    height: 40px;
  }
  li{
    padding: 8px;
  }
  label{
    color: #fff;
    font-size: 1.4em;
    font-weight: 600;
    text-transform: capitalize;
    padding: 4px 0;
  }
  .field.submit{
    padding: 10px 0;
  }
}

`;
const quotationForm = () => {

  const [quotation, setQuotation] = useState({});


  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/v1/quotations', { quotation })
      .catch(err => err)
  }

  const handleChange = (e) => {
    setQuotation(Object.assign({}, quotation, { [e.target.name]: e.target.value }));
  }

  return (
    <Quotation>
      <form onSubmit={handleFormSubmit}>
        <ul className="form-items-wrapper">
          <li className="name-mobile">
            <div className="field">
              <input type="text" name="first_name" onChange={handleChange} placeholder="First name" />
            </div>
          </li>
          <li>
            <div className="field space">
              <input type="text" name="last_name" onChange={handleChange} placeholder="Last name" />
            </div>
          </li>
          <li>
            <div className="field">
              <input type="text" name="phone" onChange={handleChange} placeholder="Phone" />
            </div>
          </li>
          <li>
            <div className="field">
              <input type="text" name="email" onChange={handleChange} placeholder="Email" />
            </div>
          </li>
          <li>
            <div className="field">
              <input type="text" name="product_list" onChange={handleChange} placeholder="Product list" />
            </div>
          </li>
          <li>
            <div className="field">
              <textarea type="text" name="comment" onChange={handleChange} rows="5" cols="30" placeholder="Comment" />
            </div>
          </li>
          <li>
            <div className="field submit">
              <input type="submit" className="submit" />
            </div>
          </li>
        </ul>
      </form>
    </Quotation>
  )
}

export default quotationForm
