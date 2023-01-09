import { Coffe } from './reducer'

export enum ActionTypes {
    SET_COFFE_AMOUNT = 'SET_COFFE_AMOUNT'
}

export function setCoffeAmount(id: number, amount: number) {
    return {
        type: ActionTypes.SET_COFFE_AMOUNT,
        payload: {
            id, 
            amount
        }
    }
}