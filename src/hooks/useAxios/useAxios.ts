import axios from 'axios'

export default axios.create({
  baseURL: 'http://rbychin.ddns.net:6080/api/',
  params: {
    // telegram user id
    tid: 1,
  },
})
