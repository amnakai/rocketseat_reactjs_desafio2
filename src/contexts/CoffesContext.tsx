import {
    createContext,
    ReactNode,
    useEffect,
    useReducer,
    useState,
  } from 'react'

import coffe_db from '../assets/cafe/cafe.json'
import { Coffe, coffeStoreReducer } from '../reducers/coffes/reducer'

interface CoffesContextType {
    coffe_list: Coffe[]
}

export const CoffesContext = createContext({} as CoffesContextType)

interface CoffesContextProps {
  children: ReactNode
}

export function CoffesContextProvider({ children }:  CoffesContextProps) {
  const [coffeStoreState, dispatch] = useReducer(
    coffeStoreReducer,
    {
      coffe_list: []
    },
    () => {
      const coffe_list = coffe_db.map(coffe => {
        return {...coffe, amount: 0}
      })

      return {coffe_list}
    }
  )
 
  const { coffe_list } = coffeStoreState;

  return(
    <CoffesContext.Provider
      value={{
        coffe_list
      }}
    >
      {children}
    </CoffesContext.Provider>
  )

}