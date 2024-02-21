import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
const Header =()=>{

    const product=useSelector((state)=>state.product)
    let c=[]
    for(let x=0;x<=Object.keys(product).length;x++)
    {
        c.push(product[x])
    }
    
    return(
        <div className='nav'>
            <div className='nav-brand'>
                <h1 >Hello</h1>
            </div>
            <div className='nav-menu'>
                <ul className='menu'>
                <li className='shop'>
                    <Link to='/'>Shopping</Link>
                    </li>
                    <li>
                    <Link to='/pro'>Product Details</Link>
                    </li>
                    <li className='count'>
                    {c.length-1}
                    </li>
                    <li>
                    <p className='cart'><i class="fa fa-solid fa-cart-shopping"></i></p>
                    </li>
                </ul>
            </div>
        </div>
    )
    
}

export default Header;