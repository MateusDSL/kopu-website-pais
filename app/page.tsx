"use client"

import Head from "next/head"
import { mainCarousel, moreOptionsCarousel, techCarousel, } from "@/data/products"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Star,
  Phone,
  Mail,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  Download,
  MessageCircle,
  Headphones,
  DollarSign,
  CalendarClock,
  Truck,
  Briefcase,
  Users,
  Heart,
  Eye,
  Settings,
} from "lucide-react"
import { ProductCarousel } from "@/components/product-carousel"
import { FeatureCarousel } from "@/components/feature-carousel"
import { useEffect, useRef, useState } from "react"

// --- Helper Components ---
const FeaturesSection = () => (
    <section className="py-8 bg-[#FBFBFB]" id="features">
      <div className="container mx-auto px-4">
        {/* Mobile: letreiro infinito */}
        <div className="block sm:hidden marquee-container">
          <div className="animate-marquee whitespace-nowrap pointer-events-none">
            <div className="inline-flex gap-4">
              <FeatureCard icon={<Truck className="w-14 h-14 text-green-600" />} title="Frete Grátis" desc="Sul e São Paulo" />
              <FeatureCard icon={<Settings className="w-14 h-14 text-green-600" />} title="Produção Própria" desc="Qualidade" />
              <FeatureCard icon={<DollarSign className="w-14 h-14 text-green-600" />} title="Melhor preço" desc="Consulte" />
              <FeatureCard icon={<CalendarClock className="w-14 h-14 text-green-600" />} title="Faturamento" desc="Em 5x" />
            </div>
            <div className="inline-flex gap-4">
              <FeatureCard icon={<Truck className="w-14 h-14 text-green-600" />} title="Frete Grátis" desc="Sul e São Paulo" />
              <FeatureCard icon={<Settings className="w-14 h-14 text-green-600" />} title="Produção Própria" desc="Qualidade" />
              <FeatureCard icon={<DollarSign className="w-14 h-14 text-green-600" />} title="Melhor preço" desc="Consulte" />
              <FeatureCard icon={<CalendarClock className="w-14 h-14 text-green-600" />} title="Faturamento" desc="Em 5x" />
            </div>
          </div>
        </div>

        {/* Desktop: grid (mantido como estava) */}
        <div className="hidden sm:flex w-full justify-center pl-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <FeatureCard icon={<Truck className="w-12 h-12 text-green-600" />} title="Frete Grátis" desc="Sul e São Paulo - Consulte" />
            <FeatureCard icon={<Settings className="w-12 h-12 text-green-600" />} title="Produção Própria" desc="Qualidade garantida" />
            <FeatureCard icon={<DollarSign className="w-12 h-12 text-green-600" />} title="Melhor preço" desc="Solicite seu orçamento" />
            <FeatureCard icon={<CalendarClock className="w-12 h-12 text-green-600" />} title="Faturamento" desc="Em até 5x, consulte" />
          </div>
        </div>
      </div>
    </section>
)

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left space-y-1 sm:space-y-0 sm:space-x-4 min-w-[200px] sm:min-w-0">
      <div className="sm:w-auto sm:h-auto w-14 h-14 flex items-center justify-center">{icon}</div>
      <div>
        <div className="font-bold text-base sm:text-xl text-slate-800">{title}</div>
        <div className="text-gray-500 text-sm sm:text-base">{desc}</div>
      </div>
    </div>
  )
}

function AnimatedNumber({ value, duration = 1500, suffix = "", prefix = "" }: { value: number, duration?: number, suffix?: string, prefix?: string }) {
  const [display, setDisplay] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && !hasStarted) {
        const rect = ref.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isVisible) {
          setHasStarted(true)
          
          let start = 0
          let startTimestamp: number | null = null
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            setDisplay(Math.floor(progress * value))
            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              setDisplay(value)
            }
          }
          requestAnimationFrame(step)
          window.removeEventListener('scroll', handleScroll)
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [value, duration, hasStarted])
  
  return <span ref={ref}>{prefix}{display.toLocaleString()}{suffix}</span>
}

function ProductCarousels() {
  return (
    <section className="py-4 bg-[#FBFBFB]" id="produtos">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bolsas e Mochilas</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
        </div>
        {/* Versão Desktop */}
        <div className="hidden sm:block max-w-[280px] sm:max-w-none mx-auto">
          <ProductCarousel
            title={mainCarousel.title}
            products={mainCarousel.products}
            slidesToShow={4}
          />
        </div>
        {/* Versão Mobile */}
        <div className="block sm:hidden max-w-[340px] mx-auto px-0">
          <ProductCarousel
            title={mainCarousel.title}
            products={mainCarousel.products}
            slidesToShow={1}
            showControls={false}
          />
        </div>
      </div>
    </section>
  )
}

function ExtraCarouselsSection() {
  return (
    <section className="py-4 bg-[#FBFBFB]" id="mais-produtos">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Copos e Canecas</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
        </div>
        {/* Versão Desktop */}
        <div className="hidden sm:block max-w-[280px] sm:max-w-none mx-auto">
          <ProductCarousel
            title={moreOptionsCarousel.title + " - Novidades"}
            products={moreOptionsCarousel.products}
            slidesToShow={4}
          />
        </div>
        {/* Versão Mobile */}
        <div className="block sm:hidden max-w-[340px] mx-auto px-0">
          <ProductCarousel
            title={moreOptionsCarousel.title + " - Novidades"}
            products={moreOptionsCarousel.products}
            slidesToShow={1}
            showControls={false}
          />
        </div>
      </div>
    </section>
  )
}

function ExtraCarouselAfterStats() {
  return (
    <section className="py-4 bg-[#FBFBFB]" id="carrossel-extra-2">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kits para o Paizão</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
        </div>
        {/* Versão Desktop */}
        <div className="hidden sm:block max-w-[280px] sm:max-w-none mx-auto">
          <ProductCarousel
            title={techCarousel.title + " - Destaques"}
            products={techCarousel.products}
            slidesToShow={4}
          />
        </div>
        {/* Versão Mobile */}
        <div className="block sm:hidden max-w-[340px] mx-auto px-0">
          <ProductCarousel
            title={techCarousel.title + " - Destaques"}
            products={techCarousel.products}
            slidesToShow={1}
            showControls={false}
          />
        </div>
      </div>
    </section>
  )
}

// StatCard component definition
function StatCard({ number, suffix = "", label }: { number: number; suffix?: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
        {number.toLocaleString()}{suffix}
      </div>
      <div className="text-base sm:text-lg text-white/80 font-medium">{label}</div>
    </div>
  )
}

// --- Main Page ---
export default function HomePage() {
  return (
    <>
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MXHR9PSW');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MXHR9PSW"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <div className="min-h-screen bg-white">
        <HeroSection />
        <FeaturesSection />
        <ProductCarousels />
        <ExtraCarouselsSection />
        <ExtraCarouselAfterStats />
        <CatalogHighlightSection />
        <TestimonialsSection />
        <CatalogSection />
        <StatsSection />
        <LocationsSection />
        <Footer />
      </div>
    </>
  )
}

// --- Stats Section ---
function StatsSection() {
  const stats = [
    { number: 10, suffix: "+", label: "Anos de mercado" },
    { number: 20, suffix: " mil", label: "Clientes satisfeitos" },
    { number: 3000, suffix: "+", label: "Produtos em linha" },
    { number: 2, suffix: " mil m²", label: "Área de produção" },
  ]

  return (
    <section className="py-8 bg-[#FBFBFB]">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-[#15273B] to-[#0F1D2B] p-8 lg:p-12 transition-all duration-300 ease-in-out hover:lg:-translate-y-2 hover:lg:shadow-2xl lg:rounded-3xl lg:shadow-xl">
          {/* Mobile: letreiro infinito */}
          <div className="block lg:hidden marquee-container">
            <div className="animate-marquee whitespace-nowrap pointer-events-none">
              <div className="inline-flex gap-8 pr-8">
                {stats.map((stat, i) => (
                  <div key={i} className="min-w-[150px]">
                    <StatCard {...stat} />
                  </div>
                ))}
              </div>
              <div className="inline-flex gap-8 pl-6">
                {stats.map((stat, i) => (
                  <div key={`repeat-${i}`} className="min-w-[150px]">
                    <StatCard {...stat} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: grid com bordas */}
          <div className="hidden lg:grid grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/20">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Sections ---
function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            kopu
          </span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#produtos" className="hover:text-green-400 transition-colors duration-300 font-medium">Produtos</a>
          <a href="#sobre" className="hover:text-green-400 transition-colors duration-300 font-medium">Sobre Empresa</a>
          <a href="#catalogo" className="hover:text-green-400 transition-colors duration-300 font-medium">Catálogo</a>
          <a href="#contato" className="hover:text-green-400 transition-colors duration-300 font-medium">Contato</a>
        </nav>
        <Button className="md:hidden bg-green-500 hover:bg-green-600">Menu</Button>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section
      className={`
        relative text-white
        sm:py-20 py-[280px]
        md:py-32
        overflow-hidden flex flex-col justify-center
      `}
      style={{
        backgroundImage: "url('/images/banner03.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Desktop: vídeo de fundo */}
      <video
        className="hidden sm:block absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
        {/* Fallback para navegadores que não suportam vídeo */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/videos/banner.mp4')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </video>
      {/* Overlay escuro opcional para melhor legibilidade do texto */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-[-180px] sm:mt-0">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2 text-sm font-semibold">
                 👨‍👧‍👦 Promoção Especial - Dia dos Pais
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent">
                  Sua Marca
                </span>
                <br />
                <span className="text-white">Presente</span>
                <br />
                <span className="text-green-400"> nos momentos que importam.</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Neste Dia dos Pais, reconheça e valorize os colaboradores que equilibram a jornada profissional e a de pai.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4" >
               <Button asChild className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                <a href="#produtos" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Solicite um Orçamento!
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-green-400">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

function TestimonialsSection() {
  const testimonials = [
    { // Removed the `id` property as it was not used and caused a TypeScript error.
      name: "Market4u Edu",
      initials: "MK",
      color: "from-orange-400 to-orange-600",
            avatarStackColor: "bg-orange-500",
      text: "Atendimento diferenciado. Apresentam sugestões de produtos, negociam prazo de pagamento e possuem um mix muito grande. Produto de ótima qualidade. Recebemos antes do prazo. Recomendo!",
    },
    { // Removed the `id` property as it was not used and caused a TypeScript error.
      name: "Madrid Eletrônicos",
      initials: "ME",
      color: "from-teal-400 to-teal-600",
            avatarStackColor: "bg-teal-500",
      text: "Encontrei a empresa pelo Google, fui muito bem atendida pelo Guilherme, ele me auxiliou com os brindes, os tamanhos, cores que combinariam, ele foi extremamente atencioso; Os brindes são lindos, muito bem feitos, uma excelente qualidade, comprarei mais vezes.",
    },
    { // Removed the `id` property as it was not used and caused a TypeScript error.
      name: "Comercial Supera SJ",
      initials: "CS",
      color: "from-pink-400 to-pink-600",
            avatarStackColor: "bg-pink-500",
      text: "As sacochilas ficaram lindíssimas, minha gestora amou o trabalho, parabéns. Além de chegar bem antes do prazo de entrega previsto, SEM PALAVRAS! ♥️ MUITO, MUITO OBRIGADA pelo atendimento e comprometimento conosco, desde o primeiro contato até o último, e obrigada pela paciência. 🥰",
    },
  ]
  return ( // Changed `py-12` to `py-8`
    <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de 5.000 empresas confiam na Kopu para seus produtos promocionais
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-white font-semibold">5.0</span>
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${t.color} rounded-full mr-4 flex items-center justify-center`}>
                    <span className="text-white font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="flex -space-x-2">
                                {testimonials.slice(0, 4).map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className={`w-8 h-8 ${testimonial.avatarStackColor} rounded-full border-2 border-slate-800 flex items-center justify-center text-white text-xs font-bold`}
                                        title={testimonial.name}
                                    >
                                        {testimonial.initials}
                                    </div>
                                ))}
            </div>
            <span className="text-white font-semibold">+5.000 empresas satisfeitas</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function CatalogSection() {
  return (
    <section className="py-16 bg-[#FBFBFB]" id="catalogo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/images/mockup.png"
              alt="Catálogo de produtos promocionais Kopu"
              width={700}
              height={480}
              className="rounded-2xl"
            />
          </div>
          <div className="space-y-8">
            <div>
              <Badge className="bg-[#1C2638] text-white px-4 py-2 text-sm font-semibold mb-4">
                📚 Variedade de Produtos
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Confira todos nossos produtos!</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Explore nossa linha completa de produtos promocionais e personalizados. Encontre a solução perfeita
                para sua empresa com mais de 500 opções disponíveis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <Button asChild className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="https://kopu.com.br/?utm_source=lp-copos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Acesse Nosso Site
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CatalogHighlightSection() {
  return (
    <section className="py-4 bg-[#FBFBFB]" id="catalogo">
      <div className="container mx-auto">
        <div className="sm:bg-gradient-to-br sm:from-slate-900 sm:to-slate-800 rounded-3xl p-4 sm:p-8 lg:p-12 sm:shadow-xl sm:transition-all sm:duration-300 sm:ease-in-out hover:sm:-translate-y-2 hover:sm:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="relative flex items-center justify-center">
              <Image
                src="/images/catalogo.webp"
                alt="Catálogo Dia dos Pais - Produtos promocionais Kopu"
                width={800}
                height={580}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <Badge className="bg-green-500/20 text-green-600 sm:text-green-300 border-green-500/30 px-4 py-2 text-sm font-semibold mb-4">
                  👨‍🍼 Catálogo Dia dos Pais
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 sm:text-white mb-6">Confira nosso Catálogo Completo!</h2>
                <p className="text-lg sm:text-xl text-slate-600 sm:text-gray-200 leading-relaxed mb-8">
                  Descubra nossa linha completa de brindes corporativos para o Dia dos Pais.
                </p>
              </div>
              {/* Mobile: letreiro infinito */}
              <div className="block sm:hidden marquee-container">
                <div className="animate-marquee whitespace-nowrap pointer-events-none">
                  <div className="inline-flex gap-4">
                    {[
                      "Soluções para todos os estilos",
                      "Produtos úteis e de alta qualidade",
                      "Preços atualizados e competitivos",
                      "Para fortalecer sua marca",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 min-w-[200px]">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex gap-4">
                    {[
                      "Soluções para todos os estilos",
                      "Produtos úteis e de alta qualidade",
                      "Preços atualizados e competitivos",
                      "Para fortalecer sua marca",
                    ].map((item, i) => (
                      <div key={`repeat-${i}`} className="flex items-center space-x-3 min-w-[200px]">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Desktop: grid */}
              <div className="hidden sm:grid grid-cols-2 gap-4 mb-8">
                {[
                  "Soluções para todos os estilos",
                  "Produtos úteis e de alta qualidade",
                  "Preços atualizados e competitivos",
                  "Para fortalecer sua marca",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 sm:text-green-400" />
                    <span className="text-slate-600 sm:text-gray-100">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Button asChild className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <a href="https://drive.google.com/file/d/15TdZ3dWgplAFQsvKoQlfQOouYbxhQ0cH/view" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                    <Eye className="w-5 h-5" />
                    Ver Catálogo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LocationsSection() {
  const locations = [
    {
      title: "Santa Catarina",
      subtitle: "Matriz",
            bgColor: "bg-green-100",
            textColor: "text-green-600",
      // Substitua esta URL pela URL de incorporação real do Google Maps para Lages, SC
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.8440040968844!2d-50.2849978!3d-27.783780399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e019480acb21ef%3A0x48ed759ec6b70b5f!2sAv.%20Maria%20Am%C3%A9lia%20Ramos%2C%20515%20-%20Guaruj%C3%A1%2C%20Lages%20-%20SC%2C%2088521-154!5e0!3m2!1spt-BR!2sbr!4v1750349270141!5m2!1spt-BR!2sbr",
      address: [
        "Av. Maria Amélia Ramos, 515 - Guarujá",
        "Lages - SC, 88521-154",
      ],
      phone: "(49) 99110-4949",
      btnClass: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      mapLink: "https://maps.google.com/?q=Av.+Maria+Am%C3%A9lia+Ramos,+515+-+Guaruj%C3%A1,+Lages+-+SC,+88521-154", // Link para abrir no Google Maps
    },
    {
      title: "São Paulo",
      subtitle: "Filial",
            bgColor: "bg-blue-100",
            textColor: "text-blue-600",
      mapImg: "/placeholder.svg?height=256&width=500&text=São+Paulo+Map",
      address: [
        "R. Sd. Ant\u00f4nio Aparecido, 20 - Parque Novo Mundo", // Corrigido para exibir acento
        "São Paulo - SP, 02187-020",
      ],
      phone: "(11) 9125-6012",
      btnClass: "bg-gradient-to-r from-[#343A52] to-[#262B42] hover:from-[#262B42] hover:to-[#1E2133]",
      // Substitua esta URL pela URL de incorporação real do Google Maps para São Paulo, SP
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5530486478983!2d-46.565153099999996!3d-23.512602999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f103186ae8b%3A0x307a8d96ad39acdc!2sR.%20Sd.%20Ant%C3%B4nio%20Aparecido%2C%2020%20-%20Parque%20Novo%20Mundo%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002187-020!5e0!3m2!1spt-BR!2sbr!4v1750349317371!5m2!1spt-BR!2sbr",
      mapLink: "https://maps.google.com/?q=R.+Sd.+Ant%C3%B4nio+Aparecido,+20+-+Parque+Novo+Mundo,+S%C3%A3o+Paulo+-+SP,+02187-020", // Link para abrir no Google Maps
    },
  ]
  return (
    <section className="py-16 bg-[#FBFBFB]" id="contato">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossas Unidades</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos presentes em Santa Catarina e São Paulo para melhor atendê-lo
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {locations.map((loc, i) => (
            <Card key={i} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
              <CardContent className="p-0">
                {/* Substituído o div com Image pelo iframe do Google Maps */}
                <div className="relative h-64"> {/* Mantém a altura do contêiner */}
                  <iframe
                    src={loc.mapEmbedUrl} // Use a URL de incorporação real aqui
                    width="100%" // Ocupa a largura total do contêiner
                    height="100%" // Ocupa a altura total do contêiner
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${loc.bgColor} rounded-full flex items-center justify-center mr-4`}>
                      <MapPin className={`w-6 h-6 ${loc.textColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">{loc.title}</h3>
                      <p className={`${loc.textColor} font-semibold`}>{loc.subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    {loc.address.map((a, j) => (
                      <p key={j} className="text-gray-600 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        {a}
                      </p>
                    ))}
                    <p className="text-gray-600 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      {loc.phone}
                    </p>
                  </div>
                  {/* Adicionado link para abrir o mapa no Google Maps */}
                  <Button asChild className={`w-full ${loc.btnClass} text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <a href={loc.mapLink} target="_blank" rel="noopener noreferrer">
                    Ver no Google Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Removed all other footer content */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 Kopu. Todos os direitos reservados.</p>
            <div className="flex space-x-6 text-sm">
            <span className="text-gray-400 text-sm">CNPJ: 20.621.038/0001-99</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}