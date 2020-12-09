import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Quotation } from './styledQuotationForm'

const quotationForm = () => {

  const [quotation, setQuotation] = useState({});
  const { register, errors, handleSubmit, formState } = useForm();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false)


  const handleReset = () => {
    const form = document.querySelector('form');
    Array.from(document.querySelectorAll('.input-field')).forEach(
      input => (input.value = "")
    );
    form.style.display = 'none'
    setQuotation({})
  }

  const reload = () => {
    window.location.reload()
  }

  const handleCloseNotification = () => {
    window.location.reload()
  }

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
        <div className="success">Form submitted successfully
          <span onClick={handleCloseNotification}>{'x'}</span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="form-items-wrapper">
          <li className="name-mobile">
            <div className="field">
              <input className="input-field" type="text"
                ref={register({ required: true })}
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
                ref={register({ required: true })}
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
                ref={register({ required: true })}
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
