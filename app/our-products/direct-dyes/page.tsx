'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaIndustry } from 'react-icons/fa'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const advantages = [
  'Simple and economical dyeing process',
  'Good light fastness',
  'Wide range of bright colors',
  'Excellent color yield',
  'Suitable for various fiber types',
]

const applications = [
  'Cotton and other cellulosic fibers',
  'Viscose and rayon',
  'Linen and jute',
  'Silk and wool (in some cases)',
  'Paper dyeing',
]

export default function DirectDyesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Direct Dyes
      </motion.h1>
      <motion.p 
        className="mb-8 text-lg text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our direct dyes offer excellent color yield and are perfect for dyeing cotton, 
        rayon, and other cellulosic fibers. They are known for their simplicity of application 
        and good light fastness.
      </motion.p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaCheckCircle className="mr-2 text-green-500" />
                Advantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {advantages.map((advantage, index) => (
                  <li key={index}>{advantage}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaIndustry className="mr-2 text-blue-500" />
                Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {applications.map((application, index) => (
                  <li key={index}>{application}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>High affinity for cellulosic fibers</li>
          <li>Easy to apply with minimal equipment</li>
          <li>Cost-effective dyeing solution</li>
          <li>Wide range of shades available</li>
          <li>Good build-up properties</li>
        </ul>
      </motion.div>
    </div>
  )
}

