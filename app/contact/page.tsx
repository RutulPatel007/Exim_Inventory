'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import MoleculeBackground from '../components/MoleculeBackground'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

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
          Contact Us
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-6">
              We&apos;re here to answer any questions you may have about our products or services. Reach out to us and we&apos;ll respond as soon as we can.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="w-6 h-6 text-green-500 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-6 h-6 text-green-500 mr-2" />
                <span>info@cheminnovate.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-6 h-6 text-green-500 mr-2" />
                <span>123 Chemical Lane, Science City, ST 12345</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

