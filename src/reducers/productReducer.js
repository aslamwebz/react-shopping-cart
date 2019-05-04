import { FETCH_PRODUCTS,FETCH_CART, FILTER_METHOD,CATEGORIES } from '../actions/types'

const initialState = {
    cart:[],
    products:[],
    product:{},
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_PRODUCTS:
            return{
                ...state,
                products:action.payload
            }
        case FETCH_CART:
            return{
                ...state,
                cart:action.payload
            }
        case FILTER_METHOD:
            return{
                ...state,
                products:action.payload
            }
        case CATEGORIES:{
            return{
                ...state,
                categories:action.payload
            }
        }
        // case NEW_PRODUCT:
        //     console.log('new reducer')
        //         return{
        //             ...state,
        //             product:action.payload
        //         }
        default:
            return state
    }
}