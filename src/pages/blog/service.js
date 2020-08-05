import { rest } from 'utils'


export default {
  send: async (data) => {
    const response = await rest.post('/about/form', data)
    return response.data
  },
}
