"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 md:py-28 bg-background px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image src="/mypic.jpg?height=800&width=600" alt="Profile" fill className="object-cover" />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
           <h3 className="text-2xl font-semibold">Who am I?</h3>
<p className="text-muted-foreground">
  I am a recent Bachelor of Computer Applications (BCA) graduate with a strong interest in web development. While I may not have formal industry experience yet, I am highly motivated and ready to take on real-world challenges.
</p>
<p className="text-muted-foreground">
  I am passionate about learning and continuously improving my skills. I am eager to work on innovative projects, adapt to new technologies, and grow as a developer. I am confident that my dedication and willingness to learn will help me make a valuable contribution wherever I go.
</p>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-medium">Name:</h4>
                <p className="text-muted-foreground">Prinsi Pujara</p>
              </div>
              <div>
                <h4 className="font-medium">Email:</h4>
                <p className="text-muted-foreground">prithakkar263@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium">Education:</h4>
                <p className="text-muted-foreground">BCA Graduate</p>
              </div>
              <div>
                <h4 className="font-medium">Location:</h4>
                <p className="text-muted-foreground">Ahmedabad, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

