export function tryAccess (context, payload) {
  return new Promise((resolve, reject) => {
    this.$axios.post(`${context.state.baseURL}/user/${payload.type}`, payload)
      .then(function (response) {
        if(!response.data) return reject('No data returned')
        if(!response.data.ok) return reject(response.data.error)
        console.log("huh", response.data)
        context.commit('setUser', response.data)
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

export function tryJWT (context, payload) {
  return new Promise((resolve, reject) => {
    if(!context.state.token) return reject('No token stored')
    const options = {
      headers: {
        'Authorization': `Bearer: ${context.state.token}`
      }
    }
    this.$axios[payload.data ? 'post' : 'get'](`${context.state.baseURL}/${payload.url}`, (payload.data ? payload.data : options), options)
      .then(function (response) {
        if(!response.data) return reject('No data returned')
        if(!response.data.ok) return reject(response.data.error)
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
