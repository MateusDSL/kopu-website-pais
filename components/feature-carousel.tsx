"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  desc: string
}

interface FeatureCarouselProps {
  features: FeatureCardProps[]
}

interface TouchState {
  startX: number
  startY: number
  currentX: number
  currentY: number
  isDragging: boolean
  startTime: number
}

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4 md:items-start md:flex-row md:text-left md:space-x-4 md:space-y-0">
        {icon}
        <div>
          <h3 className="font-bold text-xl mb-1 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{desc}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function FeatureCarousel({ features }: FeatureCarouselProps) {
  const itemsPerView = 1 // Only one feature card visible at once on mobile

  // Number of items to clone from the end and prepend, and from the beginning and append
  const clonesBefore = itemsPerView
  const clonesAfter = itemsPerView

  const extendedFeatures = useMemo(() => {
    if (!features || features.length === 0) return []
    const clonedStart = features.slice(-clonesBefore)
    const clonedEnd = features.slice(0, clonesAfter)
    return [...clonedStart, ...features, ...clonedEnd]
  }, [features, clonesBefore, clonesAfter])

  const [currentIndex, setCurrentIndex] = useState(clonesBefore) // Start at the first real item's index in extendedFeatures
  const [touchState, setTouchState] = useState<TouchState>({
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    isDragging: false,
    startTime: 0,
  })
  const [noTransition, setNoTransition] = useState(false) // State to control instant jumps

  const carouselContainerRef = useRef<HTMLDivElement>(null) // Outer container with overflow-hidden
  const carouselTrackRef = useRef<HTMLDivElement>(null) // Inner container with flex-nowrap and transform

  const [itemWidth, setItemWidth] = useState(0) // Width of a single feature card + gap

  // Calculate item width dynamically
  const calculateItemWidth = useCallback(() => {
    if (carouselTrackRef.current && carouselTrackRef.current.children.length > 0) {
      const firstCard = carouselTrackRef.current.children[0] as HTMLElement
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth
        const gap = 24 // From gap-6 (1.5rem)
        setItemWidth(cardWidth + gap)
      }
    }
  }, [])

  useEffect(() => {
    calculateItemWidth() // Initial calculation
    const handleResize = () => calculateItemWidth()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [calculateItemWidth])

  // Calculate transformX based on currentIndex and itemWidth
  const transformX = -currentIndex * itemWidth

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIdx = prevIndex + 1
      if (nextIdx >= extendedFeatures.length - clonesAfter) {
        // If we are about to go into the cloned section at the end
        // Let the animation play to the cloned item, then jump back
        setTimeout(() => {
          setNoTransition(true) // Disable transition for the jump
          setCurrentIndex(clonesBefore) // Jump to the start of real items
          setTimeout(() => setNoTransition(false), 50) // Re-enable transition after a tiny delay
        }, 500) // Match this with CSS transition duration
        return nextIdx
      }
      return nextIdx
    })
  }, [extendedFeatures.length, clonesAfter, clonesBefore])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIdx = prevIndex - 1
      if (nextIdx < clonesBefore) {
        // If we are about to go into the cloned section at the beginning
        // Let the animation play to the cloned item, then jump back
        setTimeout(() => {
          setNoTransition(true) // Disable transition for the jump
          setCurrentIndex(extendedFeatures.length - clonesAfter - 1) // Jump to the end of real items
          setTimeout(() => setNoTransition(false), 50) // Re-enable transition after a tiny delay
        }, 500) // Match this with CSS transition duration
        return nextIdx
      }
      return nextIdx
    })
  }, [extendedFeatures.length, clonesAfter, clonesBefore])

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
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!touchState.isDragging) return

      const touch = e.touches[0]
      const deltaX = Math.abs(touch.clientX - touchState.startX)
      const deltaY = Math.abs(touch.clientY - touchState.startY)

      // If horizontal movement is greater than vertical, prevent default scroll
      if (deltaX > deltaY && deltaX > 10) {
        e.preventDefault()
      }

      setTouchState((prev) => ({
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

    // Determine if it's a valid swipe (horizontal movement > vertical movement and sufficient distance/velocity)
    const isValidSwipe = Math.abs(deltaX) > deltaY && (Math.abs(deltaX) > 50 || velocity > 0.3)

    if (isValidSwipe) {
      if (deltaX > 0) {
        // Swipe right - go to previous slide
        prevSlide()
      } else {
        // Swipe left - go to next slide
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
  }, [touchState, nextSlide, prevSlide])

  return (
    <div className="flex items-center gap-4" ref={carouselContainerRef}>
      {/* Botão Anterior - Lateral Externa Esquerda */}
      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        className="flex-shrink-0 w-12 h-12 rounded-full bg-white hover:bg-green-50 border-gray-300 hover:border-green-500 hover:text-green-500 shadow-lg transition-all duration-300"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* Carousel Wrapper with overflow-hidden */}
      <div className="relative flex-1 overflow-hidden pb-4">
        {/* Touch indicator */}
        {touchState.isDragging && (
          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">
                {touchState.currentX - touchState.startX > 0 ? "← Anterior" : "Próximo →"}
              </span>
            </div>
          </div>
        )}

        {/* Carousel Track - holds all cards and gets animated */}
        <div
          ref={carouselTrackRef}
          className="flex flex-nowrap gap-6"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `translateX(${transformX}px)`,
            transition: noTransition ? "none" : "transform 0.5s ease-in-out",
          }}
        >
          {extendedFeatures.map((feature, index) => (
            <div
              key={index} // Use index as key for cloned items
              className={`flex-shrink-0 w-full ${
                touchState.isDragging ? "pointer-events-none" : ""
              }`}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      {/* Botão Próximo - Lateral Externa Direita */}
      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        className="flex-shrink-0 w-12 h-12 rounded-full bg-white hover:bg-green-50 border-gray-300 hover:border-green-500 hover:text-green-500 shadow-lg transition-all duration-300"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}