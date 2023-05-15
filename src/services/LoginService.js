import axios from 'axios'
const baseUrl = '/login'

const login = async credentials => {
  console.log('service', credentials)
  const response = await axios.post(baseUrl, credentials)
  console.log(response.data)
  return response.data
}

export default { login }

