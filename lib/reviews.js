import { readFile, readdir } from 'node:fs/promises'
import { marked } from 'marked'
import matter from 'gray-matter'
import qs from 'qs'

const CMS_URL = "http://localhost:1337"

export const getReview = async (slug) => {
  const { data } = await fetchReviews({
    filters: { slug: { $eq: slug } },
    fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
    populate: { image: { fields: 'url' } },
    pagination: { pageSize: 1, withCount: false },
  })
  const item = data[0]
  return ({
    ...toReview(item),
    body: marked(item.attributes.body, { headeIds: false, mangle: false })
  })
}

export const getReviews = async (pageSize) => {
  const { data } = await fetchReviews({
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: { image: { fields: 'url' } },
    pagination: { pageSize },
    sort: ['publishedAt:desc']
  })
  return data.map(toReview)
}

export const getSlugs = async () => {
  const { data } = await fetchReviews({
    fields: ['slug'],
    pagination: { pageSize: 25 },
    sort: ['publishedAt:desc']
  })
  return data.map(item => item.attributes.slug)
}

// export const getFeaturedReview = async () => {
//   const reviews = await getReviews();
//   return reviews[0]
// }

const fetchReviews = async (parameters) => {
  const url = `${CMS_URL}/api/reviews?` + qs.stringify(parameters, { encodeValuesOnly: true })
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`)
  }
  return await response.json();
}

const toReview = (item) => {
  const { attributes } = item
  return {
    slug: attributes.slug,
    title: attributes.title,
    subtitle: attributes.subtitle,
    date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CMS_URL + attributes.image.data.attributes.url
  }
}