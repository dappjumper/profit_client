export default function () {
  return {
    baseURL: process.env.API_URL || 'http://localhost:8000',
    isLoggedIn: false,
    user: null,
    token: null
  }
}
