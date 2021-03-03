import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../components/icons'

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase, decrease, removeProduct } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div className="card card-body">
            <div className="row">
            <div class="col-sm">
                <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
                src={product.photo + '?v=' + product.id} alt=""/>
                </div>
                <div class="col-sm">
                <p>{product.name}</p>
                {/* <h3 className="text-left">{formatNumber(product.price)}</h3> */}
                <div className="text-right">
                    {/* <Link  to="/" className="btn btn-link btn-sm mr-2">Details</Link> */}

                    {
                        isInCart(product) && 
                        // <button 
                        // onClick={() => increase(product)}
                        // className="btn btn-outline-primary btn-sm">Add more</button>
                        <button 
                        onClick={() => increase(product)}
                        className="btn btn-primary btn-sm mr-2 mb-1">
                            <PlusCircleIcon width={"20px"}/>
                        </button>
                    }

                    {
                        !isInCart(product) && 
                        <button 
                        onClick={() => addProduct(product)}
                        className="btn btn-primary btn-sm">Add to cart</button>
                    }

                {
                     product.quantity > 1 &&
                     <button
                    onClick={() => decrease(product)}
                    className="btn btn-danger btn-sm mb-1">
                        <MinusCircleIcon width={"20px"}/>
                    </button>
                 }

                {
                     product.quantity === 1 &&
                     <button
                    onClick={() => removeProduct(product)}
                    className="btn btn-danger btn-sm mb-1">
                        <TrashIcon width={"20px"}/>
                    </button>
                 }
                    
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductItem;