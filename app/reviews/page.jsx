import Link from "next/link";
import Image from 'next/image'
import Heading from "@/components/Heading"
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: "Reviews"
}

export default async function Reviewspage() {
  const reviews = await getReviews(6);

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review, index) => (
          <li key={review.slug} className="bg-white border rounded shadow hover:shadow-xl w-80">
            <Link href={`/reviews/${review.slug}`}>
              <Image src={review.image} alt="" width="640" height="360" className="mb-2 rounded" priority={index === 0} />
              <h2 className="py-1 text-center font-orbitron">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}