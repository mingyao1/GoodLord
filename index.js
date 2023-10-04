const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json())

app.post('/search', async (req, res) => {
  try {
    const query = req.body.query; // Get search query from request
    if (!query) {
      res.status = 401
      res.json({ error: 'Bro put a query' })
      console.log('Bro put a query')
      return
    }
    const apiKey = process.env.API_KEY; // Replace with your actual API key

    console.log(`query: ${query}`)
    
    const config = {
      headers: {
        'api-key': apiKey
      }
    };
    
    const apiRes = await axios.get(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/search?query=${query}`, config);
    console.log(apiRes.data)
    res.json(apiRes.data); // Send response back to client
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
    console.log('Something went wrong\n', error)
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
