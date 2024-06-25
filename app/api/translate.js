import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text, targetLang } = req.body;
    try {
      const response = await axios.post('https://translation-api-url', {
        q: text,
        target: targetLang,
        // Add your API key and other necessary parameters here
      });
      res.status(200).json({ translatedText: response.data.translatedText });
    } catch (error) {
      res.status(500).json({ error: 'Error translating text' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
