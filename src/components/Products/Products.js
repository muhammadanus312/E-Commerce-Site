import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import style from "./Products.module.css";
import products from '../../ProductList'
import ProductCard from "../ProductCard/ProductCard";
import { AddProducts } from "../../redux/Products/ProductSlice";
const Products = () => {
  const dispatch=useDispatch()
  const addProducts=()=>{
    dispatch(AddProducts(products))
  }
    useEffect(() => {
      addProducts()
    }, [])
    const prod=useSelector((state)=>{return state.Products.Products})
    console.log(prod)
  return (
    <div className={`${style.product} pt-5`}>
      <div className="container">
        <h2>Nossos cafés</h2>
        <div className={`d-flex flex-wrap justify-content-center`}>
            {prod.map((element,index)=>{
                return(
                    <>
                      <ProductCard key={index} product={element}/>
                    </>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
