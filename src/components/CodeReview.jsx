import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { reviewCode } from "../utility/gemini";
import "../App.css";  // Import external CSS

const CodeReview = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [review, setReview] = useState("");
  const handleReview = async () => {
    setReview("AI is analyzing...");
    const aiReview = await reviewCode(code);
    setReview(aiReview);
  };

  return (
    <div className="container">
      <h2>Code Review AI</h2>

      <CodeMirror
        value={code}
        height="200px"
        extensions={[javascript()]}
        onChange={(val) => setCode(val)}
      />

      <button onClick={handleReview}>Review Code</button>

      {review && <p className="review-text">{review}</p>}
    </div>
  );
};

export default CodeReview;
