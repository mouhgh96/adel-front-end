import React, { useState } from 'react';

export let QuestionsContext = React.createContext();
QuestionsContext.displayName = 'QuestionsContext';
export const QuestionProvider = ({ children }) => {
  let state = useState([]);
  return (
    <QuestionsContext.Provider value={state}>
      {children}
    </QuestionsContext.Provider>
  );
};
