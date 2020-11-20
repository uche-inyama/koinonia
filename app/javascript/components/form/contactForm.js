import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Contactform = styled.div`
  padding: 20px;
  border: 1px solid grey;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  text-transform: capitalize;
  .form-items-wrapper{
    display: flex;
    flex-direction: column;
    height: 320px;
    list-style: none;
    padding-left: 0px;
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
    font-size: 0.8em;
    .submit{
      margin-top: 20px;
      border-radius: 3px;
    }
    input{
      height: 35px;
      border-radius: 5px;
      border: 1px solid grey;
    }
    p {
      color: red;
    }
    label{
      margin-bottom: 2px;
    }
    textarea {
      min-height: 100px;
      max-height: 200px;
      border-radius: 5px;
      border: 1px solid gray;
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
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (e) => {
    axios.post('/api/v1/contacts', { contact })
      .catch(err => err);
  }

  const handleChange = (e) => {
    setContact(Object.assign({}, contact, { [e.target.name]: e.target.value }));
  }

  return (
    <Contactform>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="form-items-wrapper">
          <li className="name-mobile">
            <div className="field">
              <label>name</label>
              <input className="input-field" ref={register({ required: true, maxLength: 20 })} type="text" name="name" onChange={handleChange} />
              {errors.name && <p>name is required</p>}
            </div>
            <div className="field space">
              <label>mobile number</label>
              <input className="input-field" ref={register({ required: true, minLength: 6, maxLength: 12 })} type="text" name="subject" onChange={handleChange} />
              {errors.subject && <p>mobile number is required</p>}
            </div>
          </li>
          <li>
            <div className="field">
              <label>email</label>
              <input className="input-field" ref={register({ required: true, pattern: /^\S+@\S+$/i })} type="text" name="email" onChange={handleChange} />
              {errors.email && <p>email is required</p>}
            </div>
          </li>
          <li>
            <div className="field">
              <label>message</label>
              <textarea className="input-field" ref={register({ required: true })} type="text" name="message" rows="50" cols="30" onChange={handleChange} />
              {errors.message && <p>message is required</p>}
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

const mapDispatchToProps = (dispatch) => ({
  onSubmitClick: (newPartner) => {
    dispatch(receiveNewPartner(newPartner))
  },
});

export default connect(null, mapDispatchToProps)(contactForm)
