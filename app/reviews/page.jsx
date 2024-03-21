import Link from "next/link";
import Heading from "@/components/Heading"
import { getReviews } from "@/lib/reviews";

export default async function Reviewspage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map(review => (
          <li key={review.slug} className="bg-white border rounded shadow hover:shadow-xl w-80">
            <Link href={`/reviews/${review.slug}`}>
              <img src={review.image} alt="" width="640" height="360" className="mb-2 rounded" />
              <h2 className="py-1 text-center font-orbitron">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}