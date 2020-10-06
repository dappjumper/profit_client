const USER_POINTER = 'profit_user'
const TOKEN_POINTER = 'profit_token'

export function setUser (state, payload) {
  localStorage.setItem(USER_POINTER, JSON.stringify(payload.user))
  localStorage.setItem(TOKEN_POINTER, payload.token)
  state.user = payload.user
  state.token = payload.token
  state.isLoggedIn = true
}

export function updateUser (state, payload) {
  state.user = payload
  localStorage.setItem(USER_POINTER, JSON.stringify(payload))
}

export function addBot(state, payload) {
  if(state.user.bots.indexOf(payload) > -1) return false
  state.user.bots.push(payload) 
}

export function unlistBot(state, bot_id) {
  if(state.user.bots.indexOf(bot_id) === -1) return false
  state.user.bots.splice(state.user.bots.indexOf(bot_id), 1)
}

export function forgetUser (state) {
  state.user = null
  state.token = null
  state.isLoggedIn = false
  localStorage.removeItem(TOKEN_POINTER)
  localStorage.removeItem(USER_POINTER)
}

export function loadUser (state) {
  const token = localStorage.getItem(TOKEN_POINTER)
  const userStringified = localStorage.getItem(USER_POINTER)
  if (!token || userStringified.charAt(0) !== '{') return false
  state.user = JSON.parse(userStringified)
  state.token = token
}
