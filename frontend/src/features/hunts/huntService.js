import axios from 'axios'

const API_URL = '/api/hunts'

// Create new hunt
const createHunt = async (huntData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, huntData, config)

  return response.data
}

// Get user hunts
const getHunts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user hunt
const deleteHunt = async (huntId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + huntId, config)

  return response.data
}

const huntService = {
  createHunt,
  getHunts,
  deleteHunt,
}

export default huntService
