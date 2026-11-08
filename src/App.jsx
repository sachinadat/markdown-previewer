import { useState } from 'react';
import { marked } from 'marked';
import { initialMarkdown } from './defaultMarkdown'; 
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const htmlPreview = marked.parse(markdown, {
    async: false,
    breaks: true,
    gfm: true
  });


  return (
    <div className="previewer-container">
      
      {/* LEFT COLUMN: Input Textarea */}
      <div className="editor-column">
        <h3>Markdown Input</h3>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="markdown-input"
          placeholder="Type markdown here..."
        />
      </div>

      {/* RIGHT COLUMN: HTML Output */}
      <div className="preview-column">
        <h3>Preview</h3>
        <div
          dangerouslySetInnerHTML={{ __html: htmlPreview }}
          className="html-preview"
        />
      </div>

    </div>
  );
}

export default App;
