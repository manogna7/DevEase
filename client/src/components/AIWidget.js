import React, { useState } from 'react';
import axios from 'axios';

function AIWidget() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleGenerate = async () => {
    try {
      const res = await axios.post('/api/ai/generate', { prompt });
      setResponse(res.data.data);
    } catch (error) {
      console.error('Error generating response');
    }
  };

  return (
    <div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt"
      />
      <button onClick={handleGenerate}>Generate</button>
      <p>{response}</p>
    </div>
  );
}

export default AIWidget;
