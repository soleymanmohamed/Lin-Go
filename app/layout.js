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
      <body>
        {children}
      </body>
    </html>
  );
}
