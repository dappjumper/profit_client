import cache from './../../dry/cache'

export default {
  set(state, payload) {
    if(!cache.metadata) cache.boot()
    state.user = JSON.parse(JSON.stringify(payload.user))
    state.token = payload.token
    cache.save('user','token', payload.token)
  },
  addToSet(state, payload) {
    for(let i = 0; i<state.user[payload.key].length; i++) {
      if (state.user[payload.key]) return false
    }
    state.user[payload.key].push(payload.data)
  }
}