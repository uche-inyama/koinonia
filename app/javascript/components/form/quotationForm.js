import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
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
    p {
      color: red;
      font-size: 0.8em;
    }
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
  const { register, errors, handleSubmit } = useForm();


  const formDisplay = () => {
    const form = document.querySelector('form');
    form.style.display = 'none'
  }

  const onSubmit = (e) => {
    axios.post('/api/v1/quotations', { quotation })
      .catch(err => err)
  }

  const handleChange = (e) => {
    setQuotation(Object.assign({}, quotation, { [e.target.name]: e.target.value }));
  }

  return (
    <Quotation>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="form-items-wrapper">
          <li className="name-mobile">
            <div className="field">
              <input type="text" ref={register({ required: true, maxLength: 20 })} name="first_name" onChange={handleChange} placeholder="First name" />
              {errors.first_name && <p>first name is required</p>}
            </div>
          </li>
          <li>
            <div className="field space">
              <input type="text" ref={register({ required: true, maxLength: 20 })} name="last_name" onChange={handleChange} placeholder="Last name" />
              {errors.last_name && <p>last name is required</p>}
            </div>
          </li>
          <li>
            <div className="field">
              <input type="text" ref={register({ required: true, minLength: 6, maxLength: 12 })} name="phone" onChange={handleChange} placeholder="Phone" />
              {errors.phone && <p>phone number is required</p>}
            </div>
          </li>
          <li>
            <div className="field">
              <input type="text" ref={register({ required: true, pattern: /^\S+@\S+$/i })} name="email" onChange={handleChange} placeholder="Email" />
              {errors.email && <p>email is required</p>}
            </div>
          </li>
          <li>
            <div className="field">
              <input type="text" ref={register({ required: true })} name="product_list" onChange={handleChange} placeholder="Product list" />
              {errors.product_list && <p>product list is required</p>}
            </div>
          </li>
          <li>
            <div className="field">
              <textarea type="text" ref={register({ required: true })} name="comment" onChange={handleChange} rows="5" cols="30" placeholder="Comment" />
              {errors.comment && <p>comment is required</p>}
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
