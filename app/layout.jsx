import NavBar from "@/components/NavBar"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-orange-50 px-2 py-4 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">
          {children}
        </main>
        <footer className="border-t py-3 text-center text-xs">
          Game data and images courtesy of{" "}
          <a href="https://rawg.io" target="_blank" className='text-orange-800 hover:underline'>RAWG</a>
        </footer>
      </body>
    </html>
  )
}