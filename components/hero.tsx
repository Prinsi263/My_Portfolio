"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToNextSection = () => {
    if (scrollRef.current) {
      const nextSection = scrollRef.current.nextElementSibling
      nextSection?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      ref={scrollRef}
      className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <motion.div
        className="z-10 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
         Prinsi Pujara
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          BCA Graduate & Web Developer
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          A fresh graduate passionate about creating modern, responsive, and user-friendly web applications. Eager to
          learn and grow in the field of web development.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button size="lg" className="group">
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const contactSection = document.querySelector("#contact")
              contactSection?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Contact Me
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Button variant="ghost" size="icon" onClick={scrollToNextSection} className="animate-bounce rounded-full">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  )
}

