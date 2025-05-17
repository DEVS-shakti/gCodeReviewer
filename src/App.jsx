'use client'
import { useEffect, useState } from "react";
import CodeReview from "./components/CodeReview";
import './App.css';
import "prismjs/themes/prism-tomorrow.css";
import Editor from 'react-simple-code-editor';
import prism from "prismjs";
import Markdown from 'react-markdown';
import { reviewCode } from "./utility/gemini";

function App() {
  const [code, setCode] = useState(`function App(){ return a+b }//sample code`);
  const [review, setReview] = useState(`Review will be shown here.`);

  const handleReview = async () => {
    setReview("AI is analyzing...");
    const aiReview = await reviewCode(code);

    // Wrap AI response in triple backticks for syntax highlighting
    setReview(`\`\`\`js\n${aiReview}\n\`\`\``);
  };

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 15,
              backgroundColor: "#000",
              borderRadius: 5,
              height: "100%",
              width: "100%",
              color: "#fff",
              overflowY: "auto"
            }}
          />
        </div>
      </div>
        <button className="btn" onClick={handleReview}>Review</button>
      <div className="right">
        <Markdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <pre className={className} style={{ padding: '10px', borderRadius: '5px' }}>
                  <code dangerouslySetInnerHTML={{ __html: prism.highlight(children, prism.languages[match[1]], match[1]) }} />
                </pre>
              ) : (
                <code className={className} {...props}>{children}</code>
              );
            }
          }}
          style={{
            fontFamily: '"Fira Code", "Fira Mono", monospace',
            fontSize: 20,
            backgroundColor: "#000",
            borderRadius: 5,
            border: "1px solid #ccc",
            height: "100%",
            width: "100%",
            color: "#fff",
            overflowY: "auto"
          }}
        >
          {review}
        </Markdown>
      </div>
    </main>
  );
}

export default App;
