"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      const sections = document.querySelectorAll("section[id]")

      if (window.scrollY < 100) {
        setActiveSection("home")
        return
      }

      sections.forEach((section) => {
        const sec = section as HTMLElement
        const sectionTop = sec.offsetTop - 100
        const sectionHeight = sec.offsetHeight
        const sectionId = sec.getAttribute("id") || ""
      
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
      
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false)
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("#home")} className="text-xl font-bold">
            <span className="text-primary">Prinsi</span>Pujara
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.slice(1) ? "text-primary" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <ThemeToggle />

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>

            <Button asChild className="hidden md:inline-flex">
              <a href="/Prinsi.CV.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-50 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={() => {
                    scrollToSection("#home")
                    setMobileMenuOpen(false)
                  }}
                  className="text-xl font-bold"
                >
                  <span className="text-primary">Prinsi</span>Pujara
                </button>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex flex-col space-y-6 text-center">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      activeSection === item.href.slice(1) ? "text-primary" : ""
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              <div className="mt-auto flex justify-center pt-8">
                <Button asChild onClick={() => setMobileMenuOpen(false)}>
                  <a href="/Prinsi.CV.pdf" download>Download CV</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
