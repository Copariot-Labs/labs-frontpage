import './globals.css'
import { Inter } from "next/font/google"
import Header from "../components/Header"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Copariot Labs - Pioneering Web3 Innovations",
  description:
    "Copariot Labs is a Web3 research institution focused on blockchain infrastructure and DApp economic models.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen text-white bg-black`}>
        <div className="relative">
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

