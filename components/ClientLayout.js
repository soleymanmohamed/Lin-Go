"use client";

import React from 'react';

const ClientLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full py-6 text-center border-b border-green-400">
        <h1 className="text-5xl font-bold text-green-500 animate-pulse logo-text">LinGo</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center w-full px-4 text-center">
        {children}
      </main>
      <footer className="w-full py-6 text-center border-t border-green-400">
        <p className="text-sm text-green-500">© 2024 LinGo</p>
      </footer>
    </div>
  );
};

export default ClientLayout;
