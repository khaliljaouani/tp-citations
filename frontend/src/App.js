import React, { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const res = await fetch('http://localhost:5000/quotes');
      const data = await res.json();
      setQuote(data.quote);
    } catch (err) {
      console.error('Erreur lors de la récupération de la citation :', err);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎯 Citation du jour</h1>
      <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
        {quote}
      </blockquote>
    </div>
  );
}

export default App;
