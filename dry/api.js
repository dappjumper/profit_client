const api = {
  app: null,
  token: null,
  handler: null,
  server: {
    user:     process.env.USER_API || 'http://localhost:8000/user',
    bot:      process.env.BOT_API || 'http://localhost:8000/bot',
    telegram: process.env.TELEGRAM_API || 'https://api.telegram.org/bot'
  },
  headers: function() {
    return (api.token ? {
      headers: {
        'Authorization': `Bearer: ${api.token}`
      }
    } : null)
  }
}

api.boot = function({ handler, token }) {
  api.handler = handler
  api.token   = token
}

api.computed = {
  bot: function(botID, path) { return `${api.server.bot}/${botID}${(path ? `/${path}` : '')}`},
  telegram: function(botToken, path) { return `${api.server.telegram}${botToken}${path ? `/${path}` : ''}` },
  user: function(path) { return `${api.server.user}${path ? `/${path}` : ''}` }
}

api.call = function({ url, method, data }) {
  return new Promise(function(resolve, reject) {
    api.handler({
      method,
      data,
      url,
      ...api.headers()
    })
    .then((result)=>{
      if (!result.data) return reject('No data returned')
      if (!result.data.ok) return reject(result.data.error)
      resolve(result.data.data || result.data)
    })
    .catch((error)=>{
      reject('Network error')
    })
  })
}

api.bot = function({ botID, method, data, path }) {
  return api.call({
    url: api.computed.bot(botID, path),
    method,
    data
  })
}

api.user = function({ method, data, path }) {
  return api.call({
    url: api.computed.user(path),
    method,
    data
  })
}

export default api