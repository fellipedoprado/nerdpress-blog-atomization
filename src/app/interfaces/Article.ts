import { Commentary } from "./Commentary"

export interface Article {
  id: string
  title: string
  description: string
  photoCover: string
  category: string
  publishedAt: string
  publicationDate: string
  author: string
  article: string
  commentaries: Commentary[]
}
