import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ReactS3 from 'react-s3'
import { aws } from '../keys'
import { receiveNewPartner } from '../../action'

const PartnerFormWrapper = styled.div`
  position: relative;
  top: 300px;
`;

const config = {
  bucketName: 'koinoniamaya',
  region: 'us-east-2',
  accessKeyId: aws.AWSAccessKeyId,
  secretAccessKey: aws.AWSSecretKey,
}

const partnerForm = ({ onSubmitClick }) => {
  const [newPartner, setNewPartner] = useState({})

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmitClick(newPartner)
    setNewPartner({})
  }

  const handleUpload = (e) => {
    ReactS3.uploadFile(e.target.files[0], config)
      .then((data) => {
        setNewPartner(Object.assign({}, newPartner, { [e.target.name]: data.location }));
      })
      .catch(err => err)
  }

  const handleChange = (e) => {
    setNewPartner(Object.assign({}, newPartner, { [e.target.name]: e.target.value }));
  }

  return (
    <PartnerFormWrapper>
      <form onSubmit={handleFormSubmit}>
        <div className="field">
          <label>Enter your Name</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="field">
          <label>Logo</label>
          <input type="file" name="logo_url" onChange={handleUpload} />
        </div>
        <div className="field">
          <input type="hidden" name="slug" onChange={handleChange} />
        </div>
        <input type="submit" />
      </form>
    </PartnerFormWrapper>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onSubmitClick: (newPartner) => {
    dispatch(receiveNewPartner(newPartner))
  },
});

export default connect(null, mapDispatchToProps)(partnerForm);
