import Client from './'

export const __GetReviewsByTheme = async (id) => {
  try {
    const res = await Client.get(`/themes/reviews/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const __CreateReview = async (req) => {
  try {
    const res = await Client.post(`/themes/reviews`, req)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const __DeleteReviewById = async (id) => {
  try {
    const res = await Client.delete(`/themes/review/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

// export const __UpdateReviewById = async () => {
//   try {
//     const res = await Client.put(``)
//     return res.data
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const __GetReviewById = async () => {
//   try {
//     const res = await Client.get(``)
//     return res.data
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const __GetReviews = async () => {
//   try {
//     const res = await Client.get(``)
//     return res.data
//   } catch (err) {
//     console.log(err)
//   }
// }
