'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaFlask, FaAtom, FaVial } from 'react-icons/fa'
import Header from './components/Header'
import Footer from './components/Footer'
import MoleculeBackground from './components/MoleculeBackground'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const featuredProducts = [
  { name: 'Reactive Dyes', description: 'High-quality dyes for cotton and other cellulosic fibers', icon: FaFlask },
  { name: 'Direct Dyes', description: 'Versatile dyes for cotton, wool, and silk', icon: FaAtom },
  { name: 'Acid Dyes', description: 'Specialized dyes for wool, silk, and nylon', icon: FaVial },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-green-50">
      <MoleculeBackground />
      {/* <Header /> */}
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                Innovative Chemical Solutions for a Colorful World
              </h1>
              <p className="text-xl mb-8 text-gray-700">Discover our range of high-quality dyes and chemical products</p>
              <Button asChild size="lg">
                <Link href="/our-products">Explore Our Products</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-white bg-opacity-50 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
                      <CardTitle className="flex items-center">
                        <product.icon className="mr-2" />
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="mb-4">{product.description}</p>
                      <Link 
                        href={`/our-products/${product.name.toLowerCase().replace(' ', '-')}`} 
                        className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                      >
                        Learn more <FaArrowRight className="ml-2" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">About ChemInnovate</h2>
              <p className="text-lg mb-8 text-gray-700">
                With over two decades of experience, ChemInnovate has been at the forefront of chemical innovation. 
                We specialize in developing and manufacturing high-purity dyes and chemical products for a wide range of applications, 
                from textiles to advanced research laboratories.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="py-16 bg-white bg-opacity-50 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Quality</h2>
              <p className="text-lg mb-8 text-gray-700">
                At ChemInnovate, quality is not just a goal—it's a fundamental part of our process. 
                We adhere to rigorous quality control measures and maintain certifications that demonstrate our commitment to excellence.
              </p>
              <Button asChild variant="outline">
                <Link href="/quality">Learn About Our Quality Assurance</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Products?</h2>
              <p className="text-xl mb-8">Contact us today to discuss how our chemical solutions can meet your needs.</p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

