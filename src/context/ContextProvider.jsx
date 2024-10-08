
import React from 'react'
import { useState, createContext } from 'react'

const AppContext = createContext();

function ContextProvider({children}) {
    const [currentArticle, setCurrentArticle] = useState();
    const [isCatgList, setIsCatgList] = useState(false);
    
  return (
    <AppContext.Provider value={{currentArticle,setCurrentArticle,isCatgList,setIsCatgList}}>
        {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }; 