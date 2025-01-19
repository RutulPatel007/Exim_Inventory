'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt, FaClipboardCheck, FaCheckCircle, FaAward } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MoleculeBackground from '../components/MoleculeBackground'

const qualitySteps = [
  { icon: FaShieldAlt, title: 'Rigorous Testing', description: 'Every batch undergoes comprehensive analytical testing' },
  { icon: FaClipboardCheck, title: 'Documentation', description: 'Detailed certificates of analysis provided for all products' },
  { icon: FaCheckCircle, title: 'Quality Control', description: 'Multi-stage quality checks throughout the production process' },
  { icon: FaAward, title: 'Certifications', description: 'ISO 9001 and industry-specific certifications' },
]

export default function QualityPage() {
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
          Quality Assurance
        </motion.h1>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Commitment to Quality</h2>
          <p className="mb-4">
            At ChemInnovate, quality is not just a goal—it's a fundamental part of our process. We are committed to delivering products that meet the highest standards of purity, consistency, and performance.
          </p>
          <p>
            Our state-of-the-art facilities and expert team ensure that every chemical we produce undergoes rigorous quality control measures. We adhere to Good Manufacturing Practices (GMP) and maintain certifications that demonstrate our commitment to excellence.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {qualitySteps.map((step, index) => (
            <motion.div 
              key={step.title}
              className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <step.icon className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Quality Assurance Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Raw Material Inspection: We source only the highest quality raw materials and inspect them thoroughly upon arrival.</li>
            <li>Production Monitoring: Our production processes are continuously monitored and controlled to ensure consistency.</li>
            <li>In-Process Testing: We conduct tests at various stages of production to catch any deviations early.</li>
            <li>Final Product Analysis: Each batch undergoes comprehensive analytical testing before release.</li>
            <li>Stability Testing: We perform ongoing stability studies to ensure product quality throughout its shelf life.</li>
            <li>Customer Feedback: We actively seek and respond to customer feedback as part of our continuous improvement process.</li>
          </ol>
        </motion.div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

