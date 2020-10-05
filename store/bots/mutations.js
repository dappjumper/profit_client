export function saveToCache(state, payload) {
  const toCache = {
    cachedAt: new Date().getTime(),
    data: payload.data
  }
  state.cache[payload.index] = toCache
  localStorage.setItem('bots_cache', JSON.stringify(state.cache))
}

export function loadCache(state) {
  const storedCache = localStorage.getItem('bots_cache')
  if(typeof storedCache === 'string') state.cache = JSON.parse(storedCache)
}
