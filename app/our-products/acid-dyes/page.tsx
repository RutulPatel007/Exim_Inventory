'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaIndustry } from 'react-icons/fa'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const advantages = [
  'Excellent leveling properties',
  'Bright and vibrant colors',
  'Good light and wash fastness',
  'Wide range of shades available',
  'Suitable for various protein fibers',
]

const applications = [
  'Wool dyeing',
  'Silk dyeing',
  'Nylon and other polyamides',
  'Leather coloration',
  'Food coloring (certain acid dyes)',
]

export default function AcidDyesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Acid Dyes
      </motion.h1>
      <motion.p 
        className="mb-8 text-lg text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our acid dyes are specially formulated for dyeing protein fibers like wool, 
        silk, and nylon. They provide vibrant colors with excellent leveling properties 
        and good fastness to light and washing.
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
        <h2 className="text-2xl font-semibold mb-4">Dyeing Process</h2>
        <p>
          Acid dyes are applied in an acidic dyebath, typically at a pH between 2 and 6. 
          The dye molecules form ionic bonds with the amino groups of the fiber, resulting 
          in excellent color fastness. The dyeing process can be controlled by adjusting 
          the pH, temperature, and auxiliary chemicals to achieve the desired shade and levelness.
        </p>
      </motion.div>
    </div>
  )
}

