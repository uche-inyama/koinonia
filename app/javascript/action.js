import axios from "axios"

export const RECEIVE_NEW_PARTNER = 'RECEIVE_NEW_PARTNER'
export const RECEIVE_NEW_PRODUCT = 'RECEIVE_NEW_PRODUCT'
export const REQUEST_PARTNERS = 'REQUEST_PARTNERS'
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const REQUEST_PARTNER = 'REQUEST_PARTNER'
export const RECEIVE_PARTNER = 'RECEIVE_PARTNER'


export const postNewPartner = (data) => ({
  type: RECEIVE_NEW_PARTNER,
  post: data
})

export const postNewProduct = (data) => ({
  type: RECEIVE_NEW_PRODUCT,
  post: data
})


export const requestPartners = () => ({
  type: REQUEST_PARTNERS,
})

export const receivePartners = (data) => ({
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


export const receiveNewPartner = (data) => {
  const url = 'https://still-tor-28457.herokuapp.com/v1/partners'
  return dispatch => {
    axios.post(url, data)
      .then(response => dispatch(postNewPartner(response.data.data.attributes)))
  }
}

export const receiveNewProduct = (data) => {
  const url = 'https://still-tor-28457.herokuapp.com/v1/products'
  return dispatch => {
    axios.post(url, data)
      .then(response => dispatch(postNewProduct(response.data.data.attributes)))
  }
}

export const getPartners = () => {
  const url = 'https://still-tor-28457.herokuapp.com/v1/partners'
  return dispatch => {
    dispatch(requestPartners());
    return axios.get(url)
      .then(response => dispatch(receivePartners(response.data.data)))

  }
}

export const getProducts = () => {
  const url = 'https://still-tor-28457.herokuapp.com/v1/products'
  return dispatch => {
    axios.get(url)
      .then(response => dispatch(requestProducts(response.data.data)))

  }
}

export const getPartnerBySlug = (url) => {
  const fullUrl = `http://localhost:3000/${url}`
  return dispatch => {
    dispatch(requestPartner());
    return axios
      .get(fullUrl)
      .then(response => dispatch(receivePartner(response.data)))
    // .then(response => console.log(response.data))
  }
}



