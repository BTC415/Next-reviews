import Heading from "@/components/Heading"
import { ShareLinkButton } from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews"

export const generateStaticParams = async () => {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const generateMetadata = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  return {
    title: review.title
  }
}

const ReviewsPage = async ({ params: { slug } }) => {
  const review = await getReview(slug)

  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className='italic pb-2'>{review.date}</p>
        <ShareLinkButton />
      </div>

      <img src={review.image} alt="" width="640" height="360" className="mb-2 rounded" />
      <p>
        <article dangerouslySetInnerHTML={{ __html: review.body }} className='prose prose-slate' />
      </p>
    </>
  )
}

export default ReviewsPage