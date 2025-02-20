"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Real Estate Logo" width={150} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-darkGray hover:text-primary font-medium">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-darkGray hover:text-primary font-medium">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-darkGray hover:text-primary font-medium">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="flex gap-4">
            <Link href="/login" className="text-primary font-medium">
              تسجيل الدخول
            </Link>
            <Link href="/signup" className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary">
              إنشاء حساب
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link href="/" className="text-darkGray hover:text-primary font-medium block">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-darkGray hover:text-primary font-medium block">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-darkGray hover:text-primary font-medium block">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex flex-col gap-4 mt-4">
              <Link href="/login" className="text-primary font-medium text-center">
                تسجيل الدخول
              </Link>
              <Link href="/signup" className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary text-center">
                إنشاء حساب
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
