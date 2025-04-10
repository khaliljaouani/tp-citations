const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const quotes = [
  "La simplicité est la sophistication suprême.",
  "Le savoir est le pouvoir.",
  "Code is like humor. When you have to explain it, it’s bad."
];

app.get('/quotes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
