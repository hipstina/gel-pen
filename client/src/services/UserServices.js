import Client from './'

export const __GetAllUsers = async () => {
  try {
    const res = await Client.get(`/users`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const __GetUserById = async (id) => {
  try {
    const res = await Client.get(`/users/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const __GetThemesByUser = async (id) => {
  try {
    const res = await Client.get(`/user/themes/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const __GetReviewsThemesByUser = async (id) => {
  try {
    const res = await Client.get(`/user/theme/reviews/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

// export const __DeleteUserById = async () => {
//   try {
//     const res = await Client.delete(``)
//     return res.data
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const __UpdateUserById = async () => {
//   try {
//     const res = await Client.put(``)
//     return res.data
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const __CreateUser = async () => {
//   try {
//     const res = await Client.post(``)
//     return res.data
//   } catch (err) {
//     console.log(err)
//   }
// }
