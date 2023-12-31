"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-width flex justify-between gap-64 items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo1.svg"
            alt="logo"
            width={118}
            height={118}
            className="object-contain"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-800"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden flex justify-center items-center flex-col space-y-4 bg-blue-500 p-4 absolute top-16 left-0 w-full`}
        >
          <Link href="/" className="text-white hover:text-gray-800 font-bold">
          Home
          </Link>
          <Link href="/" className="text-white hover:text-gray-800 font-bold">
          About Us
          </Link>
          <Link href="/" className="text-white hover:text-gray-800 font-bold">
          Our Services
          </Link>
          <Link href="/" className="text-white hover:text-gray-800 font-bold">
          Contact Us
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex mr-80 space-x-4">
        <Link href="/" className="text-primary-blue hover:text-grey font-bold">
          Home
          </Link>
          <Link href="/" className="text-primary-blue hover:text-grey font-bold">
          About Us
          </Link>
          <Link href="/" className="text-primary-blue hover:text-grey font-bold">
          Our Services
          </Link>
          <Link href="/" className="text-primary-blue hover:text-grey font-bold">
          Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
