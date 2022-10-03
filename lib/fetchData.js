const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN

export default async function fetchData(url, method, payload) {
  if (url) {
    const apiURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
    const body = JSON.stringify(payload)

    const options = {
      method: method,
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: body
    }

    const response = await fetch(apiURL, options)
    const result = await response.json()

    if (response.ok) {
      return result
    } else {
      return { error: 'error', result }
    }
  }
}
