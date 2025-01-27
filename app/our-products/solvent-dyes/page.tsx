'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaIndustry } from 'react-icons/fa'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const advantages = [
  'Excellent solubility in organic solvents',
  'High color strength and brightness',
  'Good light and heat stability',
  'Wide range of shades available',
  'Suitable for various non-polar materials',
]

const applications = [
  'Coloring plastics and resins',
  'Fuel and lubricant coloration',
  'Wax and candle dyeing',
  'Wood staining',
  'Printing inks',
]


const products = [
  { id: 1, name: 'Black RLI', ciNo: 'Solvent Black 29' },
  { id: 2, name: 'Black RE', ciNo: 'Solvent Black 27' },
  { id: 3, name: 'Black REH', ciNo: 'Solvent Black 27' },
  { id: 4, name: 'Black REV', ciNo: 'Solvent Black 27' },
  { id: 5, name: 'Black RLSN', ciNo: 'Solvent Black 45' },
  { id: 6, name: 'Brown 2RL', ciNo: 'Solvent Brown 43' },
  { id: 7, name: 'Brown GLS', ciNo: 'Mixture' },
  { id: 8, name: 'Fire Red GLS', ciNo: 'Solvent Red 89' },
  { id: 9, name: 'Red 3BLSE', ciNo: 'Solvent Red 91' },
  { id: 10, name: 'Red 2BLSE', ciNo: 'Solvent Red 122' },
  { id: 11, name: 'Red 2BLSE-YR', ciNo: 'Solvent Red 122' },
  { id: 12, name: 'Red G', ciNo: 'Solvent Red 125' },
  { id: 13, name: 'Red 2BL', ciNo: 'Solvent Red 132' },
  { id: 14, name: 'Fire Red BL', ciNo: 'Solvent Red 160' },
  { id: 15, name: 'Yellow R', ciNo: 'Solvent Yellow 82' },
  { id: 16, name: 'Yellow 2RLS', ciNo: 'Solvent Yellow 62' },
  { id: 17, name: 'Orange G', ciNo: 'Solvent Orange 11' },
  { id: 18, name: 'Orange RP', ciNo: 'Solvent Orange 54' },
  { id: 19, name: 'Orange RL', ciNo: 'Solvent Orange 62' },
  { id: 20, name: 'Orange R', ciNo: 'Solvent Orange 99' },
  { id: 21, name: 'Blue 2GLN', ciNo: 'Solvent Blue 48' },
  { id: 22, name: 'Blue GL', ciNo: 'Solvent Blue 70' },
  { id: 23, name: 'Dark Violet R', ciNo: '-' }
];

export default function SolventDyesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Solvent Dyes
      </motion.h1>
      <motion.p 
        className="mb-8 text-lg text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our solvent dyes are designed for coloring plastics, fuels, waxes, and other 
        non-polar materials. They offer excellent solubility in organic solvents and 
        provide bright, transparent colors with high tinting strength.
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
          <li>Non-polar nature allows for easy incorporation into various materials</li>
          <li>Resistant to migration and bleeding</li>
          <li>Suitable for high-temperature applications</li>
          <li>Available in a wide range of colors and shades</li>
          <li>Customizable formulations to meet specific requirements</li>
        </ul>
      </motion.div>


      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Solvent Dyes
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
              {/* <TableHead>Dye Color</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((dye, index) => (
              <motion.tr 
                key={dye.ciNo}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.name}</TableCell>
                <TableCell>{dye.ciNo}</TableCell>
                {/* <TableCell>{dye.color}</TableCell> */}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>

    </div>
  )
}

