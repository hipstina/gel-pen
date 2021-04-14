import Client from './'

export const __CreateNewTheme = async (req) => {
  try {
    const res = await Client.post(`/themes`, req)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const __GetAllThemes = async () => {
  try {
    const res = await Client.get(`/themes`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const __GetThemeById = async (id) => {
  try {
    const res = await Client.get(`/themes/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const __DeleteThemeById = async (id) => {
  try {
    const res = await Client.delete(`/themes/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const __UpdateLikeCount = async (id, req) => {
  try {
    console.log('__UpdateLikeCount id + req', id, req)
    const theme = {
      likes: req
    }
    const res = await Client.put(`/themes/${id}`, theme)
    console.log(res)
    return res.data
  } catch (err) {
    console.log(err)
  }
}
