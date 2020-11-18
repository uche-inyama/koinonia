import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ReactS3 from 'react-s3'
import { aws } from '../keys'


const ProductFormWrapper = styled.div`
  position: relative;
  top: 150px;
`;

const config = {
  bucketName: 'koinoniamaya',
  region: 'us-east-2',
  accessKeyId: aws.AWSAccessKeyId,
  secretAccessKey: aws.AWSSecretKey,
}

const productForm = () => {

  const [product, setProduct] = useState({})
  const handleUpload = (e) => {
    ReactS3.uploadFile(e.target.files[0], config)
      .then((data) => {
        setProduct(Object.assign({}, product, { [e.target.name]: data.location }));
      })
      .catch(err => err)
  }

  const handleChange = (e) => {
    setProduct(Object.assign({}, product, { [e.target.name]: e.target.value }));
  }

  return (
    <ProductFormWrapper >
      <form>
        <div className="field">
          <label>Product's name</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="field">
          <label>Image</label>
          <input type="file" name="image_url" onChange={handleUpload} />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea type="text" name="description" onChange={handleChange} rows="5" column="30" />
        </div>
      </form>
    </ProductFormWrapper>
  )
}
export default productForm;
