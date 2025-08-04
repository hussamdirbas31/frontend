'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const links = [
    {
      title: "Shop",
      items: ["New Arrivals", "Best Sellers", "Deals", "Gift Cards"]
    },
    {
      title: "Support",
      items: ["Help Center", "Returns", "Product Guides", "Contact Us"]
    },
    {
      title: "Company",
      items: ["About Us", "Careers", "Blog", "Press"]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent">
              ElectroNex
            </h3>
            <p className="text-gray-600 mb-6">
              The future of tech retail, today.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-violet-600 transition-colors">
                <FaYoutube className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {links.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link 
                      href="#" 
                      className="text-gray-600 hover:text-violet-600 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ElectroNex. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-violet-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-violet-600 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-violet-600 text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}