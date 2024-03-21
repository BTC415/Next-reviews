import Heading from "@/components/Heading";
import Link from 'next/link'

export default function Homepage() {
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>
        Only the best indie games, reviewed for you.
      </p>
      <div className="bg-white border rounded shadow hover:shadow-xl w-80 sm:w-full">
        <Link href="/reviews/stardew-valley" className="flex flex-col sm:flex-row">
          <img src="/images/stardew-valley.jpg" alt="" width="640" height="360" 
          className="rounded-t sm:rounded-l rounded-r-none" />
          <h2 className="py-1 font-semibold text-center font-orbitron">
            Stardew Valley
          </h2>
        </Link>
      </div>
    </>
  )
}