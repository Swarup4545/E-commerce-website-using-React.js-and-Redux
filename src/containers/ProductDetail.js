import React,{useEffect} from "react";
import { useSelector } from "react-redux";
const ProductDetail=()=>{
    const products=useSelector((state)=>state.allProducts.products)
    const product=useSelector((state)=>state.product)
    let c=[]
    for(let x=0;x<=Object.keys(product).length;x++)
    {
        c.push(product[x])
    }
    let y;
    
    function del(id){
      y=c.splice(id,1)
      console.log('cancel',y)
    }
    return(
        Object.keys(product).length === 0? (<p>no data</p>) : (<div className="main-cardd">
        <div className="row">
          {c.map((id, index) => (
            <div key={index} className="column">
              <p className="hidden">{id > 0 ? id-- : id}</p>
              {products[id] && (
                <div className="cardd">
                  <img className="Img" src={products[id].image} alt={products[id].title} />
                  <div className="title-box"><p>{products[id].title}</p></div>
                  <button onClick={()=>del(id)}>Cancel</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>)
    )
}

export default ProductDetail

