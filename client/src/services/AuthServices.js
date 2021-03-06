import Client from './'

export const __RegisterUser = async (req) => {
  try {
    const res = await Client.post(`/auth/register`, req)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const __LoginUserByUsername = async (req) => {
  try {
    const res = await Client.post(`/auth/login`, req)
    localStorage.setItem('token', res.data.token)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const __CheckSession = async () => {
  try {
    const res = await Client.get(`/auth/session`)
    return res.data
  } catch (err) {
    console.log('Please login.')
  }
}
