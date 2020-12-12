import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ReactS3 from 'react-s3'
import axios from 'axios'
import { receiveNewProduct } from '../../action'


const ProductFormWrapper = styled.div`
  position: relative;
  top: 150px;
`;

const config = {
  bucketName: 'koinoniamaya',
  region: 'us-east-2',
  accessKeyId: process.env.REACT_APP_AWSAccessKeyId,
  secretAccessKey: process.env.REACT_APP_AWSSecretKey
}

const productForm = ({ onSubmitProductForm }) => {

  const [newProduct, setNewProduct] = useState({})
  const cloudName = 'ddcakt97r'
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`

  const handleUpload = (e) => {
    ReactS3.uploadFile(e.target.files[0], config)
      .then((data) => {
        setNewProduct(Object.assign({}, newProduct, { [e.target.name]: data.location }));
      })
      .catch(err => err)
  }


  const imageSubmit = (e) => {
    const cloudName = 'ddcakt97r'
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`
    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData();
    formData.append('file', files[0])
    formData.append('upload_preset', 'koinonia')
    axios.post(url, formData)
      .then(response => {
        setNewProduct(Object.assign({}, newProduct, { [e.target.name]: response.data.secure_url }));
      })
  }

  const handleChange = (e) => {
    setNewProduct(Object.assign({}, newProduct, { [e.target.name]: e.target.value }));
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmitProductForm(newProduct)
    setNewProduct({})
  }

  return (
    <ProductFormWrapper >
      <form onSubmit={handleFormSubmit}>
        <div className="field">
          <label>Product's name</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="field">
          <label>Image</label>
          <input type="file" name="image_url" onChange={imageSubmit} />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea type="text" name="description" onChange={handleChange} rows="5" column="30" />
        </div>
        <div className="field">
          <input type="number" name="partner_id" onChange={handleChange} />
        </div>
        <input type="submit" />
      </form>
    </ProductFormWrapper>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onSubmitProductForm: (newProduct) => {
    dispatch(receiveNewProduct(newProduct))
  }
});

export default connect(null, mapDispatchToProps)(productForm);
