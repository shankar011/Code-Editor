import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { highlightAll } from 'prismjs';
import './style.css'; 
import './prismthemes.css'; 

const CodeEditor = () => {
  const [code, setCode] = useState(`
    const helloWorld = () => {
      console.log("Hello World");
    };
    helloWorld();
  `);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className='container'>
      <textarea
        className='code-input'
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <pre className='output'>
        <code className='language-js'>{code}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;
