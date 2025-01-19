'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaFlask, FaAtom, FaVial, FaCube, FaTint } from 'react-icons/fa'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import MoleculeBackground from '../components/MoleculeBackground'

const products = [
  { name: 'Reactive Dyes', description: 'High-quality dyes for cotton and other cellulosic fibers', link: '/our-products/reactive-dyes', icon: FaFlask, image: 'https://example.com/reactive-dyes.jpg' },
  { name: 'Direct Dyes', description: 'Versatile dyes for cotton, wool, and silk', link: '/our-products/direct-dyes', icon: FaAtom, image: 'https://example.com/direct-dyes.jpg' },
  { name: 'Acid Dyes', description: 'Specialized dyes for wool, silk, and nylon', link: '/our-products/acid-dyes', icon: FaVial, image: 'https://example.com/acid-dyes.jpg' },
  { name: 'Dyes Intermediate', description: 'Essential components for dye manufacturing', link: '/our-products/dyes-intermediate', icon: FaCube, image: 'https://example.com/dyes-intermediate.jpg' },
  { name: 'Solvent Dyes', description: 'Dyes for coloring plastics, fuels, and other non-polar materials', link: '/our-products/solvent-dyes', icon: FaTint, image: 'https://example.com/solvent-dyes.jpg' },
]

export default function OurProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-green-50">
      <MoleculeBackground />
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Products
        </motion.h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white bg-opacity-80 backdrop-blur-md overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
                  <CardTitle className="flex items-center">
                    <product.icon className="mr-2" />
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4">{product.description}</p>
                  <Link 
                    href={product.link}
                    className="text-blue-500 hover:text-blue-700 transition-colors inline-flex items-center"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
      
    </div>
  )
}

