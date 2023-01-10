import { Coffe, DeliveryData } from './reducer'

export enum ActionTypes {
    SET_COFFE_AMOUNT = 'SET_COFFE_AMOUNT',
    ADD_COFFE_AMOUNT = 'ADD_COFFE_AMOUNT',
    RESET_COFFE_AMOUNT = 'RESET_COFFE_AMOUNT',
    SET_DELIVERY_DATA = 'SET_DELIVERY_DATA'
}

export function setCoffeAmountAction(id: number, amount: number) {
    return {
        type: ActionTypes.SET_COFFE_AMOUNT,
        payload: {
            id, 
            amount
        }
    }
}

export function addCoffeAmountAction(id: number, amount: number) {
    return {
        type: ActionTypes.ADD_COFFE_AMOUNT,
        payload: {
            id, 
            amount
        }
    }
}

export function resetCoffeAmountAction() {
    return {
        type: ActionTypes.RESET_COFFE_AMOUNT
    }
}

export function setDeliverDataAction(data: DeliveryData) {
    return {
        type: ActionTypes.SET_DELIVERY_DATA,
        payload: {
            deliveryData: data
        }
    }
}