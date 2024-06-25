// pages/api/translate.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { text, targetLang } = req.body;
      try {
        const response = await fetch('https://libretranslate.com/translate', {
          method: 'POST',
          body: JSON.stringify({
            q: text,
            source: 'en',
            target: targetLang,
            format: 'text',
            alternatives: 3,
            api_key: ''
          }),
          headers: { 'Content-Type': 'application/json' }
        });
  
        const data = await response.json();
        res.status(200).json({ translatedText: data.translations[0].text });
      } catch (error) {
        res.status(500).json({ error: 'Error translating text' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  