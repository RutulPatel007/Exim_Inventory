'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaIndustry } from 'react-icons/fa'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"




const reactiveColdDyes = [
  { name: 'Reactive Red M5B', code: 'Reactive Red - 2', light: '4-5', washing: '4-5', perspiration: '3-4', hypochlorite: '1', dischargeability: 'P', color: '#FF0000' },
  { name: 'Reactive Red M8B', code: 'Reactive Red - 11', light: '4-5', washing: '4-5', perspiration: '2', hypochlorite: '4', dischargeability: 'P', color: '#E60026' },
  { name: 'Reactive Magenta MB', code: 'Reactive Violet - 13', light: '4-5', washing: '5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'F', color: '#FF00FF' },
  { name: 'Reactive Orange M2R', code: 'Reactive Orange - 4', light: '5', washing: '5', perspiration: '4', hypochlorite: '4', dischargeability: 'P', color: '#FFA500' },
  { name: 'Reactive Orange M2RJ', code: '', light: '3-4', washing: '4', perspiration: '4', hypochlorite: '4-5', dischargeability: 'P', color: '#FF4500' },
  { name: 'Reactive Gol. Yellow MR', code: 'Reactive Yellow - 44', light: '5', washing: '4-5', perspiration: '4', hypochlorite: '1', dischargeability: 'P', color: '#FFD700' },
  { name: 'Reactive Yellow MR EX H/C', code: 'Reactive Yellow - 44', light: '5', washing: '4-5', perspiration: '4', hypochlorite: '1', dischargeability: 'P', color: '#FFD700' },
  { name: 'Reactive Yellow M3R', code: 'Reactive Yellow - 36', light: '6', washing: '5', perspiration: '4', hypochlorite: '2', dischargeability: 'G', color: '#FFFF00' },
  { name: 'Reactive Yellow M4R', code: 'Reactive Orange - 14', light: '5', washing: '4-5', perspiration: '4', hypochlorite: '1', dischargeability: 'P', color: '#FFD700' },
  { name: 'Reactive Yellow M8G', code: 'Reactive Yellow - 86', light: '6', washing: '4-5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'G', color: '#FFFF00' },
  { name: 'Reactive Yellow M4G', code: 'Reactive Yellow - 22', light: '6', washing: '4', perspiration: '5', hypochlorite: '1', dischargeability: 'G', color: '#FFFF99' },
  { name: 'Reactive Yellow MGR', code: 'Reactive Yellow - 7', light: '6', washing: '5', perspiration: '4-5', hypochlorite: '4-5', dischargeability: 'P', color: '#FFFFE0' },
  { name: 'Reactive Violet C4R', code: 'Reactive Violet - 12', light: '4', washing: '3', perspiration: '4', hypochlorite: '1', dischargeability: 'P', color: '#9400D3' },
  { name: 'Reactive Violet C2R', code: 'Reactive Violet - 14', light: '3-4', washing: '3', perspiration: '4', hypochlorite: '1', dischargeability: 'P', color: '#8A2BE2' },
  { name: 'Reactive Blue MR', code: 'Reactive Blue - 4', light: '6', washing: '5', perspiration: '5', hypochlorite: '2', dischargeability: 'P', color: '#0000FF' },
  { name: 'Reactive Blue M2R', code: 'Reactive Blue - 81', light: '6', washing: '5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'P', color: '#00008B' },
  { name: 'Reactive Blue M2R H/C', code: 'Reactive Blue - 81', light: '6', washing: '5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'P', color: '#00008B' },
  { name: 'Reactive Navy Blue M3R', code: 'Reactive Blue - 9', light: '5', washing: '4-5', perspiration: '3', hypochlorite: '3', dischargeability: 'P', color: '#000080' },
  { name: 'Reactive Blue M4GD H/C', code: 'Reactive Blue - 168', light: '6', washing: '5', perspiration: '3-4', hypochlorite: '2', dischargeability: 'P', color: '#4682B4' },
  { name: 'Reactive Tur. Blue MGN', code: 'Reactive Blue - 140', light: '6', washing: '4', perspiration: '4', hypochlorite: '2-3', dischargeability: 'P', color: '#00CED1' },
  { name: 'Reactive Tur. Blue Ha5G', code: 'Reactive Blue - 71', light: '6', washing: '3-4', perspiration: '4-5', hypochlorite: '3-4', dischargeability: 'P', color: '#5F9EA0' },
];



const reactiveHeDyes = [
  { name: 'Reactive Yellow HE6G', code: 'Reactive Yellow - 135', light: '4-5', washing: '4', perspiration: '4', hypochlorite: '1', dischargeability: 'G', color: '#FFFF33' },
  { name: 'Reactive Yellow HE4R', code: 'Reactive Yellow - 81', light: '5-6', washing: '5', perspiration: '4-5', hypochlorite: '1-2', dischargeability: 'G', color: '#FFD700' },
  { name: 'Reactive Yellow HE4R', code: 'Reactive Yellow - 84', light: '5-6', washing: '5', perspiration: '4-5', hypochlorite: '2-3', dischargeability: 'P', color: '#FFA500' },
  { name: 'Reactive G. Yellow HE4R', code: 'Reactive Yellow - 81-A', light: '5', washing: '5', perspiration: '4-5', hypochlorite: '3-4', dischargeability: 'P', color: '#FF4500' },
  { name: 'Reactive Orange HER', code: 'Reactive Orange - 84', light: '3-4', washing: '4', perspiration: '4', hypochlorite: '4-5', dischargeability: 'P', color: '#FF6347' },
  { name: 'Reactive Orange HE2R', code: 'Reactive Orange - 84-A', light: '3-4', washing: '4', perspiration: '4', hypochlorite: '4-5', dischargeability: 'P', color: '#FF7F50' },
  { name: 'Reactive Red HE3B', code: 'Reactive Red - 120', light: '5', washing: '5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'P', color: '#FF0000' },
  { name: 'Reactive Red HE5B', code: '', light: '4-5', washing: '5', perspiration: '5', hypochlorite: '3', dischargeability: 'P', color: '#DC143C' },
  { name: 'Reactive Red HE7B', code: 'Reactive Red - 141', light: '4-5', washing: '5', perspiration: '5', hypochlorite: '3', dischargeability: 'P', color: '#B22222' },
  { name: 'Reactive Red HE8B', code: 'Reactive Red - 152', light: '4-5', washing: '5', perspiration: '5', hypochlorite: '3-4', dischargeability: 'P', color: '#8B0000' },
  { name: 'Reactive Green HE 4B', code: 'Reactive Green - 19', light: '4', washing: '4-5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'F', color: '#008000' },
  { name: 'Reactive Green HE 4BD', code: 'Reactive Green - 19A', light: '4', washing: '5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'F', color: '#006400' },
  { name: 'Reactive Black HEBL', code: '', light: '4', washing: '5', perspiration: '4', hypochlorite: '3', dischargeability: 'P', color: '#000000' },
  { name: 'Reactive Navy Blue HER', code: 'Reactive Blue - 171', light: '4', washing: '5', perspiration: '4', hypochlorite: '1-2', dischargeability: 'F', color: '#000080' },
  { name: 'Reactive Navy Blue HE2R', code: 'Reactive Blue - 172', light: '4', washing: '4-5', perspiration: '4', hypochlorite: '2', dischargeability: 'F', color: '#00008B' },
  { name: 'Reactive Blue HERD', code: 'Reactive Blue - 160', light: '6', washing: '5', perspiration: '4', hypochlorite: '3', dischargeability: 'F', color: '#1E90FF' },
  { name: 'Reactive Navy Blue HEGN', code: 'Reactive Blue - 198', light: '4-5', washing: '4-5', perspiration: '3-4', hypochlorite: '3', dischargeability: 'F', color: '#4682B4' },
];


const reactiveHotDyes = [
  { name: 'Reactive Yellow H7GL', code: 'Reactive Yellow - 57', light: '6', washing: '5', perspiration: '5', hypochlorite: '2', dischargeability: 'G', color: '#FFFF00' },
  { name: 'Reactive Yellow H4G', code: 'Reactive Yellow - 18', light: '6', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'G', color: '#FFD700' },
  { name: 'Reactive Gol. Yellow HR', code: 'Reactive Yellow - 12', light: '6', washing: '5', perspiration: '5', hypochlorite: '3', dischargeability: 'F', color: '#FFA500' },
  { name: 'Reactive Orange H2R', code: 'Reactive Orange - 13', light: '4', washing: '5', perspiration: '4', hypochlorite: '4', dischargeability: 'P', color: '#FF8C00' },
  { name: 'Reactive Red H8B', code: 'Reactive Red - 31', light: '4', washing: '4', perspiration: '4', hypochlorite: '3', dischargeability: 'P', color: '#FF0000' },
  { name: 'Reactive Red 6BX', code: 'Reactive Red - 76', light: '4', washing: '4', perspiration: '5', hypochlorite: '2', dischargeability: 'P', color: '#DC143C' },
  { name: 'Reactive Red Brown H4R', code: 'Reactive Brown - 9', light: '4', washing: '5', perspiration: '4', hypochlorite: '5', dischargeability: 'P', color: '#8B4513' },
  { name: 'Reactive Magenta HB', code: 'Reactive Violet - 13', light: '4', washing: '4', perspiration: '4', hypochlorite: '1', dischargeability: 'F', color: '#FF00FF' },
  { name: 'Reactive Purple H3R', code: 'Reactive Violate - 1', light: '6', washing: '4', perspiration: '5', hypochlorite: '4', dischargeability: 'P', color: '#800080' },
  { name: 'Reactive Black HN', code: 'Reactive Black - 8', light: '5', washing: '4', perspiration: '5', hypochlorite: '4', dischargeability: 'P', color: '#000000' },
  { name: 'Reactive Blue H5R', code: 'Reactive Blue - 13', light: '5', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'P', color: '#0000FF' },
  { name: 'Reactive Blue H2R', code: '', light: '4', washing: '4', perspiration: '4', hypochlorite: '2', dischargeability: 'P', color: '#00008B' },
  { name: 'Reactive Blue H3RP', code: 'Reactive Blue - 49', light: '4', washing: '5', perspiration: '4', hypochlorite: '2', dischargeability: 'P', color: '#0000CD' },
  { name: 'Reactive Tur. Blue H5G', code: 'Reactive Blue - 25', light: '5-6', washing: '4-5', perspiration: '3', hypochlorite: '3-4', dischargeability: 'P', color: '#00CED1' },
  { name: 'Reactive Navy Blue RX', code: 'Reactive Blue - 59', light: '3', washing: '3-4', perspiration: '4-5', hypochlorite: '1', dischargeability: 'P', color: '#000080' },
];





const reactiveMeDyes = [
  { name: 'Reactive Red ME4BL', code: 'Reactive Red - 195', light: '6', washing: '4-5', perspiration: '4-5', hypochlorite: '3', dischargeability: 'P', color: '#FF0000' },
  { name: 'Reactive Red ME6BL', code: 'Reactive Red - 196/250', light: '5', washing: '4-5', perspiration: '4', hypochlorite: '3-4', dischargeability: 'F', color: '#DC143C' },
  { name: 'Reactive Red ME3BL', code: 'Reactive Red - 180', light: '5-6', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'P', color: '#FF4500' },
  { name: 'Reactive Orange ME2RL', code: 'Reactive Orange - 122', light: '5', washing: '5', perspiration: '4', hypochlorite: '2', dischargeability: 'P', color: '#FFA500' },
  { name: 'Reactive G. Yellow MERL', code: 'Reactive Yellow - 145', light: '5', washing: '5', perspiration: '4', hypochlorite: '4', dischargeability: 'F', color: '#FFFF00' },
  { name: 'Reactive Yellow ME3RL', code: '', light: '6', washing: '4-5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'F', color: '#FFFF00' },
  { name: 'Reactive Yellow ME4GL', code: 'Reactive Yellow-160/186', light: '6', washing: '4-5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'F', color: '#FFFF00' },
  { name: 'Reactive Green ME4GL', code: '', light: '4-5', washing: '4-5', perspiration: '4', hypochlorite: '1', dischargeability: 'F', color: '#008000' },
  { name: 'Reactive Blue ME2RL', code: 'Reactive Blue - 158', light: '4', washing: '5', perspiration: '4', hypochlorite: '1', dischargeability: 'F', color: '#0000FF' },
  { name: 'Reactive Navy Blue ME2GL', code: 'Reactive Blue 194', light: '4-5', washing: '4-5', perspiration: '4', hypochlorite: '1', dischargeability: 'F', color: '#000080' },
  { name: 'Reactive Jet Black HFGR', code: '', light: '5-6', washing: '5', perspiration: '5', hypochlorite: '2', dischargeability: 'F', color: '#000000' },
  { name: 'Reactive Black HFGR', code: '', light: '4', washing: '5', perspiration: '4', hypochlorite: '3', dischargeability: 'G', color: '#000000' },
  { name: 'Reactive Copper Blue BF', code: 'Reactive Blue - 221', light: '6-7', washing: '4', perspiration: '4', hypochlorite: '2', dischargeability: 'G', color: '#008080' },
  { name: 'Reactive Blue BF', code: 'Reactive Blue - 222', light: '4-5', washing: '4', perspiration: '4', hypochlorite: '2', dischargeability: 'G', color: '#0000CD' },
];

const reactiveVinylSulphoneBaseDyes = [
  { name: 'Reactive Red 4B', code: 'Reactive Red - 24', light: '6', washing: '3-4', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Red 5B', code: 'Reactive Red - 35', light: '6', washing: '3-4', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Red C2G', code: 'Reactive Red - 106', light: '4', washing: '4-5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Red RB', code: 'Reactive Red - 198', light: '5-6', washing: '4-5', perspiration: '4', hypochlorite: '1', dischargeability: 'F' },
  { name: 'Reactive Orange 3R', code: 'Reactive Orange - 16', light: '5-6', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Orange 2R', code: 'Reactive Orange - 7', light: '4-5', washing: '4-5', perspiration: '5', hypochlorite: '1-2', dischargeability: 'G' },
  { name: 'Reactive G. Yellow R', code: 'Reactive Yellow - 20', light: '5', washing: '4-5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Yellow FG', code: 'Reactive Yellow 42', light: '5', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Yellow GR', code: 'Reactive Yellow -15', light: '6', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Yellow RTN', code: 'Reactive Yellow - 24', light: '6-7', washing: '4', perspiration: '4', hypochlorite: '2', dischargeability: 'F' },
  { name: 'Reactive G. Yellow RNL', code: 'Reactive G. Yellow - 107', light: '5', washing: '4-5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Yellow R', code: 'Reactive Yellow - 77', light: '4-5', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Yellow GL', code: 'Reactive Yellow - 37', light: '6-7', washing: '4-5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Black B', code: 'Reactive Black -5', light: '5', washing: '4-5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Black RL', code: 'Reactive Black - 31', light: '7', washing: '4-5', perspiration: '5', hypochlorite: '3-4', dischargeability: 'F' },
  { name: 'Reactive Violet 5R', code: 'Reactive Violet - 5', light: '6-7', washing: '4', perspiration: '3-4', hypochlorite: '5', dischargeability: 'P' },
  { name: 'Reactive Tur. Blue G.', code: 'Reactive Blue-21', light: '6', washing: '4-5', perspiration: '5', hypochlorite: '3-4', dischargeability: 'P' },
  { name: 'Reactive Tur. Blue H2GP', code: '', light: '6', washing: '4', perspiration: '5', hypochlorite: '3-4', dischargeability: 'P' },
  { name: 'Reactive Blue 3R', code: 'Reactive Blue - 28', light: '7', washing: '4', perspiration: '5', hypochlorite: '3-4', dischargeability: 'G' },
  { name: 'Reactive Blue R', code: 'Reactive Blue - 19', light: '6-7', washing: '4-5', perspiration: '4-5', hypochlorite: '3-4', dischargeability: 'F' },
  { name: 'Reactive Blue RGB', code: 'Reactive Blue - 250', light: '4-5', washing: '3-4', perspiration: '4', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Blue BB', code: 'Reactive Blue - 220', light: '6-7', washing: '4', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
  { name: 'Reactive Dark Blue HR', code: 'Reactive Blue - 89', light: '5-6', washing: '3-4', perspiration: '5', hypochlorite: '1', dischargeability: 'F' },
  { name: 'Reactive Navy Blue GG', code: 'Reactive Blue - 203', light: '4-5', washing: '3-4', perspiration: '5', hypochlorite: '1', dischargeability: 'F' },
  { name: 'Reactive Black WNN', code: 'Reactive Black -5', light: '5', washing: '4-5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' }
];



const reactivePrintingDyes = [
  { name: 'Reactive Yellow P4g', code: 'Reactive Yellow 18', suitability: 'Good', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '5-6', light: '5', rubbing: '4', washing: '5', perspiration: '5', acidic: '(4-5 / 5)' },
  { name: 'Reactive G. Yellow Pr', code: 'Reactive Orange 12', suitability: 'Fair', solubility: '3', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '100', printing: '5', light: '6', rubbing: '5', washing: '4', perspiration: '5', acidic: '(5 / 5)' },
  { name: 'Reactive Orange P2r', code: 'Reactive Orange 13', suitability: 'Fair', solubility: '4', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '3-4', light: '4-5', rubbing: '5', washing: '4', perspiration: '5', acidic: '(5 / 4)' },
  { name: 'Reactive Red P8b', code: 'Reactive Red 13', suitability: 'Poor', solubility: '3-4', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '100', printing: '3-4', light: '5', rubbing: '4', washing: '5', perspiration: '5', acidic: '(4 / 4)' },
  { name: 'Reactive Red P6b', code: 'Reactive Red 76', suitability: 'Fair', solubility: '2', dischargebility: 'M', hypochlorite: '+', bleach: '+', reactivities: '70', printing: '3', light: '3-4', rubbing: '3', washing: '2-3', perspiration: '3-4', acidic: '(4 / 4)' },
  { name: 'Reactive Red P4r', code: 'Reactive Brown 9', suitability: 'Fair', solubility: '4', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '4', light: '5', rubbing: '4', washing: '4', perspiration: '4', acidic: '(4 / 4)' },
  { name: 'Reactive Megenta Pb', code: 'Reactive Violate 26', suitability: 'Poor', solubility: '1-2', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '3-4', light: '4-5', rubbing: '5', washing: '4', perspiration: '5', acidic: '(4 / 4)' },
  { name: 'Reactive Purple P3r', code: 'Reactive Violet 1', suitability: 'Poor', solubility: '4', dischargebility: 'M', hypochlorite: '+', bleach: '+', reactivities: '100', printing: '5-6', light: '6-7', rubbing: '5', washing: '5', perspiration: '5', acidic: '(3 / 3)' },
  { name: 'Reactive Black Pn', code: 'Reactive Black 8', suitability: 'Poor', solubility: '3-4', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '60', printing: '4-5', light: '5', rubbing: '4-5', washing: '4-5', perspiration: '5', acidic: '(4-5/ 4-5)' },
  { name: 'Reactive Blue P5r P6b', code: 'Reactive Blue 13', suitability: 'Poor', solubility: '1-2', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '5', light: '6', rubbing: '5', washing: '4', perspiration: '5', acidic: '(4-5 / 5)' },
  { name: 'Reactive T. Blue P5g', code: 'Reactive Blue 25', suitability: 'Fair', solubility: '3', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '4', light: '5', rubbing: '4', washing: '4', perspiration: '4', acidic: '(4 / 4)' },
  { name: 'Reactive Navy Blue Px', code: 'Reactive Blue 59', suitability: 'Poor', solubility: '1-2', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '100', printing: '3', light: '4', rubbing: '4', washing: '3', perspiration: '3-4', acidic: '(4 / 4)' },
  { name: 'Reactive Blue P3r', code: 'Reactive Blue 49', suitability: 'Poor', solubility: '2', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '100', printing: '3', light: '4', rubbing: '4', washing: '3', perspiration: '4', acidic: '(4-5 / 4)' },
  { name: 'Reactive Yellow P6t', code: 'Reactive Yellow 95', suitability: 'Good', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '70', printing: '4-5', light: '5-6', rubbing: '5', washing: '4-5', perspiration: '4-5', acidic: '((4-5/5) / (4-5/5)' },
  { name: 'Reactive Red P2b', code: 'Reactive Red 24', suitability: 'Poor', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '4-5', light: '5', rubbing: '4-5', washing: '3-4', perspiration: '4-5', acidic: '((4/5) / (4-5/4)' },
  { name: 'Reactive Red P3b', code: 'Reactive Red 45', suitability: 'Poor', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '100', printing: '4-5', light: '5-6', rubbing: '4-5', washing: '3-4', perspiration: '4-5', acidic: '((4-5/4-5) / (4-5/4-5))' },
  { name: 'Reactive Red P4b', code: 'Reactive Red 45', suitability: 'Poor', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '90', printing: '4-5', light: '5', rubbing: '4-5', washing: '3-4', perspiration: '4-5', acidic: '((4/4-5) / (4-5/4-5)' },
  { name: 'Reactive Red P6b', code: 'Reactive Red 218', suitability: 'Poor', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '70', printing: '4', light: '4-5', rubbing: '4-5', washing: '3', perspiration: '5-4', acidic: '((4-5/4-5) / (4-5/4-5)' },
  { name: 'Reactive T. Blue Pgr', code: 'Reactive Blue 72', suitability: 'Poor', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '72', printing: '4', light: '5', rubbing: '4', washing: '3-4', perspiration: '4', acidic: '((4/3) / (4-5/4)' }
];


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
              {/* <TableHead>Dye Color</TableHead> */}
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
        Reactive He Dyes
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
            {reactiveHeDyes.map((dye, index) => (
              <motion.tr 
                key={dye.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.name}</TableCell>
                <TableCell>{dye.code}</TableCell>
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
        Reactive Hot Dyes
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
            {reactiveHotDyes.map((dye, index) => (
              <motion.tr 
                key={dye.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.name}</TableCell>
                <TableCell>{dye.code}</TableCell>
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
        Reactive Me Dyes
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
            {reactiveMeDyes.map((dye, index) => (
              <motion.tr 
                key={dye.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.name}</TableCell>
                <TableCell>{dye.code}</TableCell>
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
        Reactive Vinyl Sulphone Base Dyes
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
            {reactiveVinylSulphoneBaseDyes.map((dye, index) => (
              <motion.tr 
                key={dye.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.name}</TableCell>
                <TableCell>{dye.code}</TableCell>
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
        Reactive Printing Dyes
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
            {reactivePrintingDyes.map((dye, index) => (
              <motion.tr 
                key={dye.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <TableCell>{dye.name}</TableCell>
                <TableCell>{dye.code}</TableCell>
                {/* <TableCell>{dye.color}</TableCell> */}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>


    </>
  )
}
