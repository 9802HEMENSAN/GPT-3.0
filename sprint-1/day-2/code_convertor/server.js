const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const PORT = 3000; // or any other port you prefer

app.use(express.json());

app.post('/convert', async (req, res) => {
    try {
      const { code, language } = req.body;
      const response = await axios.post(process.env.API_URL, {
        prompt: `Convert the following ${language} code: \n\n${code}`,
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
        stop: '\n\n',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      });
      const convertedCode = response.data.choices[0].text.trim();
      res.json({ convertedCode });
    } catch (error) {
      console.error('Code conversion failed:', error);
      res.status(500).json({ error: 'Code conversion failed' });
    }
  });
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

