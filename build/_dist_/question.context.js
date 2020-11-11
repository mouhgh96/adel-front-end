import React, {useState} from "../web_modules/react.js";
export let QuestionsContext = React.createContext();
QuestionsContext.displayName = "QuestionsContext";
export const QuestionProvider = ({children}) => {
  let state = useState([]);
  return /* @__PURE__ */ React.createElement(QuestionsContext.Provider, {
    value: state
  }, children);
};
