import axios from "axios"

export const RECEIVE_NEW_PARTNER = 'RECEIVE_NEW_PARTNER'
export const RECEIVE_NEW_PRODUCT = 'RECEIVE_NEW_PRODUCT'
export const REQUEST_PARTNERS = 'REQUEST_PARTNERS'
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'


export const postNewPartner = (data) => ({
  type: RECEIVE_NEW_PARTNER,
  post: data
})

export const postNewProduct = (data) => ({
  type: RECEIVE_NEW_PRODUCT,
  post: data
})


export const requestPartners = (data) => ({
  type: REQUEST_PARTNERS,
  partners: data
})


export const requestProducts = (data) => ({
  type: REQUEST_PRODUCTS,
  products: data
})


export const receiveNewPartner = (data) => {
  const url = '/api/v1/partners'
  return dispatch => {
    axios.post(url, data)
      .then(response => dispatch(postNewPartner(response.data.data.attributes)))
  }
}

export const receiveNewProduct = (data) => {
  const url = '/api/v1/products'
  return dispatch => {
    axios.post(url, data)
      .then(response => console.log(response.data.data.attributes))
    // .then(response => dispatch(postNewProduct(response.data.data.attributes)))
  }
}

export const getPartners = () => {
  const url = '/api/v1/partners'
  return dispatch => {
    axios.get(url)
      // .then(response => console.log(response.data.data))
      .then(response => dispatch(requestPartners(response.data.data[0].attributes)))
  }
}

export const getProducts = () => {
  const url = '/api/v1/products'
  return dispatch => {
    axios.get(url)
      // .then(response => console.log(response.data.data))
      .then(response => dispatch(requestProducts(response.data.data)))
  }
}



