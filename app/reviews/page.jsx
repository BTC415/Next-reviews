import Link from "next/link";
import Heading from "@/components/Heading"

export default function Reviewspage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul>
        <li>
          <Link href="/reviews/hollow-knight">
            <img src="/images/hollow-knight.jpg" alt="" width="640" height="360" className="mb-2 rounded" />
            Hollow Knight
          </Link>
        </li>
        <li>
          <Link href="/reviews/stardew-valley">
            <img src="/images/stardew-valley.jpg" alt="" width="640" height="360" className="mb-2 rounded" />
            Stardew Valley</Link>
        </li>
      </ul>
    </>
  )
}