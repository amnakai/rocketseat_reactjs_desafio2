import {
    createContext,
    ReactNode,
    useEffect,
    useReducer,
    useState,
  } from 'react'

import coffe_db from '../assets/cafe/cafe.json'
import { setCoffeAmountAction, resetCoffeAmountAction, setDeliverDataAction, addCoffeAmountAction } from '../reducers/coffes/actions'
import { Coffe, coffeStoreReducer, DeliveryData } from '../reducers/coffes/reducer'

interface CoffesContextType {
    coffe_list: Coffe[],
    setCoffeAmount: (id: number, amount: number) => void,
    addCoffeAmount: (id: number, amount: number) => void,
    resetCoffeAmount: () => void,
    delivery_data?: DeliveryData,
    setDeliveryData: (data: DeliveryData) => void
}

export const CoffesContext = createContext({} as CoffesContextType)

interface CoffesContextProps {
  children: ReactNode
}

export function CoffesContextProvider({ children }:  CoffesContextProps) {
  const [coffeStoreState, dispatch] = useReducer(
    coffeStoreReducer,
    {
      coffe_list: [],
    },
    () => {
      const coffe_list = coffe_db.map(coffe => {
        return {...coffe, amount: 0}
      })

      return {coffe_list}
    }
  )
 
  const { coffe_list, delivery_data } = coffeStoreState;

  function setCoffeAmount(id: number, amount: number) {
    dispatch(setCoffeAmountAction(id, amount));
  }

  function addCoffeAmount(id: number, amount: number) {
    dispatch(addCoffeAmountAction(id, amount));
  }

  function resetCoffeAmount() {
    dispatch(resetCoffeAmountAction());
  }

  function setDeliveryData(data: DeliveryData) {
    dispatch(setDeliverDataAction(data));
  }

  return(
    <CoffesContext.Provider
      value={{
        coffe_list,
        setCoffeAmount,
        addCoffeAmount,
        resetCoffeAmount,
        delivery_data,
        setDeliveryData
      }}
    >
      {children}
    </CoffesContext.Provider>
  )

}