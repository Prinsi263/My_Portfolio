"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "College Project - GETMYPASS",
    description:
    "A modern event pass management platform built for my final year project. Developed a full-stack web application with features like event listings, online ticket booking, secure user authentication, and barcode-enabled e-passes. The platform ensures seamless event access through one-time scannable QR codes.",
    image: "/home.png?height=800&width=800",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind Css"],
    demoLink: "https://get-my-pass.vercel.app/",

    githubLink: "#",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-20 md:py-28 bg-background px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="transition-all duration-300"
            >
              <Card className="overflow-hidden h-full flex flex-col border-2 border-border hover:border-primary/20">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-4 sm:p-6">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

     
      </div>
    </section>
  )
}

