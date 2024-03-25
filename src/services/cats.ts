const getCats = async (apiKey: string, breedId?: string) => {
  const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}&api_key=${apiKey}`

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json()
  })
}

const getBreeds = async () => {
  const url = ` https://api.thecatapi.com/v1/breeds`
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}

export { getCats, getBreeds }
