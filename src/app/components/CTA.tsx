/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Store as PlayStore } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-primary text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">ابدأ رحلتك العقارية اليوم</h2>
        <p className="mb-6">انضم إلى آلاف العملاء السعداء واستفد من أفضل العروض العقارية.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center ">
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
      </div>
    </section>
  );
};

export default CTA;
