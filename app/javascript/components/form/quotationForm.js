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
.success {
  position: relative;
  bottom: 250px;
  left: 300px;
  margin-bottom: 10px;
  text-align: center;
  color: green;
  font-size: 1.2;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
}
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
  const { register, errors, handleSubmit, formState } = useForm();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false)


  const handleReset = () => {
    Array.from(document.querySelectorAll('.input-field')).forEach(
      input => (input.value = "")
    );
    setQuotation({})
    setTimeout(reload(), 8000);
  }

  const reload = () => window.location.reload()

  const onSubmit = (e) => {
    axios.post('/api/v1/quotations', { quotation })
      .then(res => {
        res.status === 200 ? setIsSuccessfullySubmitted(true) :
          setIsSuccessfullySubmitted(false);
      })
      .catch(err => err);
    handleReset();
  }

  const handleChange = (e) => {
    setQuotation(Object.assign({}, quotation, { [e.target.name]: e.target.value }));
  }

  return (
    <Quotation>
      {isSuccessfullySubmitted && (
        <div className="success">Form submitted successfully</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="form-items-wrapper">
          <li className="name-mobile">
            <div className="field">
              <input className="input-field" type="text"
                ref={register({ required: true, maxLength: 20 })}
                name="first_name"
                onChange={handleChange}
                placeholder="First name"
                disabled={formState.isSubmitting}
              />
              {errors.first_name && <p>first name is required</p>}
            </div>
          </li>
          <li>
            <div className="field space">
              <input className="input-field" type="text"
                ref={register({ required: true, maxLength: 20 })}
                name="last_name" onChange={handleChange}
                placeholder="Last name"
                disabled={formState.isSubmitting}
              />
              {errors.last_name && <p>last name is required</p>}
            </div>
          </li>
          <li>
            <div className="field">
              <input className="input-field" type="text"
                ref={register({ required: true, minLength: 6, maxLength: 12 })}
                name="phone" onChange={handleChange}
                placeholder="Phone"
                disabled={formState.isSubmitting}
              />
              {errors.phone && <p>phone number is required</p>}
            </div>
          </li>
          <li>
            <div className="field">
              <input className="input-field" type="text"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                name="email" onChange={handleChange}
                placeholder="Email"
                disabled={formState.isSubmitting}
              />
              {errors.email && <p>email is required</p>}
            </div>
          </li>
          <li>
            <div className="field">
              <input className="input-field" type="text"
                ref={register({ required: true })}
                name="product_list" onChange={handleChange}
                placeholder="Product list"
                disabled={formState.isSubmitting}
              />
              {errors.product_list && <p>product list is required</p>}
            </div>
          </li>
          <li>
            <div className="field">
              <textarea className="input-field" type="text"
                ref={register({ required: true })}
                name="comment" onChange={handleChange}
                rows="5" cols="30"
                placeholder="Comment"
                disabled={formState.isSubmitting}
              />
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
