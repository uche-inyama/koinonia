import axios from "axios"

export const RECEIVE_NEW_PARTNER = 'RECEIVE_NEW_PARTNER'

export const getCenters = (data) => ({
  type: RECEIVE_NEW_PARTNER,
  post: data.data
})

export const receiveNewPartner = (data) => {
  const url = 'http://localhost:3000/api/v1/partners'
  return dispatch => {
    axios.post('/api/v1/partners', data)
      .then(response => console.log(response))
  }
}


