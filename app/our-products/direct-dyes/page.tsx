'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaIndustry } from 'react-icons/fa'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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



const dyeData = [
  { name: 'Direct Dyes Yellow 3GX', code: 'Direct Dyes Yellow - 6', light: '3', washing: '2', perspiration: '4', hypochlorite: '4', dischargeability: 'F', color: '#FFFF00' },
  { name: 'Direct Dyes Paper Yellow T', code: 'Direct Dyes Yellow - 11', light: '4', washing: '2-3', perspiration: '4', hypochlorite: '4-5', dischargeability: 'P', color: '#FFFF00' },
  { name: 'Direct Dyes Crysophinine', code: 'Direct Dyes Yellow - 12', light: '4-5', washing: '2', perspiration: '5', hypochlorite: '2', dischargeability: 'F', color: '#FFFF00' },
  { name: 'Direct Dyes Yellow 5GLL H/C', code: 'Direct Dyes Yellow - 44', light: '3', washing: '3', perspiration: '1', hypochlorite: '1', dischargeability: 'G', color: '#FFFF00' },
  { name: 'Direct Dyes Yellow 5GLL', code: 'Direct Dyes Yellow - 44', light: '3', washing: '3', perspiration: '1', hypochlorite: '1', dischargeability: 'P', color: '#FFFF00' },
  { name: 'Direct Dyes Yellow RSLW', code: 'Direct Dyes Yellow - 50', light: '6', washing: '4', perspiration: '5', hypochlorite: '5', dischargeability: 'G', color: '#FFFF00' },
  { name: 'Direct Dyes Yellow RL', code: 'Direct Dyes Yellow - 86', light: '6', washing: '4', perspiration: '5', hypochlorite: '5', dischargeability: 'G', color: '#FFFF00' },
  { name: 'Direct Dyes Sunfast Yellow RCH', code: 'Direct Dyes Yellow - 99', light: '4', washing: '2-3', perspiration: '4', hypochlorite: '2-3', dischargeability: 'F', color: '#FFFF00' },
  { name: 'Direct Dyes Orange SE 200%', code: 'Direct Dyes Orange - 26', light: '4', washing: '4', perspiration: '4-5', hypochlorite: '4-5', dischargeability: 'F', color: '#FFA500' },
  { name: 'Direct Dyes Orange TGLL', code: 'Direct Dyes Orange - 39', light: '6-7', washing: '3', perspiration: '5', hypochlorite: '2', dischargeability: 'F', color: '#FFA500' },
  { name: 'Direct Dyes Orange TGLL 200%', code: 'Direct Dyes Orange - 39', light: '6-7', washing: '3', perspiration: '5', hypochlorite: '2', dischargeability: 'F', color: '#FFA500' },
  { name: 'Direct Dyes Viscose Orange BRO', code: 'Direct Dyes Orange - 108', light: '2', washing: '2', perspiration: '5', hypochlorite: '5', dischargeability: 'G', color: '#FFA500' },
  { name: 'Direct Dyes Scarlet 4BS', code: 'Direct Dyes Red - 23', light: '3', washing: '3-4', perspiration: '4', hypochlorite: '4', dischargeability: 'F', color: '#FF4500' },
  { name: 'Direct Dyes Red 12B', code: 'Direct Dyes Red - 31', light: '1-2', washing: '3', perspiration: '3', hypochlorite: '3', dischargeability: 'F', color: '#FF4500' },
  { name: 'Direct Dyes Light Red BLN', code: 'Direct Dyes Red - 80', light: '6', washing: '3', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#FF4500' },
  { name: 'Direct Dyes Red 5B', code: 'Direct Dyes Red - 81', light: '4-5', washing: '3', perspiration: '4', hypochlorite: '4', dischargeability: 'G', color: '#FF4500' },
  { name: 'Direct Dyes Red 5B 200%', code: 'Direct Dyes Red - 81', light: '4-5', washing: '3', perspiration: '4', hypochlorite: '4', dischargeability: 'G', color: '#FF4500' },
  { name: 'Direct Dyes Violet MB', code: 'Direct Dyes Violet - 9', light: '2-3', washing: '2', perspiration: '5', hypochlorite: '5', dischargeability: 'G', color: '#EE82EE' },
  { name: 'Direct Dyes Brill Violet HELIO B', code: 'Direct Dyes Violet - 51', light: '2-3', washing: '2', perspiration: '5', hypochlorite: '5', dischargeability: 'G', color: '#EE82EE' },
  { name: 'Direct Dyes Sky Blue FBC', code: 'Direct Dyes Blue - 1', light: '2', washing: '3-4', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#0000FF' },
  { name: 'Direct Dyes Sky Blue FFH', code: 'Direct Dyes Blue - 15', light: '2', washing: '3-4', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#0000FF' },
  { name: 'Direct Dyes Blue JJR', code: 'Direct Dyes Blue - 67', light: '4', washing: '3', perspiration: '4', hypochlorite: '4', dischargeability: 'P', color: '#0000FF' },
  { name: 'Direct Dyes Blue GLL', code: 'Direct Dyes Blue - 71', light: '5', washing: '3-4', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#0000FF' },
  { name: 'Direct Dyes Blue GLL 200%', code: 'Direct Dyes Blue - 71', light: '5', washing: '3-4', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#0000FF' },
  { name: 'Direct Dyes Fast Blue RLL', code: 'Direct Dyes Blue - 80', light: '6', washing: '3', perspiration: '5', hypochlorite: '5', dischargeability: 'G', color: '#0000FF' },
  { name: 'Direct Dyes Tur. Blue SBL', code: 'Direct Dyes Blue - 86', light: '6-7', washing: '4', perspiration: '5', hypochlorite: '1', dischargeability: 'F', color: '#0000FF' },
  { name: 'Direct Dyes Fast Tur. Blue FBL', code: 'Direct Dyes Blue - 199', light: '4', washing: '3-4', perspiration: '4', hypochlorite: '4', dischargeability: 'F', color: '#0000FF' },
  { name: 'Direct Dyes Green JJR', code: 'Direct Dyes Green - 26', light: '5', washing: '3-4', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#008000' },
  { name: 'Direct Dyes Green NB', code: 'Direct Dyes Green - 96', light: '5', washing: '3-4', perspiration: '5', hypochlorite: '5', dischargeability: 'F', color: '#008000' },
  { name: 'Direct Dyes Black GR', code: 'Direct Dyes Black - 22', light: '2', washing: '3', perspiration: '4', hypochlorite: '4', dischargeability: 'G', color: '#000000' },
  { name: 'Direct Dyes Diazo Black OB', code: 'Direct Dyes Black - 80', light: '2', washing: '3', perspiration: '3', hypochlorite: '4', dischargeability: 'G', color: '#000000' },
  { name: 'Direct Dyes Diazo Black BF', code: 'Direct Dyes Black - 155', light: '2', washing: '3-4', perspiration: '4', hypochlorite: '4', dischargeability: 'G', color: '#000000' },
  { name: 'Direct Dyes Gray 2RL', code: '', light: '4', washing: '3', perspiration: '4-5', hypochlorite: '4-5', dischargeability: 'F', color: '#808080' },
  { name: 'Direct Dyes Brown 2GL', code: '', light: '5-6', washing: '3', perspiration: '3', hypochlorite: '3', dischargeability: 'F', color: '#A52A2A' },
];

const midIndex = Math.ceil(dyeData.length / 2);
const leftData = dyeData.slice(0, midIndex);
const rightData = dyeData.slice(midIndex);


const dyeData2 = [
  { name: 'Direct Dyes Black E', code: 'Direct Dyes Black - 38', light: '2-3', washing: '2-3', perspiration: '3-4', hypochlorite: '3', dischargeability: 'F', color: '#000000' },
  { name: 'Direct Dyes Brown MR', code: 'Direct Dyes Brown - 2', light: '3-4', washing: '2', perspiration: '3-4', hypochlorite: '3', dischargeability: 'F', color: '#A52A2A' },
  { name: 'Direct Dyes Congo Red', code: 'Direct Dyes Red - 28', light: '2', washing: '2', perspiration: '4', hypochlorite: '4', dischargeability: 'G', color: '#FF4500' },
  { name: 'Direct Dyes Blue 2B', code: 'Direct Dyes Blue - 6', light: '2', washing: '3', perspiration: '5', hypochlorite: '4', dischargeability: 'G', color: '#0000FF' },
  { name: 'Direct Dyes Green PLS', code: 'Direct Dyes Green - 1', light: '2', washing: '3', perspiration: '4-5', hypochlorite: '3-4', dischargeability: 'G', color: '#008000' },
  { name: 'Direct Dyes Green B', code: 'Direct Dyes Green - 6', light: '2', washing: '3', perspiration: '4-5', hypochlorite: '3-4', dischargeability: 'G', color: '#008000' },
  { name: 'Direct Dyes Boxdex BW', code: 'Direct Dyes Red - 13', light: '2', washing: '2', perspiration: '3-4', hypochlorite: '3-4', dischargeability: 'F', color: '#FF4500' },
  { name: 'Direct Dyes Black BT', code: 'Direct Dyes Black - 2', light: '3', washing: '3', perspiration: '5', hypochlorite: '4', dischargeability: 'F', color: '#000000' },
  { name: 'Direct Dyes Orange GR', code: 'Direct Dyes Orange - 1', light: '3-4', washing: '3', perspiration: '4-5', hypochlorite: '3', dischargeability: 'F', color: '#FFA500' },
  { name: 'Direct Dyes Brown BRLL', code: '', light: '3-4', washing: '2', perspiration: '4-5', hypochlorite: '4-5', dischargeability: 'P', color: '#A52A2A' },
];
const mixIndex2 = Math.ceil(dyeData2.length / 2);
const leftData2 = dyeData2.slice(0, mixIndex2);
const rightData2 = dyeData2.slice(mixIndex2);

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



      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Sunfast & Benzidine Direct Dyes
      </motion.h2>

      <motion.div 
                    className="grid md:grid-cols-2 gap-8 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    {/* Left Column */}
                    <div>
                      <ul className="list-none space-y-2 text-center">
                        {leftData.map((productName, index) => (
                          <motion.li 
                            key={index} 
                            className="py-2 bg-gray-100 rounded-lg shadow-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                          >
                            {productName.name}  
      
                          </motion.li>
                        ))}
                      </ul>
                    </div>
            
                    {/* Right Column */}
                    <div>
                      <ul className="list-none space-y-2 text-center">
                        {rightData.map((productName, index) => (
                          <motion.li 
                            key={index} 
                            className="py-2 bg-gray-100 rounded-lg shadow-sm"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                          >
                            {productName.name}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>


      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
         Non-Benzidine Direct Dyes
      </motion.h2>

      <motion.div 
                    className="grid md:grid-cols-2 gap-8 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    {/* Left Column */}
                    <div>
                      <ul className="list-none space-y-2 text-center">
                        {leftData2.map((productName, index) => (
                          <motion.li 
                            key={index} 
                            className="py-2 bg-gray-100 rounded-lg shadow-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                          >
                            {productName.name}  
      
                          </motion.li>
                        ))}
                      </ul>
                    </div>
            
                    {/* Right Column */}
                    <div>
                      <ul className="list-none space-y-2 text-center">
                        {rightData2.map((productName, index) => (
                          <motion.li 
                            key={index} 
                            className="py-2 bg-gray-100 rounded-lg shadow-sm"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                          >
                            {productName.name}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

    </div>



  )
}

