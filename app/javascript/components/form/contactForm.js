import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Contactform = styled.div`
  padding: 20px;
  border: 1px solid red;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  text-transform: capitalize;
  .form-items-wrapper{
    display: flex;
    flex-direction: column;
    height: 320px;
  }
  .field.submit{
    position: relative;
    top: 50px;
    width: 50%;
    margin: 0 auto;
  }
  .field {
    display: flex;
    flex-direction: column;
    height: 70px;
    .submit{
      margin-top: 20px;
      border-radius: 3px;
    }
    input{
      height: 35px;
      border-radius: 5px;
      border: 1px solid red;
    }
    label{
      margin-bottom: 2px;
    }
    textarea {
      min-height: 100px;
      max-height: 200px;
      border-radius: 5px;
      border: 1px solid red;
    }
  }
  .space{
    margin-left: 15px;
  }
  .name-mobile{
    display: flex;
  }
  
`
const contactForm = () => {

  const [contact, setContact] = useState({})

  const handleSubmit = (e) => {
    axios.post('/api/v1/contacts', { contact })
      .catch(err => err);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setContact(Object.assign({}, contact, { [e.target.name]: e.target.value }));
    console.log('contact:', contact)
  }

  return (
    <Contactform>
      <form onSubmit={handleSubmit}>
        <ul className="form-items-wrapper">
          <li className="name-mobile">
            <div className="field">
              <label>name</label>
              <input type="text" name="name" onChange={handleChange} />
            </div>
            <div className="field space">
              <label>mobile number</label>
              <input type="text" name="subject" onChange={handleChange} />
            </div>
          </li>
          <li>
            <div className="field">
              <label>email</label>
              <input type="text" name="email" onChange={handleChange} />
            </div>
          </li>
          <li>
            <div className="field">
              <label>message</label>
              <textarea type="text" name="message" rows="50" cols="30" onChange={handleChange} />
            </div>
          </li>
          <li>
            <div className="field submit">
              <input type="submit" className="submit" />
            </div>
          </li>
        </ul>
      </form>
    </Contactform>
  );
}

export default contactForm
