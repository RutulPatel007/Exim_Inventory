import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              ChemInnovate is a leading provider of high-quality dyes and chemical solutions for various industries.
            </p>
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
              <p>123 Chemical Lane,</p>
              <p>Science City, ST 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@cheminnovate.com</p>
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
          <p>&copy; 2024 ChemInnovate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

