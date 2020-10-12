import cache from './../../dry/cache'

export default {
  set(state, payload) {
    if(!cache.metadata) cache.boot()
    state.user = JSON.parse(JSON.stringify(payload.user))
    state.token = payload.token
    cache.save('user','token', payload.token)
  }
}