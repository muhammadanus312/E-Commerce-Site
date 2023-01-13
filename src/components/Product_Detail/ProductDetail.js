import React,{useEffect} from "react";
import style from "./ProductDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IncreamentCartProduct,RemoveCartProduct } from '../../redux/CartProducts/CartProductSlice'

const ProductDetail = () => {

  const {productid} = useParams();
  console.log(productid)
    const dispatch=useDispatch()
    const products=useSelector((state)=>{return state.Products.Products})
    const prod=products.filter((item)=>{
      return item.productId==productid
    })
    console.log(prod)
    const product=prod[0]
  return (
    <div className={`container my-5 d-flex justify-content-center flex-wrap ${style.productdetail}`}>
      <div className={` ${style.pic}`}>
       <img
          className={`${style.productImg}`}
           src={product.productImg}
          alt=""
        />
       </div>
      {/* </div> */}
      <div className={'d-flex flex-column justify-content-center my-3'}>
        <h2 className="fw-bold my-1">{product.productName}</h2>
        <h5 className="my-3">{product.productDescription}</h5>
        <div className={`d-flex my-2`}>
            {
                product.tags.map((element,index)=>{
                    return(
                        <div className={` my-3 ${style.tag} mx-1`}>
                            <p className={`${style.tagContent}`}>{element}</p>
                        </div>
                    )
                })
            }
        </div>  
        <div className="d-flex my-4">
            <h3 className="mx-2">R$</h3>
            <h2 className="fw-bold">{product.productPrice}</h2>
        </div>
        <div className="d-flex mt-5">
            <button onClick={()=>{dispatch(IncreamentCartProduct(product))}} className={`mx-1 ${style.btn}`}>Add to Cart</button>
            <button onClick={()=>{dispatch(RemoveCartProduct(product.productId))}} className={`mx-1 ${style.btn}`}>Remove from cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
