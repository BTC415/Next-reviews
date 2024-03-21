import { readFile, readdir } from 'node:fs/promises'
import { marked } from 'marked'
import matter from 'gray-matter'

export const getReview = async (slug) => {
  const text = await readFile(`./content/reviews/${slug}.md`, 'utf8')
  const { content, data: { title, date, image } } = matter(text)
  const body = marked(content)
  return { slug, title, date, image, body }
}

export const getReviews = async () => {
  const slugs = await getSlugs()
  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review)
  }
  reviews.sort((a, b) => b.date.localeCompare(a.date))
  return reviews;
}

export const getSlugs = async () => {
  const files = await readdir('./content/reviews')
  return files.filter((file) => file.endsWith('.md'))
    .map(file => file.slice(0, -'.md'.length))
}

export const getFeaturedReview = async () =>{
  const reviews = await getReviews();
  return reviews[0]
}