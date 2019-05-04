import { FETCH_PRODUCTS, FETCH_CART, FILTER_METHOD} from './types'
import { Products as products}  from '../components/Data'

export const fetchProducts = () => dispatch => {
    dispatch({
        type:FETCH_PRODUCTS,
        payload:products
    })
}

export const fetchCart = () => dispatch => {
    const cart = localStorage.getItem('cart')
    dispatch({
        type:FETCH_CART,
        payload:cart
    })
}

export const getCategories = () => dispatch => {
    dispatch({
        type:FETCH_CART,
        payload:'categories'
    })
}


// const filterdata = (cat, fil) => {
//     let a = ''
//     fil.map(data => {
//         a = cat.filter(item => {
//                 return item.category === data
//             })
//         return a
//     })
//     console.log(a)
//     return a
// } 

// const filterdata = (cat, fil) => {
//     cat.map(data => {
//         fil.map(item => {
//             if(data.category !== item){

//             }
//         })
//     })

//     return cat
// }

// const filterdata = (cat, fil) => {
//     // const arr = []
//     // fil.map(data => {
//     // const a = cat.filter(item => {
//     //         return item.category === data
//     //     })
//     // })
//     // console.log(arr)
//     // return arr

//     let a = ''
//     fil.map(data => {
//         a = cat.filter(item => {
//                 return item.category === data
//             })
//         return a
//     })
//     cat.pop(a)
    
//     console.log(cat)
//     return cat

// } 

const filterdata = (cat, fil) => {

    let filtered = cat.filter(item => fil.includes(item.category) )

    return filtered
}


export const filterMethod = (fil) => dispatch => {
    let cat = products
    let FilterData = []
    if(fil.length === 0){
        FilterData = products
    } else {
      FilterData = filterdata(cat, fil)
    }


    dispatch({
        type:FILTER_METHOD,
        payload:FilterData
    })

}



// export const newProduct = (productData) => dispatch => {
//     dispatch({
//         type:FETCH_PRODUCTS,
//         payload:productData
//     })
// }