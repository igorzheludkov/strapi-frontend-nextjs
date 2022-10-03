import { useState, useEffect } from 'react'

export default function useGetData(url = '', method = 'GET', payload = '') {

  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
  const apiURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
  const body = { body: JSON.stringify(payload) }

  const [data, setData] = useState({})
  const [options, setOptions] = useState({
    method: method,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  switch (method) {
    case 'POST':
      setOptions({ ...options, body })
      break

    default:
      break
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(apiURL, options)
      const result = await response.json()
      if (response.ok) {
        setData(result)
      }
    }
    url && getData()
  }, [apiURL, options, url])

  return data
}
