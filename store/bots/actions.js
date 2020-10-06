const defaultExpiryInMinutes = 30

const isStaleData = (context, cacheIndex, expiryInMinutes) => {
  if(!context.state.cache) return true
  if(!context.state.cache[cacheIndex]) return true
  if(!context.state.cache[cacheIndex].cachedAt) return true
  const now = new Date().getTime()
  const then = context.state.cache[cacheIndex].cacheAt
  const difference = (now - then) / (1000/60)
  return ((expiryInMinutes || defaultExpiryInMinutes) < difference)
}

export function api (context, payload) {
  if(payload.cacheId) { //If cacheId = true, return cache data in promise form if not stale (configurable with expiryInMinutes param)
    if(!isStaleData(context, payload.cacheId)) {
      return new Promise((resolve, reject) => {
        resolve(context.state.cache[payload.cacheId].data)
      })
    }
  }
  let token = context.rootState.user.token
  let baseURL = context.rootState.user.baseURL
  return new Promise((resolve, reject) => {
    if(!token) return reject('No token stored')
    const options = {
      headers: {
        'Authorization': `Bearer: ${token}`
      }
    }
    this.$axios[payload.data ? payload.method || 'post' : 'get'](`${baseURL}/bot/${payload.bot_id}/${payload.url}`, (payload.data ? payload.data : options), options)
      .then((response) => {
        if(!response.data) return reject('No data returned')
        if(!response.data.ok) return reject(response.data.error)
        if(payload.cacheId) {
          // Save to cache
          context.commit('saveToCache', {index: payload.cacheId, data: response.data.data})
        }
        resolve(response.data.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}