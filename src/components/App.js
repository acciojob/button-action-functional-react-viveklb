import React, {Component, useState} from "react";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  return (
    <div id="main">
      <button id="click" onClick={() => setShowParagraph(true)}>
        Click
      </button>
      {showParagraph && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
      )}
    </div>
  );
}


export default App;
