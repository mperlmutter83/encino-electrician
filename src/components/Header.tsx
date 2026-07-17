'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/ChatGPT-Image-Apr-21-2026-11_49_21-AM.png"
              alt="Encino Electrician"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-900 hover:text-yellow-500">Home</Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-yellow-500">About Us</Link>
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-yellow-500">Services</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-yellow-500">Blog</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-yellow-500">Contact Us</Link>
          </nav>

          <button className="md:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-sm font-medium text-gray-900">Home</Link>
              <Link href="/about" className="text-sm font-medium text-gray-700">About Us</Link>
              <Link href="/services" className="text-sm font-medium text-gray-700">Services</Link>
              <Link href="/blog" className="text-sm font-medium text-gray-700">Blog</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700">Contact Us</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
