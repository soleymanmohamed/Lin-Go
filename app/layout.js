// app/layout.js

import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'LinGo - Real-Time Translation Service',
  description: 'A sleek and modern web app for real-time translation between English and French.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center">
        <header className="w-full py-4 text-center">
          <h1 className="text-4xl font-bold">LinGo</h1>
        </header>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          {children}
        </main>
        <footer className="w-full py-4 text-center border-t border-green-400">
          <p>© 2024 LinGo</p>
        </footer>
      </body>
    </html>
  );
}
