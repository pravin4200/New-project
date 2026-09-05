import { useState, useEffect } from 'react';
import TextStats from './TextStats';

function TextAnalyzer() {
  const [text, setText] = useState('');

  const charCount = text.length;
  const wordCount = text.trim() === ''? 0 : text.trim().split(/\s+/).length;

  // Requirement 6: Update document title when char count changes
  useEffect(() => {
    document.title = `Chars: ${charCount}`;
  }, [charCount]);

  return (
    
    <div style={{ width: '500px', margin: '40px auto', color: 'white', background: '#111', padding: '20px', borderRadius: '12px', border: '1px solid #00d4ff' }}>
      <h2>Text Analyzer</h2>
      <textarea
        rows="6"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
      />
      <p style={{ marginTop: '15px' }}><b>Entered Text:</b> {text}</p>

      <TextStats charCount={charCount} wordCount={wordCount} />
    </div>
  );
}
export default TextAnalyzer;