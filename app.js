const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/search', async (req, res) => {
  try {
    const query = req.query.q; // Get search query from request
    const apiKey = process.env.API_KEY; // Replace with your actual API key
    
    const config = {
      headers: {
        'api-key': apiKey
      }
    };
    
    const apiRes = await axios.get(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/search?query=${query}`, config);
    
    res.json(apiRes.data); // Send response back to client
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
