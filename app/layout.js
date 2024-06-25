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
        <header>
          <h1 className="text-4xl font-bold logo-text">LinGo</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 LinGo</p>
        </footer>
      </body>
    </html>
  );
}
