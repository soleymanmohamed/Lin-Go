"use client";

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
    <div className="mt-10 grid grid-cols-2 gap-10 w-full max-w-4xl">
      <div className="border border-green-400 p-5 rounded">
        <h2 className="text-2xl mb-4">English</h2>
        <textarea
          className="w-full h-64 bg-black text-green-400 border border-green-400 p-2 rounded"
          placeholder="Enter text in English..."
          value={englishText}
          onChange={(e) => setEnglishText(e.target.value)}
        ></textarea>
        <button
          className="mt-4 px-4 py-2 bg-green-400 text-black rounded"
          onClick={handleTranslate}
        >
          Translate
        </button>
      </div>
      <div className="border border-green-400 p-5 rounded">
        <h2 className="text-2xl mb-4">French</h2>
        <textarea
          className="w-full h-64 bg-black text-green-400 border border-green-400 p-2 rounded"
          placeholder="Translation will appear here..."
          value={frenchText}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}
