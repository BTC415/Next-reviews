import Heading from "@/components/Heading";
import Link from 'next/link'
import { getFeaturedReview } from "@/lib/reviews";

export default async function Homepage() {
  const featuredReview = await getFeaturedReview()

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>
        Only the best indie games, reviewed for you.
      </p>
      <div className="bg-white border rounded shadow hover:shadow-xl w-80 sm:w-full">
        <Link href={`/reviews/${featuredReview.slug}`} className="flex flex-col sm:flex-row">
          <img src={featuredReview.image} alt="" width="640" height="360"
            className="rounded-t sm:rounded-l rounded-r-none" />
          <h2 className="py-1 font-semibold text-center font-orbitron">
            {featuredReview.title}
          </h2>
        </Link>
      </div>
    </>
  )
}