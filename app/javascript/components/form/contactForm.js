import React, { useState } from 'react'
import axios from 'axios'
const contactForm = () => {

  const [contact, setContact] = useState({})

  const handleSubmit = (e) => {
    console.log(e.target);
    axios.post('/api/v1/contacts', { contact })
      .catch(err => err);
  }

  const handleChange = (e) => {
    setContact(Object.assign({}, contact, { [e.target.name]: e.target.value }));
    console.log('contact:', contact)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input type="text" name="name" onChange={handleChange} placeholder="name" />
        </div>
        <div className="field">
          <input type="text" name="email" onChange={handleChange} placeholder="email" />
        </div>
        <div className="field">
          <input type="text" name="subject" onChange={handleChange} placeholder="subject" />
        </div>
        <div className="field">
          <input type="text" name="message" onChange={handleChange} placeholder="message" />
        </div>
        <div className="field">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default contactForm
