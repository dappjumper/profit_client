/*
  Module for api calls
*/

const api = {
  app: null,
  token: null,
  server: {
    user:     process.env.USER_API     || 'http://localhost:8000/user',
    bot:      process.env.BOTS_API     || 'http://localhost:8000/bot',
    telegram: process.env.TELEGRAM_API || 'https://api.telegram.org/bot'
  },
  headers: function() {
    return {
      headers: {
        'Authorization': `Bearer: ${api.token}`
      }
    }
  },
  boot: function({ handler, token }) {
    api.handler = handler
    api.token   = token
  }
}

api.bot = function({ botID, method, data, url }) {
  return new Promise((resolve, reject) => {
    api.handler[method](
      `${api.server.bot}/${botID}${(url ? `/${url}` : '')}`,
       data ? data          : api.headers(),
      !data ? api.headers() : null
    )
    .then((result)=>{
      if (!result.data)    return reject('No data returned')
      if (!result.data.ok) return reject(result.data.error)
      resolve(result.data.data || result.data)
    })
    .catch((error)=>{
      reject('Network error')
    })
  })
}

export default api