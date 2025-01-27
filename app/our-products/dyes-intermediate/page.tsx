'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaIndustry } from 'react-icons/fa'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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


const data = [
  { productName: "1-Phenyl-3-Methyl-5-Pyrazolone", casNo: "89-25-8" },
  { productName: "Para Tolyl -3-Methyl-5-Pyrazolone", casNo: "86-92-0" },
  { productName: "1-(2-Chloro Phenyl)-3-Methyl-5-Pyrazolone", casNo: "14580-22-4" },
  { productName: "1(3-Chloro Phenyl)-3-Methyl-5-Pyrazolone", casNo: "90-31-3" },
  { productName: "1-Phenyl-3-Carexthoxy-5-Pyrazolone", casNo: "89-33-8" },
  { productName: "3-Methyl-5-Pyrazolone", casNo: "108-26-9" },
  { productName: "1-(3-Sulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "119-17-5" },
  { productName: "1-(4-Sulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "89-36-1" },
  { productName: "1-(4-Sulphophenyl)-3-Carboxy-5-Pyrazolone", casNo: "118-47-8" },
  { productName: "1-(2-Chloro-4-Sulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "–" },
  { productName: "1-(2-Methyl-5-Sulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "5466-86-4" },
  { productName: "1-(2-Methyl-4-Sulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "118-07-0" },
  { productName: "1-(4-Sulphamido phenyl)-3-Methyl-5-Pyrazolone", casNo: "13269-73-3" },
  { productName: "1-(3-Sulphamodi phenyl)-3-Methyl-5-Pyrazolone", casNo: "89-29-2" },
  { productName: "1-(2:5 Disulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "54817-63-9" },
  { productName: "1-(2-Chloro-5-Sulphophenyl)-3-Methyl-5-Pyrazolone", casNo: "88-76-6" },
  { productName: "3-Methyl-1-(3-Sulphophenyl)-5-Pyrazolimine", casNo: "68083-38-5" },
  { productName: "3-Methyl-1-Phenyl-5-Pyrazolimine", casNo: "1131-18-6" },
  { productName: "2-Chloro-5-Sulphophenyl-3-Methyl-5-Pyrazolimine", casNo: "68227-68-9" },
  { productName: "3 Methyl-1(4-Chloro Phenyl)-5-Pyrazolimine", casNo: "13024-90-3" },
];

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
              {/* <TableHead>Dye Color</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((dye, index) => (
              <motion.tr 
                key={dye.casNo}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.productName}</TableCell>
                <TableCell>{dye.casNo}</TableCell>
                {/* <TableCell>{dye.color}</TableCell> */}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  )
}

