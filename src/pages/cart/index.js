import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import ProductItem from '../store/ProductItem';
import { Table } from 'react-bootstrap';
import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    
    return ( 
        <Layout title="Cart" description="This is the Cart page" >
            <div >
                <div className=" mt-5">
                    <h1>Items in your Cart</h1>
                    {/* <p>This is the Cart Page.</p> */}
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            (
                                <Table class="table">
                                <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Color</th> 
                                    <th scope="col">Size</th>
                                    <th scope="col">Quantity</th> 
                                    <th scope="col">Price</th>
                                    
                                </tr>
                                </thead>
                                <tbody>
                                        {
                                            cartItems.map(product => (
                                                <tr scope="row">
                                                    <td>
                                                    <ProductItem key={product.id} product={product}/>
                                                    </td>
                                                    <td><h4 className="text-left">{product.color}</h4></td>
                                                    <td><h4 className="text-left">{product.size}</h4></td>
                                                    <td><h4 className="text-left">{product.quantity}</h4></td>
                                                    <td><h4 className="text-left">{formatNumber(product.price)}</h4></td>
                                                </tr>
                                            ))
                                        }
                                </tbody>
                                </Table>
                            ) :
                            <div className="p-3 text-center text-muted">
                                Your cart is empty
                            </div>
                        }

                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <p>Checkout successfull</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <div className="card card-body" style={{"backgroundColor":"#e4fbff"}}>
                            <h5 class="card-header">Summary</h5>
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Estimated Tax</p>
                                <h4 className=" mb-3 txt-right">$ 100</h4>
                                <p className="mb-1">Sipping charges</p>
                                <h4 className=" mb-3 txt-right">Free</h4>
                                
                                <hr className="my-4"/>
                                <p className="mb-1">Total Payment
                                <h3 className="m-0 txt-right">{formatNumber(total)}</h3></p>

                            </div>
                            <br/>
                            <div className="text-center">
                                    <button type="button" className="btn btn-danger mb-2" onClick={handleCheckout}>Proceed to Pay</button>
                                    {/* <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button> */}
                                </div>
                        </div>
                    }
                    
                </div>
            </div>
        </Layout>
     );
}
 
export default Cart;