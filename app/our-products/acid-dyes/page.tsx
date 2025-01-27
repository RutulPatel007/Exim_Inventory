'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaIndustry } from 'react-icons/fa'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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







const acidDyesData = [
  { productName: 'ACID QUINOLONE YELLOW 3GX', ciGenericName: 'ACID YELLOW 3' },
  { productName: 'ACID YELLOW 5GN', ciGenericName: 'ACID YELLOW 110' },
  { productName: 'ACID LIGHT YELLOW 2GX', ciGenericName: 'ACID YELLOW 1' },
  { productName: 'ACID YELLOW GLX', ciGenericName: 'ACID YELLOW 114' },
  { productName: 'ACID TARTARZINE ARX', ciGenericName: 'ACID YELLOW 23' },
  { productName: 'ACID YELLOW NWX', ciGenericName: 'ACID YELLOW 151' },
  { productName: 'ACID YELLOW 3GL', ciGenericName: 'ACID YELLOW 34' },
  { productName: 'ACID YELLOW PGR', ciGenericName: 'ACID YELLOW 186' },
  { productName: 'ACID METANIL YELLOW MS', ciGenericName: 'ACID YELLOW 36' },
  { productName: 'ACID YELLOW M3RL', ciGenericName: 'ACID YELLOW 194' },
  { productName: 'ACID MILING FAST YELLOW MR', ciGenericName: 'ACID YELLOW 42' },
  { productName: 'ACID YELLOW A4R', ciGenericName: 'ACID YELLOW 199' },
  { productName: 'ACID YELLOW FGX', ciGenericName: 'ACID YELLOW 4' },
  { productName: 'ACID YELLOW M5RL', ciGenericName: 'ACID YELLOW 204' },
  { productName: 'ACID FLORCSCEINE URANINE', ciGenericName: 'ACID YELLOW 73' },
  { productName: 'ACID YELLOW 2RX', ciGenericName: 'ACID YELLOW 220' },
  { productName: 'ACID YELLOW GR', ciGenericName: 'ACID YELLOW 99' },
];

const acidDyesData2 = [
  { productName: 'ACID FUR YELLOW AEX', ciGenericName: 'ACID ORANGE 3' },
  { productName: 'ACID ORANGE N3RL', ciGenericName: 'ACID ORANGE 67' },
  { productName: 'ACID ORANGE 11', ciGenericName: 'ACID ORANGE 7' },
  { productName: 'ACID ORANGE', ciGenericName: 'ACID ORANGE 7' },
  { productName: 'ACID ORANGE GRX', ciGenericName: 'ACID ORANGE 10' },
  { productName: 'ACID YELLOW RL', ciGenericName: 'ACID ORANGE 80' },
  { productName: 'ACID ORANGE RGN', ciGenericName: 'ACID ORANGE 24' },
  { productName: 'ACID ORANGE RL', ciGenericName: 'ACID ORANGE 86' },
  { productName: 'ACID ORANGE 2R', ciGenericName: 'ACID ORANGE 33' },
  { productName: 'ACID ORANGE MRL', ciGenericName: 'ACID ORANGE 142' },
  { productName: 'ACID ORANGE SG', ciGenericName: 'ACID ORANGE 56' },
  { productName: 'ACID ORANGE 3GX', ciGenericName: 'ACID ORANGE 156' },
  { productName: 'ACID ORANGE 2RL', ciGenericName: 'ACID ORANGE 60' }
];

const acidDyesData3 = [
  { productName: 'ACID VIOLET RLX', ciGenericName: 'ACID VIOLET 1' },
  { productName: 'ACID VIOLET CARMINE 4B', ciGenericName: 'ACID VIOLET 1' },
  { productName: 'ACID VIOLET 4BS', ciGenericName: 'ACID VIOLET 17' },
  { productName: 'ACID VIOLET 6B', ciGenericName: 'ACID VIOLET 49' },
  { productName: 'ACID BRILLIANT RED 10', ciGenericName: 'ACID VIOLET 54' },
  { productName: 'ACID BORDEAUX MB', ciGenericName: 'ACID VIOLET 90' },
  { productName: 'ACID VIOLET RL', ciGenericName: 'ACID VIOLET 9' },
  { productName: 'LETHER VIOLET R', ciGenericName: 'ACID VIOLET 131' }
];


const acidDyesData4 = [
  { productName: 'ACID ROSE RED 2G', ciGenericName: 'ACID RED 1' },
  { productName: 'ACID CARMOISINE APX', ciGenericName: 'ACID RED 14' },
  { productName: 'ACID SCARLET 3R', ciGenericName: 'ACID RED 18' },
  { productName: 'ACID FUCHSINE SX', ciGenericName: 'ACID RED 33' },
  { productName: 'ACID RED NB', ciGenericName: 'ACID RED 34' },
  { productName: 'ACID RUBINE 3GX', ciGenericName: 'ACID RED 57' },
  { productName: 'ACID FAST RED A', ciGenericName: 'ACID RED 88' },
  { productName: 'ACID MILLING SCARLET G', ciGenericName: 'ACID RED 97' },
  { productName: 'ACID BRILLIANT RED BL', ciGenericName: 'ACID RED 106' },
  { productName: 'ACID MILLING RED RSNB', ciGenericName: 'ACID RED 114' },
  { productName: 'ACID MAROON V', ciGenericName: 'ACID RED 119' },
  { productName: 'ACID MILLING RED 3BN', ciGenericName: 'ACID RED 131' },
  { productName: 'ACID RED RS', ciGenericName: 'ACID RED 141' },
  { productName: 'ACID RED F2R', ciGenericName: 'ACID RED 151' },
  { productName: 'ACID BORDEAUX RLX', ciGenericName: 'ACID RED 182' },
  { productName: 'ACID RED GR', ciGenericName: 'ACID RED 183' },
  { productName: 'ACID RED BROWN NS', ciGenericName: 'ACID RED 184' },
  { productName: 'ACID PINK B', ciGenericName: 'ACID RED 186' },
  { productName: 'ACID BRILLIANT RED 2B', ciGenericName: 'ACID RED 249' },
  { productName: 'ACID RED GN', ciGenericName: 'ACID RED 337' },
  { productName: 'ACID RED 3GX', ciGenericName: 'ACID RED 357' },
  { productName: 'ACID RED C5R', ciGenericName: 'ACID RED 359' },
  { productName: 'ACID RED BRX', ciGenericName: 'ACID RED 362' },
  { productName: 'ACID RED 2BX', ciGenericName: 'ACID RED 410' },
  { productName: 'ACID RED BRX', ciGenericName: 'ACID RED 426' },
  { productName: 'ACID BRILLIANT RED 4G', ciGenericName: 'ACID RED 441' }
];

const acidDyesData5 = [
  { productName: 'ACID PETANT BLUE VS', ciGenericName: 'ACID BLUE 1' },
  { productName: 'ACID PETANT BLU AS', ciGenericName: 'ACID BLUE 7' },
  { productName: 'ACID BRILLIANT BLUE FCF', ciGenericName: 'ACID BLUE 9' },
  { productName: 'ACID BRILLIANT BLUE FF', ciGenericName: 'ACID BLUE 15' },
  { productName: 'ACID BLUE ANX', ciGenericName: 'ACID BLUE 25' },
  { productName: 'ACID BLUE A2GX', ciGenericName: 'ACID BLUE 40' },
  { productName: 'ACID NAVY BLUE R', ciGenericName: 'ACID BLUE 92' },
  { productName: 'ACID FAST BLUE S5R', ciGenericName: 'ACID BLUE 113' },
  { productName: 'ACID BLUE 2G', ciGenericName: 'ACID BLUE 158' },
  { productName: 'ACID TURQ BLUE 3GX', ciGenericName: 'ACID BLUE 185' },
  { productName: 'ACID BLUE MTR', ciGenericName: 'ACID BLUE 193' },
  { productName: 'ACID BLUE BRLL', ciGenericName: 'ACID BLUE 324' },
  { productName: 'ACID BLUE NBL', ciGenericName: 'ACID BLUE 80' }
];


const acidDyesData6 = [
  { productName: 'ACID VAPORID GREEN PX', ciGenericName: 'ACID GREEN 1' },
  { productName: 'ACID LEATHER GREEN NX', ciGenericName: 'ACID GREEN 68' },
  { productName: 'ACID MILLING GREEN 6B', ciGenericName: 'ACID GREEN' },
  { productName: 'ACID GREEN UG', ciGenericName: 'ACID GREEN 73' },
  { productName: 'ACID GREEN BLN', ciGenericName: 'ACID GREEN 12' },
  { productName: 'ACID OLIVE GREEN BGL', ciGenericName: 'ACID GREEN 104' },
  { productName: 'ACID DARK GREEN B', ciGenericName: 'ACID GREEN 20' },
  { productName: 'ACID GREEN BS', ciGenericName: 'ACID GREEN 111' },
  { productName: 'ACID CYANINE GREEN G', ciGenericName: 'ACID GREEN 25' },
  { productName: 'ACID LEATHER GREEN WEG', ciGenericName: 'ACID GREEN 114' }
];



const acidDyesData7 = [
  { productName: 'ACID BLACK 10BX', ciGenericName: 'ACID BLACK 1' },
  { productName: 'ACID GREY APX', ciGenericName: 'ACID BLACK 84' },
  { productName: 'ACID FAST BLACK 2BX', ciGenericName: 'ACID BLACK 24' },
  { productName: 'ACID BLACK BGLX', ciGenericName: 'ACID BLACK 107' },
  { productName: 'ACID MILLING BLACK NB', ciGenericName: 'ACID BLACK 26' },
  { productName: 'ACID BLACK LDN', ciGenericName: 'ACID BLACK 172' },
  { productName: 'ACID BLACK WA', ciGenericName: 'ACID BLACK 52' },
  { productName: 'ACID BLACK MSRL', ciGenericName: 'ACID BLACK 194' },
  { productName: 'ACID GREY GLA', ciGenericName: 'ACID BLACK 58' },
  { productName: 'ACID BLACK MT', ciGenericName: 'ACID BLACK 210' },
  { productName: 'ACID GREY RL', ciGenericName: 'ACID BLACK 63' },
  { productName: 'ACID LEATHER BLACK CB', ciGenericName: 'ACID BLACK 234' },
  { productName: 'ACID GREY AWW', ciGenericName: 'ACID BLACK 71' },
  { productName: 'ACID BLACK SBX', ciGenericName: 'ACID BLACK 235' },
  { productName: 'ACID GREY CG', ciGenericName: 'ACID BLACK 82' }
];


const acidDyesData8 = [
  { productName: 'ACID BROWN RX', ciGenericName: 'ACID BROWN 4' },
  { productName: 'ACID BROWN GRX', ciGenericName: 'ACID BROWN 282' },
  { productName: 'ACID BROWN 2', ciGenericName: 'ACID BROWN' },
  { productName: 'ACID BROWN TP', ciGenericName: 'ACID BROWN 28' },
  { productName: 'ACID BROWN RD', ciGenericName: 'ACID BROWN 14' },
  { productName: 'ACID BROWN SC', ciGenericName: 'ACID BROWN 32' },
  { productName: 'ACID BROWN 2R', ciGenericName: 'ACID BROWN 15' },
  { productName: 'ACID DARK BROWN JBX', ciGenericName: 'ACID BROWN 342' },
  { productName: 'ACID BROWN 2RL', ciGenericName: 'ACID BROWN 45' },
  { productName: 'ACID BROWN SRX', ciGenericName: 'ACID BROWN 348' },
  { productName: 'ACID DARK BROWN 5R', ciGenericName: 'ACID BROWN 48' },
  { productName: 'ACID BROWN GSX', ciGenericName: 'ACID BROWN 349' },
  { productName: 'ACID BROWN DS', ciGenericName: 'ACID BROWN 58' },
  { productName: 'ACID BROWN S3RX', ciGenericName: 'ACID BROWN 354' },
  { productName: 'ACID BROWN CR', ciGenericName: 'ACID BROWN 75' },
  { productName: 'ACID BROWN MBLX', ciGenericName: 'ACID BROWN 355' },
  { productName: 'ACID BROWN 4BX', ciGenericName: 'ACID BROWN 78' },
  { productName: 'ACID BROWN P3', ciGenericName: 'ACID BROWN 36' },
  { productName: 'ACID BROWN M2RL', ciGenericName: 'ACID BROWN 365' },
  { productName: 'ACID BROWN CTX', ciGenericName: 'ACID BROWN 85' },
  { productName: 'ACID OLIVE BROWN', ciGenericName: 'ACID BROWN 36' },
  { productName: 'ACID BROWN MFX', ciGenericName: 'ACID BROWN 97' },
  { productName: 'ACID BROWN SGL', ciGenericName: 'ACID BROWN 402' },
  { productName: 'ACID BROWN 5GX', ciGenericName: 'ACID BROWN 98' },
  { productName: 'ACID BROWN SRL', ciGenericName: 'ACID BROWN 41' },
  { productName: 'ACID BROWN LN2R', ciGenericName: 'ACID BROWN 41' },
  { productName: 'ACID BROWN PH', ciGenericName: 'ACID BROWN 418' },
  { productName: 'ACID BROWN RL', ciGenericName: 'ACID BROWN 420' },
  { productName: 'ACID CAMEL BROWN APX', ciGenericName: 'ACID BROWN 422' },
  { productName: 'ACID HAVANA BROWN 2RLX', ciGenericName: 'ACID BROWN 425' },
  { productName: 'ACID BROWN WG', ciGenericName: 'ACID BROWN 432' },
  { productName: 'ACID BROWN PRG', ciGenericName: 'ACID BROWN 434' },
  { productName: 'ACID DARK BROWN', ciGenericName: 'ACID BROWN 44' },
  { productName: 'ACID BROWN RGX', ciGenericName: 'ACID BROWN 214' },
  { productName: 'ACID BROWN 5GX', ciGenericName: 'ACID BROWN 452' },
  { productName: 'ACID BROWN XN', ciGenericName: 'ACID BROWN 23' },
  { productName: 'ACID BEIGE AP', ciGenericName: 'ACID BEIGE' },
  { productName: 'ACID BROWN GN', ciGenericName: 'ACID BROWN 264' },
  { productName: 'ACID BEIGE AP', ciGenericName: 'ACID BEIGE O' }
];

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



      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
         Acid Yellow Dyes
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
              <TableHead>Generic Name </TableHead>
              {/* <TableHead>Dye Color</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {acidDyesData.map((dye, index) => (
              <motion.tr 
                key={dye.ciGenericName}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.productName}</TableCell>
                <TableCell>{dye.ciGenericName}</TableCell>
                {/* <TableCell>{dye.color}</TableCell> */}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>


      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Acid Orange Dyes
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
              <TableHead>Generic Name </TableHead>
              {/* <TableHead>Dye Color</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {acidDyesData2.map((dye, index) => (
              <motion.tr 
                key={dye.ciGenericName}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.productName}</TableCell>
                <TableCell>{dye.ciGenericName}</TableCell>
                {/* <TableCell>{dye.color}</TableCell> */}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>


      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Acid Violet Dyes
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
              <TableHead>Generic Name </TableHead>
              {/* <TableHead>Dye Color</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {acidDyesData3.map((dye, index) => (
              <motion.tr 
                key={dye.ciGenericName}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.productName}</TableCell>
                <TableCell>{dye.ciGenericName}</TableCell>
                {/* <TableCell>{dye.color}</TableCell> */}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>


      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Acid Red Dyes
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
              <TableHead>Generic Name </TableHead>
              {/* <TableHead>Dye Color</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {acidDyesData4.map((dye, index) => (
              <motion.tr 
                key={dye.ciGenericName}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.productName}</TableCell>
                <TableCell>{dye.ciGenericName}</TableCell>
                {/* <TableCell>{dye.color}</TableCell> */}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>


      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Acid Blue Dyes
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
              <TableHead>Generic Name </TableHead>
              {/* <TableHead>Dye Color</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {acidDyesData5.map((dye, index) => (
              <motion.tr 
                key={dye.ciGenericName}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.productName}</TableCell>
                <TableCell>{dye.ciGenericName}</TableCell>
                {/* <TableCell>{dye.color}</TableCell> */}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>


      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Acid Green Dyes
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
              <TableHead>Generic Name </TableHead>
              {/* <TableHead>Dye Color</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {acidDyesData6.map((dye, index) => (
              <motion.tr 
                key={dye.ciGenericName}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.productName}</TableCell>
                <TableCell>{dye.ciGenericName}</TableCell>
                {/* <TableCell>{dye.color}</TableCell> */}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Acid Black Dyes
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
              <TableHead>Generic Name </TableHead>
              {/* <TableHead>Dye Color</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {acidDyesData7.map((dye, index) => (
              <motion.tr 
                key={dye.ciGenericName}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.productName}</TableCell>
                <TableCell>{dye.ciGenericName}</TableCell>
                {/* <TableCell>{dye.color}</TableCell> */}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>


      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Acid Brown Dyes
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
              <TableHead>Generic Name </TableHead>
              {/* <TableHead>Dye Color</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {acidDyesData8.map((dye, index) => (
              <motion.tr 
                key={dye.ciGenericName}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.productName}</TableCell>
                <TableCell>{dye.ciGenericName}</TableCell>
                {/* <TableCell>{dye.color}</TableCell> */}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  )
}

