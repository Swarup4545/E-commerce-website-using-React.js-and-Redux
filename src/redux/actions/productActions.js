import { ActionTypes } from "../constants/action-types"
import { productReducer } from "../reducer/productReducer"

export const setProducts=(products)=>{
    
    console.log('productAction',products)
    
    return{
        type:'SET_PRODUCTS',
        payload:products,
    }
}


export const selectedProduct=(products)=>{
    return{
        type:'SELECTED_PRODUCT',
        payload:products
    }
}

// export const removeSelectedProducts=(products)=>{
//     return{
//         type:ActionTypes.REMOVE_SELECTED_PRODUCT,
//         deploy:products
//     }
// }