export default function () {
  return {
    baseURL: process.env.BOT_API_URL || process.env.API_URL || 'http://localhost:8000',
    cache: {
      /* Store by id */
      /* {
        cachedAt: timestamp,
        data: [Object]
      } */
    }
  }
}
