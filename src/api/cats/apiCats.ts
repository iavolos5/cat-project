import { Cats } from '@/cats/interface/cats'

export const fetchCats = async () => {
  const url = `https://api.thecatapi.com/v1/images/search?limit=1`
  const api_key = 'DEMO_API_KEY'
  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': api_key
      }
    })

    const data: Cats[] = await response.json()

    console.log(data)

    return data[0].url
  } catch (error) {
    console.log(error)
  }
}
