import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import DATA from '../DATA';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const proId = useParams();
    const productDetail = DATA.filter((x)=> x.id==proId.id);
    const product = productDetail[0];

    const dispatch = useDispatch();


    const handleCart = (product) =>{
        if(cartBtn === "Add to Cart"){
            dispatch(addItem(product));
            setCartBtn("Remove from item");
        }else{
            dispatch(delItem(product));
            setCartBtn("Add to Cart")
        }

    }
  return (
    <div>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="product col-md-6 d-flex justify-content-center mx-auto">
                    <img src={product.img} alt={product.title} height='400px' width='400px'/>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className='fw-bold display-5'>{product.title}</h1>
                    <hr/>
                    <h2 className='my-4'>${product.price}</h2>
                    <p className='lead'>{product.desc}</p>
                    <button className='btn btn-outline-primary my-5' onClick={()=>handleCart(product)}>{cartBtn}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail