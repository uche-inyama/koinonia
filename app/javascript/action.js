import axios from "axios"

export const RECEIVE_NEW_PARTNER = 'RECEIVE_NEW_PARTNER'
export const RECEIVE_NEW_PRODUCT = 'RECEIVE_NEW_PRODUCT'
export const REQUEST_PARTNERS = 'REQUEST_PARTNERS'
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const REQUEST_PARTNER = 'REQUEST_PARTNER'
export const RECEIVE_PARTNER = 'RECEIVE_PARTNER'
export const REQUEST_PRODUCT = 'REQUEST_PRODUCT'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'


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

export const receivePartner = (data) => ({
  type: RECEIVE_PARTNER,
  partner: data
})

export const requestPartner = () => ({
  type: REQUEST_PARTNER,
})

export const requestProduct = () => ({
  type: REQUEST_PRODUCT,
})

export const receiveProduct = (data) => ({
  type: RECEIVE_PRODUCT,
  product: data
})

export const receiveNewPartner = (data) => {
  const url = 'http://localhost:3000/api/v1/partners'
  return dispatch => {
    axios.post(url, data)
      .then(response => dispatch(postNewPartner(response.data.data.attributes)))
  }
}

export const receiveNewProduct = (data) => {
  const url = 'http://localhost:3000/api/v1/products'
  return dispatch => {
    axios.post(url, data)
      .then(response => dispatch(postNewProduct(response.data.data.attributes)))
  }
}

export const getPartners = () => {
  const url = 'http://localhost:3000/api/v1/partners'
  return dispatch => {
    axios.get(url)
      .then(response => dispatch(requestPartners(response.data.data)))
  }
}

export const getProducts = () => {
  const url = 'http://localhost:3000/api/v1/products'
  return dispatch => {
    axios.get(url)
      .then(response => dispatch(requestProducts(response.data.data)))

  }
}

export const getPartnerBySlug = (url) => {
  const fullUrl = `http://localhost:3000/${url}`
  return dispatch => {
    dispatch(requestPartner());
    axios.get(fullUrl)
      .then(response => dispatch(receivePartner(response.data)))
  }
}

export const getProduct = (id) => {
  const url = `http://localhost:3000/api/v1/products/${id}`
  return dispatch => {
    dispatch(requestProduct());
    axios.get(url)
      .then(response => dispatch(receiveProduct(response.data.data.attributes)))
  }
}



