"use client"

import Link from "next/link"
import { Atom } from "lucide-react"

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed w-full z-10 bg-black/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Atom className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold">Copariot Labs</span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <button onClick={() => scrollToSection("research")} className="hover:text-blue-400 transition-colors">
              Research
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("products")} className="hover:text-blue-400 transition-colors">
              Products
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("partners")} className="hover:text-blue-400 transition-colors">
              Partners
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

