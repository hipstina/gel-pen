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

export const __GetThemById = async (id) => {
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
    const res = await Client.put(`/themes/${id}`, req)
    return res.data
  } catch (err) {
    console.log(err)
  }
}
