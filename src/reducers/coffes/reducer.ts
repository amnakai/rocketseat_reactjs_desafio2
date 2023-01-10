
import { produce } from 'immer';
import { ActionTypes } from './actions'

export interface Coffe {
    id: number,
    name: string,
    description: string,
    img: string,
    tags: string[],
    price: number,
    amount?: number
}

export interface DeliveryData {
    cep: string,
    street: string,
    number: string,
    district: string,
    county: string,
    uf: string,
    payment: string
}

interface CoffeStoreState {
    coffe_list: Coffe[];
    delivery_data?: DeliveryData
}


export function coffeStoreReducer(state: CoffeStoreState, action: any) {
    switch (action.type) {
        case ActionTypes.SET_COFFE_AMOUNT: {
            const coffeIndex = state.coffe_list.findIndex((coffe) => {
                return coffe.id === action.payload.id
            })

            if (coffeIndex < 0) {
                return state;
            }

            return produce(state, (draft) => {
                draft.coffe_list[coffeIndex].amount = action.payload.amount;
            })
        }

        case ActionTypes.ADD_COFFE_AMOUNT: {
            const coffeIndex = state.coffe_list.findIndex((coffe) => {
                return coffe.id === action.payload.id
            })

            if (coffeIndex < 0) {
                return state;
            }

            return produce(state, (draft) => {
                draft.coffe_list[coffeIndex].amount =  (draft.coffe_list[coffeIndex]?.amount || 0) + parseFloat(action.payload.amount);;    
            })
        }

        case ActionTypes.RESET_COFFE_AMOUNT: {
            return produce(state, (draft) => {
                draft.coffe_list.map(coffe => {
                    coffe.amount = 0;
                    return coffe;
                })
            })
        }

        case ActionTypes.SET_DELIVERY_DATA: {
            
            return produce(state, (draft) => {
                draft.delivery_data = action.payload.deliveryData;
            })
        }

        default: 
            return state;
    }
}