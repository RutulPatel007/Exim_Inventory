'use client'

import { motion } from 'framer-motion'
import { FaFlask, FaUsers, FaTruck, FaAward } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MoleculeBackground from '../components/MoleculeBackground'

const features = [
  { icon: FaFlask, title: 'Innovation', description: 'Constantly developing new formulations' },
  { icon: FaUsers, title: 'Expertise', description: 'Team of experienced chemists and engineers' },
  { icon: FaTruck, title: 'Reliability', description: 'On-time delivery and consistent quality' },
  { icon: FaAward, title: 'Quality', description: 'ISO 9001 certified processes' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-green-50">
      <MoleculeBackground />
      {/* <Header /> */}
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Chemzones
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Founded in 2005, Chemzones has been at the forefront of chemical innovation for over two decades. Our passion for science and commitment to quality have made us a trusted partner in the industry.
            </p>
            <p>
              We specialize in developing and manufacturing high-purity chemicals for a wide range of applications, from industrial processes to cutting-edge research laboratories.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              To provide innovative, high-quality chemical solutions that empower our clients to push the boundaries of science and industry, while maintaining the highest standards of safety and environmental responsibility.
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

