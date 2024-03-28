import axios from 'axios'

export default axios.create({
  baseURL: 'http://rbychin.ddns.net:6080/api/',
  params: {
    // TODO: Получать ID из Telegram API
    tid: import.meta.env.TEST_TID,
  },
})
