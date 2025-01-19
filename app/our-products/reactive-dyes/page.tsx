'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaIndustry } from 'react-icons/fa'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const reactiveColdDyes = [
  { name: 'Reactive Blue 19', code: 'RB19', color: 'Turquoise Blue' },
  { name: 'Reactive Red 195', code: 'RR195', color: 'Scarlet Red' },
  { name: 'Reactive Yellow 145', code: 'RY145', color: 'Golden Yellow' },
  { name: 'Reactive Black 5', code: 'RB5', color: 'Jet Black' },
  { name: 'Reactive Orange 122', code: 'RO122', color: 'Bright Orange' },
]

const advantages = [
  'Excellent color fastness',
  'Bright and vibrant shades',
  'High exhaustion and fixation rates',
  'Good wash and light fastness',
  'Environmentally friendly options available',
]

const applications = [
  'Cotton and other cellulosic fibers',
  'Wool and silk (protein fibers)',
  'Nylon and other polyamides',
  'Printing on textiles',
  'Garment dyeing',
]

export default function ReactiveDyesPage() {
  return (
    <>
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Reactive Dyes
      </motion.h1>
      <motion.p 
        className="mb-8 text-lg text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our reactive dyes are known for their excellent color fastness and bright shades. 
        They form a covalent bond with the fiber, resulting in superior wash fastness.
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

      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Reactive Cold Dyes
      </motion.h2>
      <motion.div 
        className="overflow-x-auto bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Dye Name</TableHead>
              <TableHead>Dye Code</TableHead>
              <TableHead>Dye Color</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reactiveColdDyes.map((dye, index) => (
              <motion.tr 
                key={dye.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.name}</TableCell>
                <TableCell>{dye.code}</TableCell>
                <TableCell>{dye.color}</TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </>
  )
}
