import React, { useState } from 'react';
import axios from 'axios';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { materialDark } from '@uiw/codemirror-theme-material';

function AIWidget() {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/api/ai/generate', { 
        prompt,
        language: 'react'
      });
      setGeneratedCode(res.data.code);
    } catch (error) {
      console.error('Error generating code:', error);
      alert('Failed to generate code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-widget">
      <h3>AI Code Generator</h3>
      <div className="input-section">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the component you want to create..."
          rows="3"
        />
        <button onClick={handleGenerate} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Code'}
        </button>
      </div>
      
      {generatedCode && (
        <div className="code-output">
          <CodeMirror
            value={generatedCode}
            height="400px"
            theme={materialDark}
            extensions={[javascript({ jsx: true })]}
            onChange={(value) => setGeneratedCode(value)}
            basicSetup={{
              lineNumbers: true,
              highlightActiveLineGutter: true,
              highlightSpecialChars: true,
              foldGutter: true,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default AIWidget;
