
import React from 'react'
import { useState, createContext } from 'react'
import top from '../assets/data/top.json'

const AppContext = createContext();

function ContextProvider({children}) {
    const [currentArticle, setCurrentArticle] = useState(top[0]);
    const [isCatgList, setIsCatgList] = useState(false);
    
  return (
    <AppContext.Provider value={{currentArticle,setCurrentArticle,isCatgList,setIsCatgList}}>
        {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }; 