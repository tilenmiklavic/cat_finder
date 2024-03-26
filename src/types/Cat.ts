interface Breed {
  name: string
  origin: string
  description: string
  id: string
}

export interface Cat {
  id: string
  name: string
  description: string
  url: string
  breeds: Breed[]
}
