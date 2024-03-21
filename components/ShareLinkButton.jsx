'use client'

import { useState } from "react"
import { LinkIcon } from '@heroicons/react/20/solid'

export const ShareLinkButton = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href)
    setClicked(true)
    setTimeout(() => setClicked(false), 1500)
  }

  return (
    <button
      onClick={handleClick}
      className="border px-2 py-1 flex gap-1 items-center rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
    >
      <LinkIcon className="h-4 w-4" />
      {clicked ? "Link Copied!" : "Share Link"}
    </button>
  )
}

