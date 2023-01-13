import React from 'react'
import style from './ProductCard.module.css'
import cartWhite from '../../assets/images/icons/cart-white.svg'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { IncreamentCartProduct,DecreamentCartProduct,RemoveCartProduct } from '../../redux/CartProducts/CartProductSlice'
const ProductCard = ({product}) => {
    const dispatch =useDispatch()
    const ClickDecreament=(e,product)=>{
        e.stopPropagation();
        e.preventDefault()
        dispatch(DecreamentCartProduct(product))
        // dispatch(RemoveCartProduct(product.productId))
    }
    const ClickIncreament=(e,product)=>{
        e.preventDefault()
        e.stopPropagation();
        dispatch(IncreamentCartProduct(product))

    }
    const qty=useSelector((state)=>{
        const obj= state.cartProducts.cartProducts.cartProducts.filter((element)=>{
            return element.productId===product.productId
        })
        // console.log(obj)
        if(obj.length>0){
            return obj[0].quantity
        }
        else{
            return 0
        }
    })

  return (
    <Link to={`/detail/${product.productId}`} className={`text-black text-decoration-none mx-4 my-4 ${style.card} d-flex flex-column`}>     
        <img className={`${style.productImg}`} src={product.productImg} alt="" />   
        <div className={`d-flex justify-content-center align-items-center my-2`}>
            {
                product.tags.map((element,index)=>{
                    return(
                        <div className={`text-align-center ${style.tag} mx-1`}>
                            <p className={`${style.tagContent}`}>{element}</p>
                        </div>
                    )
                })
            }
        </div>  
        <h4 className='mt-3 '>{product.productName}</h4>
        <div className={`${style.desc}`}>
            <p className='p-small'>{product.productDescription}</p>
        </div>
        <div className={`mx-2 d-flex `}>
            <div className={`d-flex`}>
                <p>R$</p>
                <p className={`${style.price} fw-bold mx-1`}>{product.productPrice}</p>
            </div>
            <div className={`${style.counter}`}>
                <button onClick={(e)=>{ClickDecreament(e,product)}} className={`${style.counterBtn}`}>-</button>
                <span className={`border-none p-2`}>{qty}</span>
                <button onClick={(e)=>{ClickIncreament(e,product)}} className={`${style.counterBtn}`}>+</button>
            </div>
            <button  className={`${style.cartBtn}`}>
                <Link onClick={(e)=>{ e.stopPropagation();}} to="/cart"><img className='mb-1' src={cartWhite} alt="" /></Link>
            </button>
        </div>
        
    </Link>
  )
}
export default ProductCard