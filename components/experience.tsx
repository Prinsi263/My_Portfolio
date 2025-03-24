"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const experiences = [
  {
    title: "Aspiring Web Developer",
    company: "Open to Opportunities",
    period: "Currently Learning",
    description:
      "As a recent BCA graduate, I am actively learning and building projects to enhance my web development skills. I am passionate about frontend and backend technologies, and I am continuously improving my knowledge in frameworks like React, Next.js, and Node.js. I am eager to apply my skills in real-world projects and collaborate with professional teams.",
    type: "personal",
    
  },
  {
    title: "Bachelor of Computer Applications",
    company: "CHIMANBHAI PATEL INSTITUTE  (GUJARAT UNIVERSITY)",
    period: "2022 - 2025",
    description:
      "Specialized in Web Development. Graduated with distinction. Completed a project on developing 'GETMYPASS' – a website for online event pass booking.",
    type: "education",
  },
 
 
  {
    title: " HIGHER SECONDARY SCHOOL(12THCOMMERCE)",
    company: " K.B VAKIL HIGH SCHOOL, RADHANPUR ,PATAN-38534l",
    period: "MAR-2022",
    description:
      "Completed high school with Commerce as my major subject. Developed an interest in technology and web development during my studies.",
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

