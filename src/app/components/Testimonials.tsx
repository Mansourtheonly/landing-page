/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Store as PlayStore } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-right"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              اكتشف العقارات الفاخرة في الجزائر
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              تواصل مع أفضل المطورين العقاريين في الجزائر واكتشف العقارات الحصرية عالية القيمة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <Apple className="w-6 h-6" />
                <div className="text-right">
                  <div className="text-xs">حمل من</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <PlayStore className="w-6 h-6" />
                <div className="text-right">
                  <div className="text-xs">حمل من</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
