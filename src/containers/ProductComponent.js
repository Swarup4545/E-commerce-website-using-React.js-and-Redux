import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
const ProductComponent=()=>{
    let mock=[]
    const products=useSelector((state)=>state.allProducts.products)
    const dispatch=useDispatch()
    const [selectedProducts, setSelectedProducts] = useState([]);
    let c=0
    //const {id,title}=products[0]
    const handleBuyNow = (id) => {
        
        setSelectedProducts((prevSelectedProducts) =>{
            // Use a callback to ensure the state is updated before dispatching
            const updatedProducts = [...prevSelectedProducts, id];
            dispatch(selectedProduct(updatedProducts));
            return updatedProducts;
          })
    
      };
   
    const renderList=products.map((product)=>{
        
        const {id,title,image,price,category}=product
        return(
            <div className="four wide column">
            <div className="ui link cards">
                <div className="mainbox">
                    <div className="images">
                        <img src={image}></img>
                    </div>
                    <div className="contents">
                        <div className="header">{title}</div>
                        <div className="meta price">${price}</div>
                        <div className="meta">{category}</div>
                        <button onClick={() => handleBuyNow(id)}>Buy Now</button>
                    </div>
                </div>
            </div>                
        </div>
        )
    })
    return(
        <>
        {renderList}
        </>
    )   
}

export default ProductComponent