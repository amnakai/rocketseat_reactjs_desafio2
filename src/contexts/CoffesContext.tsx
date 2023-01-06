import {
    createContext,
    ReactNode,
    useEffect,
    useReducer,
    useState,
  } from 'react'

import coffe_db from '../assets/cafe/cafe.json'
import { Coffe } from '../reducers/coffes/reducer'

interface CoffesContextType {
    coffe_list: Coffe[]
}

export const CoffeContext = createContext({} as CoffesContextType)

interface CoffesContextProps {
  children: ReactNode
}

export function CoffesContextProvider({ children }:  CoffesContextProps) {
  console.log(coffe_db)
  
}