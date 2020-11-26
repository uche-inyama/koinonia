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
  .success {
    background-color: green;
    bottom: 50px;
    font-size: 1.2;
    font-family: 'Open Sans', sans-serif;
    color: white;
    margin-bottom: 10px;
    padding: 5px 10px 5px 30px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    span {
      color: #fff;
      display:inline-block;
      margin-left: 20px;
      width: 20px;
      text-transform: lowercase;
      border: solid 1px gray;
      border-radius: 50%;
      cursor: pointer;
    }
    span:hover {
      background-color: gray;
      color: #fff;
    }
  }
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
    height: 72px;
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
      margin-bottom: 0px;
      font-size: 0.8em;
      height: 0px;
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
  const { register, errors, handleSubmit, formState } = useForm();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false)

  const handleReset = () => {
    Array.from(document.querySelectorAll('.input-field')).forEach(
      input => (input.value = "")
    );
    setContact({})
  }
  const onSubmit = (e) => {
    axios.post('/api/v1/contacts', { contact })
      .then(res => {
        res.status === 200 ? setIsSuccessfullySubmitted(true) :
          setIsSuccessfullySubmitted(false);
      })
      .catch(err => err);
    handleReset();
  }

  const handleChange = (e) => {
    setContact(Object.assign({}, contact, { [e.target.name]: e.target.value }));
  }

  const handleCloseNotification = () => {
    window.location.reload()
  }

  return (
    <Contactform>
      {isSuccessfullySubmitted && (
        <div className="success">Form submitted successfully
          <span onClick={handleCloseNotification}>{'x'}</span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="form-items-wrapper">
          <li className="name-mobile">
            <div className="field">
              <input className="input-field"
                ref={register({ required: true })}
                type="text" name="name" onChange={handleChange}
                placeholder="name"
                disabled={formState.isSubmitting}
              />
              {errors.name && <p>name is required</p>}
            </div>
            <div className="field space">
              <input className="input-field"
                ref={register({ required: true })}
                type="text" name="subject"
                onChange={handleChange}
                placeholder="mobile number"
                disabled={formState.isSubmitting}
              />
              {errors.subject && <p>mobile number is required</p>}
            </div>
          </li>
          <li>
            <div className="field">
              <input className="input-field"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="email"
                disabled={formState.isSubmitting}
              />
              {errors.email && <p>email is required</p>}
            </div>
          </li>
          <li>
            <div className="field">
              <textarea className="input-field"
                ref={register({ required: true })}
                type="text"
                name="message"
                rows="50" cols="30"
                onChange={handleChange}
                placeholder="message"
                disabled={formState.isSubmitting}
              />
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
