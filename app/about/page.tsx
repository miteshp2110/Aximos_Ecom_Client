"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image src="/placeholder.svg?height=600&width=1920" alt="About Us" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>

          <div className="container mx-auto px-4 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Crafting premium digital assets for discerning creators since 2015.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  At Company Name, we're dedicated to providing the highest quality digital assets to empower creators,
                  designers, and businesses to achieve their creative vision without compromise.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  We believe that exceptional digital resources should be accessible to all creative professionals,
                  regardless of their project scale or budget. Our curated collection represents the pinnacle of digital
                  craftsmanship, meticulously designed to elevate any project.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our team of expert designers and developers work tirelessly to ensure that every asset in our
                  collection meets our rigorous standards for quality, usability, and aesthetic excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <Image src="/placeholder.svg?height=800&width=600" alt="Our Mission" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg max-w-2xl mx-auto">
                We've helped thousands of creators bring their vision to life with our premium digital assets.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">5K+</p>
                <p className="text-lg">Digital Assets</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">10K+</p>
                <p className="text-lg">Happy Customers</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</p>
                <p className="text-lg">Countries Served</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">8+</p>
                <p className="text-lg">Years of Excellence</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The talented individuals behind our premium digital assets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Some Name",
                  role: "Founder & Creative Director",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Some Name",
                  role: "Lead Designer",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Some Name",
                  role: "3D Modeling Specialist",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Some Name",
                  role: "UI/UX Designer",
                  image: "/placeholder.svg?height=400&width=400",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Creative Projects?</h2>
              <p className="text-lg mb-8">
                Explore our collection of premium digital assets and take your work to the next level.
              </p>
              <Button asChild size="lg">
                <Link href="/products">Browse Our Collection</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

