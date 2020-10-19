const base = (path) => {
  if (window.location.hostname === 'localhost') return 'http://localhost:8000'+path
  return 'https://api.andersen.work'+path
}

const api = {
  app: null,
  token: null,
  handler: null,
  server: {},
  headers: function() {
    return (api.token ? {
      headers: {
        'Authorization': `Bearer: ${api.token}`
      }
    } : null)
  }
}

api.boot = function({ handler, token, USER_API, BOT_API, TELEGRAM_API }) {
  api.handler = handler
  api.token   = token
  api.server = {
    user:     base('/user'),
    bot:      base('/bot'),
    telegram: 'https://api.telegram.org/bot'
  }
}

api.computed = {
  bot: function(botID, path) { return `${base('/bot')}${botID ? `/${botID}` : ''}${(path ? `/${path}` : '')}`},
  telegram: function(botToken, path) { return `${api.server.telegram}${botToken}${path ? `/${path}` : ''}` },
  user: function(path) { return `${base('/user')}${path ? `/${path}` : ''}` }
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

api.bot = function({ botID, method, data, path }) {
  return api.call({
    url: api.computed.bot(botID, path),
    method,
    data
  })
}

api.basic = function({ method, data, path }) {
  return api.call({
    url: base('/'+path),
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