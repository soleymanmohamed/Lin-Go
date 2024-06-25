"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ClientLayout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col min-h-screen"
    >
      <header className="w-full py-6 text-center border-b border-green-400">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="text-5xl font-bold text-green-500 animate-pulse logo-text"
        >
          LinGo
        </motion.h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center w-full px-4 text-center">
        {children}
      </main>
      <footer className="w-full py-6 text-center border-t border-green-400">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-sm text-green-500"
        >
          © 2024 LinGo
        </motion.p>
      </footer>
    </motion.div>
  );
};

export default ClientLayout;
