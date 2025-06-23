"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { X, ChevronLeft, ChevronRight, Star, Truck, Shield, Award, Palette, Sparkles, TrendingUp, MessageCircle } from "lucide-react"

interface PriceTier {
  quantity: number
  price: number
  label: string
}

export interface ProductModalProps {
  product: {
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
  } | null
  isOpen: boolean
  onClose: () => void
  selectedTierIndex?: number | null;
  allImages?: string[];
}

export function ProductModal({ product, isOpen, onClose, selectedTierIndex, allImages }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const priceTiers = product?.priceTiers || [
    { quantity: 25, price: 36.54, label: "25 unid." },
    { quantity: 100, price: 34.8, label: "100 unid." },
    { quantity: 500, price: 32.36, label: "500 unid." },
    { quantity: 1000, price: 29.9, label: "1000 unid." },
  ];
  const defaultTier = Math.floor((priceTiers.length - 1) / 2);
  const [activeTier, setActiveTier] = useState<number>(typeof selectedTierIndex === 'number' ? selectedTierIndex : defaultTier);
  const [currentTierPage, setCurrentTierPage] = useState(0);
  const tiersPerPage = {
    mobile: 2,
    desktop: priceTiers.length
  };
  const totalTierPages = Math.ceil(priceTiers.length / tiersPerPage.mobile);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0)
    setSelectedColor(0)
    setActiveTier(typeof selectedTierIndex === 'number' ? selectedTierIndex : defaultTier)
  }, [product?.id, selectedTierIndex])

  useEffect(() => {
    if (typeof selectedTierIndex === 'number') {
      setActiveTier(selectedTierIndex);
    } else {
      setActiveTier(defaultTier);
    }
  }, [selectedTierIndex, product]);

  if (!isOpen || !product) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allProductImages.length)
  }

  const prevImage = () => {
     setCurrentImageIndex((prev) => (prev - 1 + allProductImages.length) % allProductImages.length)
  }

  const handleColorSelect = (colorIndex: number) => {
    setSelectedColor(colorIndex) // Mantém o swatch da cor ativa

    if (product && product.colors && product.colors[colorIndex]) {
      const selectedColorData = product.colors[colorIndex]

      if (selectedColorData.image) {
        // Se a cor especifica uma URL de imagem
        const targetImageIndex = allProductImages.findIndex(img => img === selectedColorData.image)
        if (targetImageIndex !== -1) {
          setCurrentImageIndex(targetImageIndex)
        } else {
          // Fallback: URL da imagem específica da cor fornecida mas não encontrada em allProductImages.
          // Isso indica uma inconsistência nos dados. Padrão para a imagem principal do produto.
          console.warn(`Imagem para a cor ${selectedColorData.hex} (${selectedColorData.name || ''}) não encontrada nas imagens do produto. Usando imagem principal.`)
          setCurrentImageIndex(0)
        }
      } else {
        // Se a cor NÃO especifica uma imagem única, usa a imagem principal do produto.
        setCurrentImageIndex(0)
      }
    }
  }

  // Use as imagens recebidas por prop, se existirem, senão use as imagens do produto, senão a imagem principal
  const allProductImages = (allImages && allImages.length > 0)
    ? allImages
    : (product?.images && product.images.length > 0)
      ? product.images
      : product?.image
        ? [product.image]
        : [];

  const nextTierPage = () => {
    setCurrentTierPage((prev) => {
      const nextPage = prev + 0.5;
      const maxPage = (priceTiers.length - tiersPerPage.mobile) * 0.5;
      return nextPage > maxPage ? 0 : nextPage;
    });
  };

  const prevTierPage = () => {
    setCurrentTierPage((prev) => {
      const prevPage = prev - 0.5;
      const maxPage = (priceTiers.length - tiersPerPage.mobile) * 0.5;
      return prevPage < 0 ? maxPage : prevPage;
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-7xl max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full overflow-hidden">
          {/* Image Gallery */}
          <div className="relative bg-[#FFFFFF] p-4 lg:p-6 flex flex-col items-center justify-center">
            {/* Badges absolutas no canto superior esquerdo da galeria */}
            <div className="absolute top-0 left-0 z-10 flex flex-col items-start space-y-3 p-4">
              {product.isNew ? (
                <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 text-sm font-bold shadow-xl border-0 animate-pulse backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  NOVO
                </Badge>
              ) : product.isBestSeller ? (
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-sm font-bold shadow-xl border-0 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  MAIS VENDIDO
                </Badge>
              ) : null}
            </div>
            <div className="relative w-full h-80 sm:h-96 lg:h-[500px] xl:h-[600px] rounded-xl overflow-hidden bg-white">
              <Image
                src={allProductImages[currentImageIndex] || "/placeholder.svg?height=500&width=500"}
                alt={product.name}
                fill
                className="object-contain"
              />

              {/* Image Navigation */}
              {allProductImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {allProductImages.length > 1 && (
              <div className="w-full flex justify-center space-x-2 mt-4 overflow-x-auto pb-2">
                {allProductImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      currentImageIndex === index ? "border-green-500" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg?height=64&width=64"}
                      alt={`${product.name} ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 lg:p-6 space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 overflow-hidden">
                      <div className="lg:hidden">
                        <h1 className="text-2xl font-bold text-gray-900 py-1 truncate">
                          {product.name}
                        </h1>
                      </div>
                      <h1 className="hidden lg:block text-3xl font-bold text-gray-900">
                        {product.name}
                      </h1>
                    </div>

                    {/* Compact badges for header */}
                    <div className="flex flex-row space-x-2 ml-4">
                      {product.isNew ? (
                        <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-2 py-1 text-xs font-bold">
                          <Sparkles className="w-3 h-3 mr-1" />
                          NOVO
                        </Badge>
                      ) : product.isBestSeller ? (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 text-xs font-bold">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          TOP
                        </Badge>
                      ) : null}
                    </div>
                  </div>

                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < product.rating! ? "fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviewCount || 0} avaliações)
                      </span>
                    </div>
                  )}

                  {/* Enhanced Pricing Tiers */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Preços por Quantidade</h3>
                    
                    {/* Mobile Carousel (hidden on desktop) */}
                    <div className="lg:hidden relative mb-6">
                      <div className="flex items-center">
                        <button
                          onClick={prevTierPage}
                          className="absolute left-0 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="overflow-hidden mx-8">
                          <div 
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ 
                              transform: `translateX(-${currentTierPage * 50}%)`,
                              width: `${priceTiers.length * 50}%`
                            }}
                          >
                            {priceTiers.map((tier, tierIndex) => (
                              <div
                                key={`${tier.quantity}-${tierIndex}`}
                                className="w-1/2 px-1"
                              >
                                <button
                                  type="button"
                                  className={`w-full text-center p-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                                    activeTier === tierIndex
                                      ? "border-green-600 bg-green-100 text-green-900"
                                      : "border-gray-200 bg-white text-gray-900 hover:border-gray-300"
                                  }`}
                                  onClick={() => setActiveTier(tierIndex)}
                                >
                                  <div className="text-xs font-medium text-gray-600 mb-1">{tier.label}</div>
                                  <div className="text-sm font-bold text-gray-900">
                                    R$ {tier.price.toFixed(2).replace(".", ",")}
                                  </div>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={nextTierPage}
                          className="absolute right-0 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Desktop Grid (hidden on mobile) */}
                    <div className="hidden lg:grid gap-2 mb-3" style={{ gridTemplateColumns: `repeat(${priceTiers.length}, minmax(0, 1fr))` }}>
                      {priceTiers.map((tier, tierIndex) => (
                        <button
                          key={`${tier.quantity}-${tierIndex}`}
                          type="button"
                          className={`text-center p-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                            activeTier === tierIndex
                              ? "border-green-600 bg-green-100 text-green-900"
                              : "border-gray-200 bg-white text-gray-900 hover:border-gray-300"
                          }`}
                          onClick={() => setActiveTier(tierIndex)}
                        >
                          <div className="text-xs font-medium text-gray-600 mb-1">{tier.label}</div>
                          <div className="text-sm font-bold text-gray-900">
                            R$ {tier.price.toFixed(2).replace(".", ",")}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Selected Price Highlight */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-green-700 font-medium">Preço por unidade</span>
                          <span className="text-lg font-bold text-green-800">
                            R$ {priceTiers[activeTier]?.price.toFixed(2).replace(".", ",")}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-green-700 font-medium">Quantidade</span>
                          <span className="text-green-800 font-semibold">
                            × {priceTiers[activeTier]?.quantity} unidades
                          </span>
                        </div>
                        <div className="flex items-center justify-between border-t border-green-100 pt-2 mt-2">
                          <span className="text-base font-bold text-green-900">Total Estimado</span>
                          <span className="text-xl font-extrabold text-green-900">
                            R$ {((priceTiers[activeTier]?.price || 0) * (priceTiers[activeTier]?.quantity || 1))
                              .toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Descrição</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description ||
                      `${product.name} de alta qualidade, perfeito para personalização corporativa. Ideal para brindes promocionais e eventos empresariais. Material resistente e durável, com excelente área de impressão para sua marca.`}
                  </p>
                </div>

                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Palette className="w-5 h-5 mr-2" />
                      Cores Disponíveis
                    </h3>
                    <div className="flex space-x-2">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => handleColorSelect(index)}
                          className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                            selectedColor === index
                              ? "border-gray-800 scale-110"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name ? color.name : `Cor ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Características</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specifications */}
                {product.specifications && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Especificações</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                          <span className="font-medium text-gray-700">{key}:</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Delivery Info */}
                <div className="bg-green-50/60 border border-green-200 rounded-xl p-4 my-6 text-green-700 overflow-hidden">
                  {/* Desktop version */}
                  <div className="hidden sm:flex flex-row items-center justify-center gap-8">
                    <div className="flex items-center gap-2">
                      <span className="inline-block"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 17V7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M16 8h2.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H16"/><path d="M7 12h4"/></svg></span>
                      <div>
                        <div className="font-semibold">Entrega</div>
                        <div className="text-green-600 text-sm">{product.deliveryTime || "7 dias úteis"}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5Z"/><path d="M12 9.5v3l2 2"/></svg></span>
                      <div>
                        <div className="font-semibold">Garantia</div>
                        <div className="text-green-600 text-sm">Qualidade assegurada</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 3v2.25"/><path d="M12 18.75V21"/><path d="M4.5 7.5l1.5 1.5"/><path d="M18 16.5l1.5 1.5"/><path d="M3 12h2.25"/><path d="M18.75 12H21"/><path d="M4.5 16.5l1.5-1.5"/><path d="M18 7.5l1.5-1.5"/><circle cx="12" cy="12" r="5.25"/></svg></span>
                      <div>
                        <div className="font-semibold">Personalização</div>
                        <div className="text-green-600 text-sm">Inclusa no preço</div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile version with infinite marquee */}
                  <div className="sm:hidden modal-marquee-container">
                    <div className="modal-marquee">
                      <div className="inline-flex gap-8">
                        {/* Primeiro conjunto de itens */}
                        <div className="flex items-center gap-8 min-w-max">
                          <div className="flex items-center gap-2">
                            <span className="inline-block">
                              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M3 17V7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>
                                <path d="M16 8h2.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H16"/>
                                <path d="M7 12h4"/>
                              </svg>
                            </span>
                            <div>
                              <div className="font-semibold">Entrega</div>
                              <div className="text-green-600 text-sm">{product.deliveryTime || "7 dias úteis"}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="inline-block">
                              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5Z"/>
                                <path d="M12 9.5v3l2 2"/>
                              </svg>
                            </span>
                            <div>
                              <div className="font-semibold">Garantia</div>
                              <div className="text-green-600 text-sm">Qualidade assegurada</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="inline-block">
                              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M12 3v2.25M12 18.75V21M4.5 7.5l1.5 1.5M18 16.5l1.5 1.5M3 12h2.25M18.75 12H21M4.5 16.5l1.5-1.5M18 7.5l1.5-1.5"/>
                                <circle cx="12" cy="12" r="5.25"/>
                              </svg>
                            </span>
                            <div>
                              <div className="font-semibold">Personalização</div>
                              <div className="text-green-600 text-sm">Inclusa no preço</div>
                            </div>
                          </div>
                        </div>
                        {/* Duplicata para scroll infinito */}
                        <div className="flex items-center gap-8 min-w-max">
                          <div className="flex items-center gap-2">
                            <span className="inline-block">
                              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M3 17V7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>
                                <path d="M16 8h2.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H16"/>
                                <path d="M7 12h4"/>
                              </svg>
                            </span>
                            <div>
                              <div className="font-semibold">Entrega</div>
                              <div className="text-green-600 text-sm">{product.deliveryTime || "7 dias úteis"}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="inline-block">
                              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5Z"/>
                                <path d="M12 9.5v3l2 2"/>
                              </svg>
                            </span>
                            <div>
                              <div className="font-semibold">Garantia</div>
                              <div className="text-green-600 text-sm">Qualidade assegurada</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="inline-block">
                              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M12 3v2.25M12 18.75V21M4.5 7.5l1.5 1.5M18 16.5l1.5 1.5M3 12h2.25M18.75 12H21M4.5 16.5l1.5-1.5M18 7.5l1.5-1.5"/>
                                <circle cx="12" cy="12" r="5.25"/>
                              </svg>
                            </span>
                            <div>
                              <div className="font-semibold">Personalização</div>
                              <div className="text-green-600 text-sm">Inclusa no preço</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons - Fixed at bottom */}
            <div className="border-t bg-white p-4 lg:p-6 mt-auto">
              <div className="space-y-3">
                {/* Desktop Budget Button (hidden on mobile) */}
                <div className="hidden lg:block">
                  {product.budgetUrl ? (
                    <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 text-xl rounded-xl transition-all duration-300">
                      <a href={product.budgetUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Solicitar Orçamento {priceTiers[activeTier]?.label ? `• ${priceTiers[activeTier]?.label}` : ''}
                      </a>
                    </Button>
                  ) : (
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 text-xl rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Solicitar Orçamento {priceTiers[activeTier]?.label ? `• ${priceTiers[activeTier]?.label}` : ''}
                    </Button>
                  )}
                </div>

                {/* Mobile Budget Button */}
                <div className="lg:hidden">
                  {product.budgetUrl ? (
                    <Button
                      asChild
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 text-base sm:text-xl rounded-xl transition-all duration-300"
                    >
                      <a href={product.budgetUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Solicitar Orçamento {priceTiers[activeTier]?.label ? `• ${priceTiers[activeTier]?.label}` : ''}
                      </a>
                    </Button>
                  ) : (
                    <Button
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 text-base sm:text-xl rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Solicitar Orçamento {priceTiers[activeTier]?.label ? `• ${priceTiers[activeTier]?.label}` : ''}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}