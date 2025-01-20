"use client"

import Link from "next/link"
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logos/cop.png"
            alt="Copariot Labs Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold">Copariot Labs</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          {isHomePage ? (
            // 主页显示滚动导航
            <>
              <button 
                onClick={() => scrollToSection("research")} 
                className="hover:text-blue-400 transition-colors"
              >
                Research
              </button>
              <button 
                onClick={() => scrollToSection("products")} 
                className="hover:text-blue-400 transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection("partners")} 
                className="hover:text-blue-400 transition-colors"
              >
                Partners
              </button>
            </>
          ) : (
            // 其他页面显示常规导航
            <>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/projects" className="hover:text-gray-300 transition-colors">
                Projects
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

