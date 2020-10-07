const drySaveToCache = function(state, payload) {
  const toCache = {
    cachedAt: new Date().getTime(),
    data: payload.data
  }
  state.cache[payload.index] = toCache
  localStorage.setItem('bots_cache', JSON.stringify(state.cache))
}

export function saveToCache(state, payload) {
  drySaveToCache(state, payload)
}

export function loadCache(state) {
  const storedCache = localStorage.getItem('bots_cache')
  if(typeof storedCache === 'string') state.cache = JSON.parse(storedCache)
}

export function updateBot(state, payload) {
  for(const [key, value] of Object.entries(payload.data)) {
    payload.bot[key] = value
  }
  if(payload.cacheId) {
    drySaveToCache(state, {
      index: payload.cacheId,
      data: payload.bot
    })
  }
}
