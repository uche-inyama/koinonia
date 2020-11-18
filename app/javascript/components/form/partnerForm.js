import React, { useState } from 'react'
import styled from 'styled-components'
import ReactS3 from 'react-s3'
import { aws } from '../keys'


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

const partnerForm = () => {
  const [partner, setPartner] = useState({})

  const handleFormSubmit = (e) => {
    console.log(e)
  }

  const handleUpload = (e) => {
    ReactS3.uploadFile(e.target.files[0], config)
      .then((data) => {
        setPartner(Object.assign({}, partner, { [e.target.name]: data.location }));
      })
      .catch(err => err)
  }

  const handleChange = (e) => {
    setPartner(Object.assign({}, partner, { [e.target.name]: e.target.value }));
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
        <input type="submit" />
      </form>
    </PartnerFormWrapper>
  )
}
export default partnerForm;
