"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const experiences = [
  {
    title: "Web Development Intern",
    company: "TechSolutions Inc.",
    period: "Jun 2023 - Aug 2023",
    description:
      "Assisted in developing responsive web applications. Learned about React and Next.js frameworks. Collaborated with the design team to implement UI components.",
    type: "work",
  },
  {
    title: "Bachelor of Computer Applications",
    company: "Delhi University",
    period: "2020 - 2023",
    description:
      "Specialized in Web Technologies and Software Development. Graduated with distinction. Completed capstone project on E-Learning Platform Development.",
    type: "education",
  },
  {
    title: "Web Development Bootcamp",
    company: "Coding Academy",
    period: "Jan 2023 - Mar 2023",
    description:
      "Completed an intensive 3-month bootcamp focused on full-stack web development. Learned modern JavaScript frameworks, database management, and deployment strategies.",
    type: "education",
  },
  {
    title: "Hackathon Participant",
    company: "TechFest 2022",
    period: "Nov 2022",
    description:
      "Participated in a 48-hour hackathon focused on creating solutions for educational challenges. Developed a prototype for a student collaboration platform.",
    type: "award",
  },
  {
    title: "High School",
    company: "Delhi Public School",
    period: "2018 - 2020",
    description:
      "Completed high school with Computer Science as a major subject. Participated in coding competitions and tech events.",
    type: "education",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="py-20 md:py-28 bg-muted/50 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          My <span className="text-primary">Journey</span>
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 md:mb-8 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-[50%]" : "md:pl-12 md:ml-[50%]"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-6 ${
                  index % 2 === 0 ? "right-0 md:right-[-21px]" : "left-0 md:left-[-21px]"
                } w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10`}
              >
                {exp.type === "work" ? (
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                ) : exp.type === "education" ? (
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                ) : (
                  <Award className="h-5 w-5 text-primary-foreground" />
                )}
              </div>

              <Card className="md:max-w-[calc(100%-24px)] hover:border-primary/20 transition-colors">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg">{exp.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {exp.company} | {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                  <p className="text-muted-foreground text-sm sm:text-base">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

