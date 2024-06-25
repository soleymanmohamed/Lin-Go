"use client";

import DecryptionEffect from '../components/DecryptionEffect';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [englishText, setEnglishText] = useState('');
  const [frenchText, setFrenchText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.post('/api/translate', { text: englishText, targetLang: 'fr' });
      setFrenchText(response.data.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <>
      <DecryptionEffect />
      <div className="grid-layout">
        <div className="border-green">
          <h2 className="text-2xl mb-4">English</h2>
          <textarea
            placeholder="Enter text in English..."
            value={englishText}
            onChange={(e) => setEnglishText(e.target.value)}
          ></textarea>
          <button onClick={handleTranslate}>Translate</button>
        </div>
        <div className="border-green">
          <h2 className="text-2xl mb-4">French</h2>
          <textarea
            placeholder="Translation will appear here..."
            value={frenchText}
            readOnly
          ></textarea>
        </div>
      </div>
    </>
  );
}
