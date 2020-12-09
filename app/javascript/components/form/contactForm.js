import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Contactform } from './styledContactForm'


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
