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

interface CoffeStoreState {
    coffe_list: Coffe[];
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
        default: 
            return state;
    }
}