'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFlask, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

const productLinks = [
  { name: 'Reactive Dyes', href: '/our-products/reactive-dyes' },
  { name: 'Direct Dyes', href: '/our-products/direct-dyes' },
  { name: 'Acid Dyes', href: '/our-products/acid-dyes' },
  { name: 'Dyes Intermediate', href: '/our-products/dyes-intermediate' },
  { name: 'Solvent Dyes', href: '/our-products/solvent-dyes' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
    setIsProductsOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <motion.header 
      className="bg-white bg-opacity-80 backdrop-blur-md shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center">
  {/* Shift Logo Left */}
  <motion.img 
    src="/images/logo.png" 
    alt="Exim Inventory Logo" 
    className="w-14 h-14 mr-2 -ml-20"  // Increased size & shifted left
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.3 }}
  />

  {/* Text */}
  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
    Exim Inventory
  </span>

  {/* Beaker Symbol After Text */}
  <motion.div
    className="ml-2" // Ensure spacing after text
    whileHover={{ rotate: 360 }}
    transition={{ duration: 0.5 }}
  >
    <FaFlask className="w-8 h-8 text-green-500" />
  </motion.div>
</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {['Home', 'About'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className={`hover:text-green-500 transition-colors ${isActive(item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'text-green-500 font-bold' : ''}`}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
            <motion.li 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
              whileHover={{ scale: 1.1 }}
            >
              <button 
                className={`flex items-center hover:text-green-500 transition-colors ${isActive('/our-products') ? 'text-green-500 font-bold' : ''}`}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Our Products <FaChevronDown className="ml-1" />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.ul
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {productLinks.map((product) => (
                      <li key={product.name}>
                        <Link 
                          href={product.href}
                          className={`block px-4 py-2 hover:bg-green-100 transition-colors ${isActive(product.href) ? 'bg-green-100 text-green-500 font-bold' : ''}`}
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
            {['Quality', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className={`hover:text-green-500 transition-colors ${isActive(item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'text-green-500 font-bold' : ''}`}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col items-center py-4">
              {['Home', 'Our Products', 'About', 'Quality', 'Contact'].map((item) => (
                <motion.li key={item} className="my-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className={`hover:text-green-500 transition-colors ${isActive(item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`) ? 'text-green-500 font-bold' : ''}`}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

