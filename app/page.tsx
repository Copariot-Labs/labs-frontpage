import Image from "next/image"
import { Zap, Cpu, Users, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ResearchSection />
      <ProductsSection />
      <PartnersSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* 网格背景 */}
      <div className="absolute inset-0 grid-bg"></div>
      
      {/* 添加多个光效元素 */}
      <div className="glow top-1/4 left-1/4"></div>
      <div className="glow top-1/3 right-1/4" 
           style={{animationDelay: '-3s'}}></div>
      <div className="glow bottom-1/4 left-1/3" 
           style={{animationDelay: '-6s'}}></div>
      
      {/* 内容遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      
      {/* 主要内容 */}
      <div className="text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Copariot Labs
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Pioneering Web3 Innovations to Redefine Trust, Productivity, and Society
        </p>
        <a
          href="#research"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        >
          Explore Our Research
        </a>
      </div>
    </section>
  )
}

function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Research Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResearchCard
            icon={<Zap className="w-12 h-12 text-yellow-400" />}
            title="Blockchain Infrastructure"
            description="Innovating on the foundational layers of blockchain technology to enhance scalability and security."
          />
          <ResearchCard
            icon={<Cpu className="w-12 h-12 text-green-400" />}
            title="DApp Economic Models"
            description="Developing sustainable and efficient economic models for decentralized applications."
          />
          <ResearchCard
            icon={<Users className="w-12 h-12 text-purple-400" />}
            title="Web3 Social Dynamics"
            description="Exploring the intersection of blockchain technology and social interactions in the digital realm."
          />
          <ResearchCard
            icon={<BarChart3 className="w-12 h-12 text-blue-400" />}
            title="Asset Management Technology"
            description="Developing advanced solutions for efficient and secure management of digital assets in the Web3 ecosystem."
          />
        </div>
      </div>
    </section>
  )
}

interface ResearchCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ResearchCard({ icon, title, description }: ResearchCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProductsSection() {
  const products = [
    { name: "Starlight", description: "Revolutionary AA wallet for seamless transactions." },
    { name: "Picwe", description: "Innovative omnichain swap technology." },
    { name: "Pipi", description: "Stable coin derivative meme." },
    { name: "MoveFun", description: "Decentralized token issuance DApp." },
  ]

  return (
    <section id="products" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Revolutionary Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-400">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PartnersSection() {
  const partners = [
    // { name: "OKX", logo: "/logos/okx.webp", website: "https://www.okx.com" },
    // { name: "Binance", logo: "/logos/binance.webp", website: "https://www.binance.com" },
    { name: "Movement Labs", logo: "/logos/movement.webp", website: "https://www.movementlabs.xyz" },
    { name: "Ethereum Foundation", logo: "/logos/ethereum.webp", website: "https://ethereum.org" },
  ]

  return (
    <section id="partners" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Trusted Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 px-6 py-3 rounded-full text-lg font-semibold flex items-center space-x-3 hover:bg-gray-700 transition-colors"
            >
              <div className="w-6 h-6 relative">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                  sizes="24px"
                />
              </div>
              <span>{partner.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

