
const code = ".select {\n    padding: 18.5px 14px;\n    width: 100%;\n}\n\n.competence {\n    display: block;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);