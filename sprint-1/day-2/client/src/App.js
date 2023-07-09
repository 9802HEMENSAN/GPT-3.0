import React, { useState } from 'react';
import './styles.css'; // Assuming the CSS code is in a file named "styles.css"
const BASE_URL= `https://api.openai.com/v1/engines/davinci-codex/completions`
function App() {
  const [code, setCode] = useState('');
  const [convertedCode, setConvertedCode] = useState('');
  const [language, setLanguage] = useState('');

  const handleConvert = async () => {
    try {
      const response = await fetch(`${BASE_URL}/convert`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }),
      });

      const data = await response.json();
      setConvertedCode(data.convertedCode);
    } catch (error) {
      console.error('Error converting code:', error);
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code..."
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">Select Language</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          {/* Add more options for different languages */}
        </select>
        <button onClick={handleConvert}>Convert</button>
      </div>
      <div className="right-section">
        <pre>{!convertedCode ? <h1>Loading...</h1> : convertedCode }</pre>
      </div>
    </div>
  );
}

export default App;
