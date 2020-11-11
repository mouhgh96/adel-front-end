
const code = ".Admin__spinner {\n    margin: 36vh auto;\n    text-align: center;\n}\n\n.Admin__User {\n    --light-text: rgba(0, 0, 0, 0.54);\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n    background: white;\n    border-radius: 5px;\n    padding: 0.5rem 1rem;\n}\n\n.Admin__User--header {\n    display: flex;\n    justify-content: space-between;\n}\n\n.Admin__User--header .left h1 {\n    margin: 0;\n    font-size: 1.5rem;\n    font-weight: 400;\n    line-height: 1.334;\n    letter-spacing: 0em;\n}\n\n.Admin__User--header .left span {\n    color: var(--light-text);\n}\n\n.card-user-info {\n    margin-top: 8px;\n    font-size: 14px;\n    font-weight: 600;\n    color: #999;\n}\n\n.card-user-info span {\n    color: #333;\n    text-transform: uppercase;\n    margin-left: 2px;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);