import axios from 'axios'

export default axios.create({
  baseURL: 'https://rbychin.ddns.net/kinosmena/api/',
  params: {
    // TODO: Получать ID из Telegram API
    tid: import.meta.env.TEST_TID,
  },
})
