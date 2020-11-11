
const code = "body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n.select {\n    padding: 18.5px 14px;\n    width: 100%;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);