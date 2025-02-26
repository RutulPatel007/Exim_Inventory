import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Us + Logo Below */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Exim Inventory is a leading provider of high-quality dyes and chemical solutions for various industries.
            </p>

            {/* Big Logo Positioned Below */}
            <Image 
              src="/images/logo.png" 
              alt="Exim Inventory Logo" 
              width={112} 
              height={112} 
              className="w-28 h-28 mt-4"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-green-400">Home</Link></li>
              <li><Link href="/our-products" className="text-sm hover:text-green-400">Our Products</Link></li>
              <li><Link href="/about" className="text-sm hover:text-green-400">About Us</Link></li>
              <li><Link href="/quality" className="text-sm hover:text-green-400">Quality Assurance</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-green-400">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="text-sm not-italic">
              <p>28, Shiv Estate,</p>
              <p>B/h Hotel Chatako,</p>
              <p>National Highway No.8,</p>
              <p>Ahmedabad -380026,</p>
              <p>Gujarat (India)</p>
              <br></br>
              <p>Phone: +91 9664938784</p>
              <p>Email: info@eximinventory.com</p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-400"><Facebook /></a>
              <a href="#" className="text-white hover:text-green-400"><Twitter /></a>
              <a href="#" className="text-white hover:text-green-400"><Linkedin /></a>
              <a href="#" className="text-white hover:text-green-400"><Mail /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2024 Exim Inventory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}