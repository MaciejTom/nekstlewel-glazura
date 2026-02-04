"use client"

import Image from "next/image"
import { whyUsContent } from "@/lib/content"

const iconImages = [
  "/Whisk_0edb4d1d534f5ca99404fd0a8b8d191bdr.jpeg",
  "/Whisk_74081e66ffb6fd380ca4fc29dbb13beddr.jpeg",
  "/Whisk_e614751f6180717a8be44bf7a0d3880edr.jpeg"
]

export function WhyUsIcons() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {whyUsContent.headline}
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {whyUsContent.features.map((item, index) => (
            <div
              key={index}
              className="group relative p-4 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src={iconImages[index]}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>

              {item.memorable && (
                <p className="mt-4 text-sm text-accent font-medium border-l-2 border-accent pl-3 text-left">
                  {item.memorable}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
