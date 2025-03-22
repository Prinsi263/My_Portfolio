"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { FaAws } from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiPython,

  SiCplusplus,
  SiMysql,
  SiPhp,
  SiDotnet,
} from "react-icons/si"

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
 
  { name: "Python", icon: SiPython, color: "text-blue-600" },
  
  { name: "C++", icon: SiCplusplus, color: "text-blue-700" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
 
  { name: "SQL", icon: SiMysql, color: "text-orange-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
 
  { name: "PHP", icon: SiPhp, color: "text-purple-600" },
  { name: ".NET", icon: SiDotnet, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
 
  { name: "Figma", icon: SiFigma, color: "text-purple-500" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/50 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-card hover:bg-card/80 rounded-xl p-4 sm:p-6 text-center shadow-md transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <skill.icon className={`text-3xl sm:text-4xl ${skill.color}`} />
              </div>
              <h3 className="text-sm sm:text-base font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {[
                { name: "Frontend Development", percentage: 80 },
                { name: "Backend Development", percentage: 50 },
                { name: "UI/UX Design", percentage: 70 },
                { name: "Database Management", percentage: 50 },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { name: "Communication", percentage: 80 },
                { name: "Teamwork", percentage: 85 },
                { name: "Problem Solving", percentage: 75 },
                { name: "Time Management", percentage: 70 },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3 sm:mb-4">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          className="text-muted stroke-current"
                          strokeWidth="8"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                        />
                        <motion.circle
                          className="text-primary stroke-current"
                          strokeWidth="8"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.percentage / 100)}`}
                          initial={{ strokeDashoffset: `${2 * Math.PI * 40}` }}
                          animate={
                            isInView ? { strokeDashoffset: `${2 * Math.PI * 40 * (1 - skill.percentage / 100)}` } : {}
                          }
                          transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm sm:text-lg font-semibold">{skill.percentage}%</span>
                      </div>
                    </div>
                    <h4 className="text-sm sm:text-base text-center">{skill.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

