import React ,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListings=()=>{
    
    const products=useSelector((state)=> state)
    const dispatch=useDispatch()

    const fetchProducts=async()=>{
        const response=await axios.get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log('errr',err)
        })
    dispatch(setProducts(response.data))
    }
   
    useEffect(()=>{
        fetchProducts();
    },[])
    console.log("products",products)
    return(
        <div className="ui grid container">
            <ProductComponent/>          
        </div>
    )
}

export default ProductListings



// const baseUrl = 'http://localhost:3000/api/v1'
// axios.get(`${baseUrl}/drivers`).then(res => res)
// Presto! By using axios we remove the need to pass the results of the HTTP request to the .json() method. Axios simply returns the data object you expect straight away. Additionally, any kind of error with an HTTP request will successfully execute the .catch() block right out of the box.