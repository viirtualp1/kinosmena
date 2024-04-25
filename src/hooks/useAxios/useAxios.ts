import axios from 'axios'

export default axios.create({
  baseURL: 'https://rbychin.ddns.net/kinosmena/api/',
  params: {
    tid: import.meta.env.VITE_TEST_TID,
  },
})
