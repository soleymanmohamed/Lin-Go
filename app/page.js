"use client";

import DecryptionEffect from '../components/DecryptionEffect';
import ClientLayout from '../components/ClientLayout';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [englishText, setEnglishText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLang, setTargetLang] = useState('fr');

  const handleTranslate = async () => {
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        body: JSON.stringify({ text: englishText, targetLang }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <ClientLayout>
      <DecryptionEffect />
      <div className="grid-layout">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="border-green"
        >
          <h2 className="text-2xl mb-4">English</h2>
          <textarea
            placeholder="Enter text in English..."
            value={englishText}
            onChange={(e) => setEnglishText(e.target.value)}
            className="textarea"
          ></textarea>
          <div className="mt-4">
            <label htmlFor="language" className="block text-left mb-2">Select Language:</label>
            <select
              id="language"
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="select"
            >
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="ru">Russian</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleTranslate}
            className="button"
          >
            Translate
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="border-green"
        >
          <h2 className="text-2xl mb-4">Translation</h2>
          <textarea
            placeholder="Translation will appear here..."
            value={translatedText}
            readOnly
            className="textarea"
          ></textarea>
        </motion.div>
      </div>
    </ClientLayout>
  );
}
