"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Sparkles, TrendingUp, Eye } from "lucide-react"
import { ProductModal } from "./product-modal"

interface PriceTier {
  quantity: number
  price: number
  label: string
}

interface Product {
  id: number
  name: string
  image: string
  images?: string[]
  originalPrice: number
  salePrice: number
  priceTiers?: PriceTier[]
  discount?: number
  isNew?: boolean
  isBestSeller?: boolean
  description?: string
  features?: string[]
  specifications?: { [key: string]: string }
  colors?: { name?: string; hex: string; image?: string }[]
  materials?: string[]
  minQuantity?: number
  deliveryTime?: string
  rating?: number
  reviewCount?: number
  budgetUrl?: string;
}

interface ProductCarouselProps {
  title: string
  products: Product[]
  slidesToShow?: number
  autoPlaySpeed?: number
  initialAutoPlay?: boolean
  showControls?: boolean;
}

const defaultPriceTiers = [
  { quantity: 25, price: 36.54, label: "25 unid." },
  { quantity: 100, price: 34.8, label: "100 unid." },
  { quantity: 500, price: 32.36, label: "500 unid." },
];

// Componente separado para cada card do produto
interface ProductCardProps {
  product: Product
  selectedTierIndex: number
  onTierSelect: (tierIndex: number) => void
  onOpenModal: (product: Product, tierIndex?: number) => void
}

function ProductCard({ product, selectedTierIndex, onTierSelect, onOpenModal }: ProductCardProps) {
  const priceTiers = product.priceTiers || defaultPriceTiers

  return (
    <Card className="flex-shrink-0 w-full h-full shadow-[0_4px_8px_0_rgba(0,0,0,0.1)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.15)] transition-all duration-300 border-0 cursor-pointer hover:-translate-y-1">
      <CardContent className="p-0 h-full flex flex-col">
        <div 
          className="relative overflow-hidden rounded-t-lg h-80 flex-shrink-0" 
          onClick={() => onOpenModal(product)}
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-300"
            draggable={false}
            sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {product.isNew && (
              <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1.5 text-xs font-bold shadow-lg border-0 animate-pulse">
                <Sparkles className="w-3 h-3 mr-1" />
                NOVO
              </Badge>
            )}
            {product.isBestSeller && (
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 text-xs font-bold shadow-lg border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                MAIS VENDIDO
              </Badge>
            )}
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
            {/* Pricing Tiers */}
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-2 mb-3">
                {priceTiers.slice(0, 3).map((tier, tierIndex) => (                <button
                  key={`${tier.quantity}-${tierIndex}`}
                  type="button"
                  className={`text-center py-1.5 px-1.5 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                    selectedTierIndex === tierIndex
                      ? "border-green-600 bg-green-100 text-green-900"
                      : "border-gray-200 bg-white text-gray-900 hover:border-gray-300"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    onTierSelect(tierIndex)
                  }}
                >
                  <div className="text-xs font-medium text-gray-600 mb-0.5">{tier.label}</div>
                  <div className="text-sm font-extrabold text-gray-900">
                    R$ {tier.price.toFixed(2).replace(".", ",")}
                  </div>
                </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center">Preços unitários • Personalização inclusa</p>
            </div>
          </div>
          <Button
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            onClick={() => onOpenModal(product, selectedTierIndex)}
          >
            <Eye className="w-4 h-4" />
            Ver Produto
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

interface TouchState {
  startX: number
  startY: number
  currentX: number
  currentY: number
  isDragging: boolean
  startTime: number
}



export function ProductCarousel({
  title,
  products,
  slidesToShow = 4,
  autoPlaySpeed = 3000,
  initialAutoPlay = true,
  showControls = true,
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedTiers, setSelectedTiers] = useState<{ [productId: number]: number }>(() => {
    const initial: { [productId: number]: number } = {};
    products.forEach((p) => {
      initial[p.id] = 1; // Seleciona o índice 1 por padrão
    });
    return initial;
  })
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedTierIndex, setSelectedTierIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(initialAutoPlay)
  const [isPaused, setIsPaused] = useState(false)
  const [touchState, setTouchState] = useState<TouchState>({
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    isDragging: false,
    startTime: 0,
  })

  const carouselRef = useRef<HTMLDivElement>(null)
  // Para um carrossel infinito, ainda precisamos calcular quantos indicadores mostrar
  const maxIndex = products.length - 1

  // Estado para controlar a posição da transformação
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalItems = products.length;
  
  // Calcula a largura de cada card
  const getCardWidth = useCallback(() => {
    if (carouselRef.current) {
      return carouselRef.current.clientWidth / slidesToShow;
    }
    return 0;
  }, [slidesToShow]);

  // Navega para um índice específico usando transformações CSS
  const scrollToIndex = useCallback((index: number) => {
    // Normaliza o índice para garantir que esteja dentro dos limites
    let targetIndex = index;
    if (targetIndex < 0) {
      targetIndex = totalItems - 1;
    } else if (targetIndex >= totalItems) {
      targetIndex = 0;
    }
    
    const cardWidth = getCardWidth();
    const newTranslateX = -(targetIndex * cardWidth);
    
    setCurrentIndex(targetIndex);
    setTranslateX(newTranslateX);
  }, [getCardWidth, totalItems]);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    scrollToIndex(currentIndex + 1);
  }, [currentIndex, scrollToIndex])

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    scrollToIndex(currentIndex - 1);
  }, [currentIndex, scrollToIndex])

  // Efeito de transição para loop infinito
  useEffect(() => {
    // Executar transições apenas após a renderização inicial
    const cardWidth = getCardWidth();
    
    // Quando chega ao final, salta para o início sem animação
    if (currentIndex === 0 && translateX < -(totalItems - 2) * cardWidth) {
      setTimeout(() => {
        setIsTransitioning(false);
        setTranslateX(0);
      }, 300);
    }
    
    // Quando vai para antes do início, salta para o final sem animação
    if (currentIndex === totalItems - 1 && translateX > -cardWidth) {
      setTimeout(() => {
        setIsTransitioning(false);
        setTranslateX(-(totalItems - 1) * cardWidth);
      }, 300);
    }
  }, [currentIndex, getCardWidth, totalItems, translateX]);
  
  // Inicializa a largura dos cards após o componente ser montado
  useEffect(() => {
    getCardWidth();
    // Iniciar na primeira posição
    scrollToIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isAutoPlaying && !isPaused && !touchState.isDragging) {
      interval = setInterval(() => {
        nextSlide()
      }, autoPlaySpeed)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, isPaused, autoPlaySpeed, touchState.isDragging, nextSlide])

  // Touch event handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    setTouchState({
      startX: touch.clientX,
      startY: touch.clientY,
      currentX: touch.clientX,
      currentY: touch.clientY,
      isDragging: true,
      startTime: Date.now(),
    })
    setIsPaused(true)
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!touchState.isDragging) return

      const touch = e.touches[0]
      const deltaX = Math.abs(touch.clientX - touchState.startX)
      const deltaY = Math.abs(touch.clientY - touchState.startY)

      if (deltaX > deltaY && deltaX > 10) {
        e.preventDefault()
      }

      setTouchState((prev: TouchState) => ({
        ...prev,
        currentX: touch.clientX,
        currentY: touch.clientY,
      }))
    },
    [touchState.isDragging, touchState.startX, touchState.startY],
  )

  const handleTouchEnd = useCallback(() => {
    if (!touchState.isDragging) return

    const deltaX = touchState.currentX - touchState.startX
    const deltaY = Math.abs(touchState.currentY - touchState.startY)
    const deltaTime = Date.now() - touchState.startTime
    const velocity = Math.abs(deltaX) / deltaTime

    const isValidSwipe = Math.abs(deltaX) > deltaY && (Math.abs(deltaX) > 50 || velocity > 0.3)

    if (isValidSwipe) {
      setIsTransitioning(true); // Ativar a transição suave
      if (deltaX > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }

    setTouchState({
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      isDragging: false,
      startTime: 0,
    })

    setTimeout(() => setIsPaused(false), 1000)
  }, [touchState, nextSlide, prevSlide])

  const openModal = (product: Product, tierIndex?: number) => {
    const tierToSelect =
      typeof tierIndex === 'number'
        ? tierIndex
        : typeof selectedTiers[product.id] === 'number'
          ? selectedTiers[product.id]
          : undefined;
    setSelectedProduct(product);
    setSelectedTierIndex(typeof tierToSelect === "number" ? tierToSelect : null);
    setIsModalOpen(true);
    setIsPaused(true);
  }
  
  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
    setIsPaused(false)
  }

  return (
    <div
      className="pb-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-start gap-4 overflow-hidden">
        {/* Botão Anterior */}
        {showControls && (
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-white hover:bg-green-50 border-gray-300 hover:border-green-500 hover:text-green-500 shadow-lg transition-all duration-300 mt-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden flex-1">
          <div
            ref={carouselRef}
            className={`flex pb-4 ${isTransitioning ? 'transition-transform duration-300' : ''}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(${translateX}px)`,
              willChange: 'transform',
            }}
          >
            {/* Cards do carrossel */}
            {products.map((product) => {
              const selectedTier = selectedTiers[product.id] ?? 1;
              return (
                <div
                  key={product.id}
                  className="min-w-0 flex-shrink-0"
                  style={{ 
                    width: `${100 / slidesToShow}%`,
                    padding: '0.5rem'
                  }}
                >
                  <ProductCard
                    product={product}
                    selectedTierIndex={selectedTier}
                    onTierSelect={(tierIndex) => {
                      setSelectedTiers(prev => ({ ...prev, [product.id]: tierIndex }));
                    }}
                    onOpenModal={openModal}
                  />
                </div>
              );
            })}
            
            {/* Duplicated first items for infinite loop */}
            {products.slice(0, slidesToShow).map((product) => {
              const selectedTier = selectedTiers[product.id] ?? 1;
              return (
                <div
                  key={`clone-end-${product.id}`}
                  className="min-w-0 flex-shrink-0"
                  style={{ 
                    width: `${100 / slidesToShow}%`,
                    padding: '0.5rem'
                  }}
                >
                  <ProductCard
                    product={product}
                    selectedTierIndex={selectedTier}
                    onTierSelect={(tierIndex) => {
                      setSelectedTiers(prev => ({ ...prev, [product.id]: tierIndex }));
                    }}
                    onOpenModal={openModal}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Botão Próximo */}
        {showControls && (
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-white hover:bg-green-50 border-gray-300 hover:border-green-500 hover:text-green-500 shadow-lg transition-all duration-300 mt-6"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Indicadores - Bolinhas mais bonitas */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-green-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile swipe instruction */}
      <div className="md:hidden text-center mt-2">
        <p className="text-sm text-gray-500">👆 Deslize para navegar entre os produtos</p>
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        selectedTierIndex={selectedTierIndex} 
      />
    </div>
  )
}