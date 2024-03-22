import { readFile, readdir } from 'node:fs/promises'
import { marked } from 'marked'
import matter from 'gray-matter'
import qs from 'qs'

export const getReview = async (slug) => {
  const text = await readFile(`./content/reviews/${slug}.md`, 'utf8')
  const { content, data: { title, date, image } } = matter(text)
  const body = marked(content)
  return { slug, title, date, image, body }
}

export const getReviews = async () => {
  const url = 'http://localhost:1337/api/reviews?' + qs.stringify({
    fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
    populate: { image: { fields: 'url' } },
    pagination: { pageSize: 6 },
    sort: ['publishedAt:desc']
  }, { encodeValuesOnly: true })
  const response = await fetch(url)
  const { data } = await response.json();
  return data.map((item) => ({
    slug: item.attributes.slug,
    title: item.attributes.title,
    date: item.attributes.publishedAt,
    body: item.attributes.body,
    image: item.attributes.image.data.id.attributes.url
  }))
}

export const getSlugs = async () => {
  const files = await readdir('./content/reviews')
  return files.filter((file) => file.endsWith('.md'))
    .map(file => file.slice(0, -'.md'.length))
}

export const getFeaturedReview = async () => {
  const reviews = await getReviews();
  return reviews[0]
}