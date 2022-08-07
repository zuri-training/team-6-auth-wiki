import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "../prism.css";

import Editor from "react-simple-code-editor";

import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

import "./prism-vsc-dark-pluss.css";
import "./editor.css";

// export default function Code({codeSnippet }) {
//   const [code, setCode] = useState(codeSnippet);

//   return (
//     <div className="App">
//       <div className='window'>
//         <div className="title-bar">
//           <div className="title-buttons">
//             <div className="title-button"></div>
//             <div className="title-button"></div>
//             <div className="title-button"></div>
//           </div>
//         </div>
//         <div className='editor_wrap'>
//           <Editor
//             value={code}
//             onValueChange={code => setCode(code)}
//             highlight={code => highlight(code, languages.js)}
//             padding={10}
//             style={{
//               fontFamily: '"Fira code", "Fira Mono", monospace',
//               fontSize: 12
//             }}
//           />
//         </div>
//       </div>

//     </div>
//   );
// }

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language} line-numbers`}>{code}</code>
      </pre>
    </div>
  );
}
