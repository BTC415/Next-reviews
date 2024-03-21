import Link from "next/link";
import Heading from "@/components/Heading"

export default function Reviewspage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border rounded shadow hover:shadow-xl w-80">
          <Link href="/reviews/hollow-knight">
            <img src="/images/hollow-knight.jpg" alt="" width="640" height="360" className="mb-2 rounded" />
            <h2 className="py-1 text-center font-orbitron">Hollow Knight</h2>
          </Link>
        </li>
        <li className="bg-white border rounded shadow hover:shadow-xl w-80">
          <Link href="/reviews/stardew-valley">
            <img src="/images/stardew-valley.jpg" alt="" width="640" height="360" className="mb-2 rounded" />
            <h2 className="py-1 text-center font-orbitron">Stardew Valley</h2>
          </Link>
        </li>
      </ul>
    </>
  )
}