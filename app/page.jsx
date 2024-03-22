import Heading from "@/components/Heading";
import Link from 'next/link'
import { getReviews } from "@/lib/reviews";
import Image from "next/image";

export default async function Homepage() {
  const reviews = await getReviews(3)

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>
        Only the best indie games, reviewed for you.
      </p>
      <ul className="flex flex-col gap-3">
        {reviews.map((review, index) => (
          <li key={review.slug} className="bg-white border rounded shadow hover:shadow-xl w-80 sm:w-full">
            <Link href={`/reviews/${review.slug}`} className="flex flex-col sm:flex-row">
              <Image src={review.image} alt="" width="320" height="180" priority={index === 0}
                className="rounded-t sm:rounded-l rounded-r-none" />
              <div className="px-2 py-1 text-center sm:text-left">
                <h2 className="font-semibold font-orbitron">
                  {review.title}
                </h2>
                <p className="hidden pt-2 sm:block">{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}