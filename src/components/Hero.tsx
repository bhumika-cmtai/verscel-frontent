'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Award, Users, Clock, Shield } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Welcome to Hanuman Builders",
      subtitle: "Building Strength, Shaping the Future",
      description:
        "At HCT, we don’t just construct buildings — Our mission is to deliver world-class, durable, and sustainable infrastructure that drives growth.",
      image: "/hanumanbestfirst.png",
      cta: "Discover Our Legacy"
    },
    {
      title: "Innovation Meets Craftsmanship",
      subtitle: "Where Modern Engineering Inspires Excellence",
      description:
        "From residential complexes to industrial landmarks, HCT blends cutting-edge technology with expert craftsmanship — ensuring every project stands as a symbol of precision and trust.",
      image: "/hanumanbestsecond.png",
        cta: "Explore Our Projects"
    },
    {
      title: "Your Vision, Our Commitment",
      subtitle: "Trusted Partners in Every Foundation",
      description:
        "We go beyond construction — we build relationships. At HCT, we transform your vision into reality with integrity, transparency, and a commitment to excellence that lasts for generations.",
      image: "/hanumanbestthird.png",
        cta: "Request a Consultation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const features = [
    { icon: Award, text: "Quality Assured" },
    { icon: Users, text: "Expert Team" },
    { icon: Clock, text: "On-Time Delivery" },
    { icon: Shield, text: "Licensed & Insured" }
  ]

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      {/* 1. Background Logo Layer: Centered with low opacity */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="relative w-60 h-60 sm:w-96 sm:h-96 opacity-75 ">
          <Image
            src="/HANUMAN.png"
            alt="Hanuman Builders Background Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* 2. Content Layer: Sits on top of the background logo */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* 3. Restored two-column grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column: Text Content */}
            <div className="text-white space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg sm:text-xl text-orange-400 font-semibold">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-lg">
                  {slides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-200 group text-sm sm:text-base"
                >
                  {slides[currentSlide].cta}
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400 flex-shrink-0" />
                    <span className="text-white font-medium text-sm sm:text-base">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column: Intentionally empty */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-orange-500 w-6 sm:w-8'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 z-30">
        <div className="animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white bg-opacity-50 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}