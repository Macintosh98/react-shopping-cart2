import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';

const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <div className="container-fluid1">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{"backgroundColor":"#e4fbff"}}>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">MyAccount</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">English</a>
                    </li>
                </ul>
            </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to='/'><b style={{"color":"orange"}}>SHO</b><b style={{"color":"blue"}}>PIX</b></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto justify-content-center" style={{    "padding-left": "30%"}}>
            <li class="nav-item active">
            <Link to='/'>Man</Link>
            </li>
            <li class="nav-item">
            <Link to='/'>Woman</Link>
            </li>
            <li class="nav-item">
            <Link to='/'>Kids</Link>
            </li>
            <li class="nav-item">
            <Link to='/'>Home & Living</Link>
            </li>
            <li class="nav-item">
            <Link to='/'>Book & More</Link>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            <Link to='/cart'> <CartIcon/>Cart ({itemCount})</Link>
            </form>
        </div>
        </nav>
     </div>
     );
}
 
export default Header;