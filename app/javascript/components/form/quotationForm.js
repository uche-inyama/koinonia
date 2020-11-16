import React from 'react'
import styled from 'styled-components'

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
}
form {
  display: none;
  padding: 10px;
  border: solid 1px red;
  border-radius: 5px;
  .field {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 320px;
    height: 40px;
    border-radius: 5px;
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('quote submitted');
  }
  return (
    <Quotation>
      <form onSubmit={handleFormSubmit}>
        <ul className="form-items-wrapper">
          <li className="name-mobile">
            <div className="field">
              <input type="text" name="first_name:" placeholder="First name" />
            </div>
          </li>
          <li>
            <div className="field space">
              <input type="text" name="last_name" placeholder="Last name" />
            </div>
          </li>
          <li>
            <div className="field">
              <input type="text" name="phone" placeholder="Phone" />
            </div>
          </li>
          <li>
            <div className="field">
              <input type="text" name="email" placeholder="Email" />
            </div>
          </li>
          <li>
            <div className="field">
              <input type="text" name="product_list" placeholder="Product list" />
            </div>
          </li>
          <li>
            <div className="field">
              <textarea type="text" name="comment" rows="5" cols="30" placeholder="Comment" />
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
