'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaIndustry } from 'react-icons/fa'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const advantages = [
  'High purity and consistent quality',
  'Wide range of intermediates available',
  'Custom synthesis capabilities',
  'Compliance with international standards',
  'Technical support for integration',
]

const applications = [
  'Reactive dye synthesis',
  'Direct dye production',
  'Acid dye manufacturing',
  'Pigment synthesis',
  'Pharmaceutical intermediates',
]

export default function DyesIntermediatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dyes Intermediate
      </motion.h1>
      <motion.p 
        className="mb-8 text-lg text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We offer a wide range of high-quality dye intermediates, which are crucial 
        components in the synthesis of various dyes. Our intermediates ensure 
        consistent quality and performance in dye production.
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
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p>
          At ChemInnovate, we are committed to providing high-quality dye intermediates 
          that meet the evolving needs of the dye industry. Our state-of-the-art 
          manufacturing facilities and rigorous quality control processes ensure that 
          our intermediates meet the highest standards of purity and performance. 
          We also offer custom synthesis services to meet specific requirements of our clients.
        </p>
      </motion.div>
    </div>
  )
}

