import React, { useState } from 'react'

import "../../index.css"
import { Link } from 'react-router-dom'

import { Icon } from 'react-icons-kit'
import { bars } from 'react-icons-kit/fa/bars'
import { ic_shopping_cart_outline } from 'react-icons-kit/md/ic_shopping_cart_outline'
import { ic_home } from 'react-icons-kit/md/ic_home'
import { priceTags } from 'react-icons-kit/icomoon/priceTags'
import { cog } from 'react-icons-kit/icomoon/cog'
import { exit } from 'react-icons-kit/icomoon/exit'
import { undo2 } from 'react-icons-kit/icomoon/undo2'
import { apiUrlBase } from '../service/apiUrlBase'
import axios from 'axios'
import CartPreview from './cart/CartPreview'

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [colorChange, setColorChange] = useState(false)
    const [preview, setPreview] = useState(false)
    const [cartList, setCartList] = useState([])

    function openMenu(){
        const nav = document.getElementById("nav")
        const navMenu = document.getElementById("nav-menu")
        if(!open){
            setOpen(true)
            nav.classList.add("hidden-menu")
            navMenu.classList.add("open-menu")
        }else if(open){
            setOpen(false)
            nav.classList.remove("hidden-menu");
            navMenu.classList.remove("open-menu")
        }

    }

    const navChangeColor = () => {
        const nav = document.getElementById('nav')
        
        if(window.scrollY > 80){
            setColorChange(true)
        }else {
            setColorChange(false)
        }

    }
    window.addEventListener('scroll', navChangeColor)

    function logout(){
        const URL = apiUrlBase + "auth/logout"
        let token = localStorage.getItem("access_token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(URL, config)
        .then(res => {
            console.log(res.data)
            localStorage.clear("access_token")
            localStorage.clear("refresh_token")
            location.reload()
        })
        .catch(err => {
            throw new Error(err)
        })
    }

    function displayPreview(){
        let sessionCart = JSON.parse(sessionStorage.getItem('cartList'))
        setPreview(true)
        if(preview){
            setCartList(sessionCart)
        }
        console.log(cartList)
    }

    function hiddenPreview(){
        setPreview(false)
    }

    
    return (
        <div>
            <nav className={colorChange ? 'nav nav-bg' : 'nav'} id='nav'>
                <Link onMouseLeave={hiddenPreview} onMouseOver={displayPreview} to="/cart" className='cart-link'>
                    <Icon icon={ic_shopping_cart_outline} size={30}></Icon>
                    {preview && sessionStorage.getItem('cartList') != null ? <CartPreview cartList={cartList}/> : <p id='cart-count'>{sessionStorage.getItem('cartCount')}</p>}
                </Link>
                <Link to="/"><h3>IT Training</h3></Link>
                <button className='nav-display' onClick={openMenu}><Icon icon={bars} size={28}></Icon></button>
            </nav>

            <nav className='nav-menu' id='nav-menu'>
                <button onClick={openMenu} className='close-btn'><Icon icon={undo2} size={28}></Icon></button>
                <ul>
                    <Link to="/">
                        <li onClick={openMenu}>
                            <button className='icon-btn'>
                                <Icon icon={ic_home} size={29}></Icon>
                            </button> 
                            Home
                        </li>
                    </Link>
                    <Link to="/courses/offer">
                        <li onClick={openMenu}>
                            <button className='icon-btn'>
                                <Icon icon={priceTags} size={27}></Icon>
                            </button> 
                            Offer
                        </li>
                    </Link>
                    <Link to="/courses/cart">
                        <li onClick={openMenu}>
                            <button className='icon-btn'>
                                <Icon icon={ic_shopping_cart_outline} size={28}></Icon>
                            </button> 
                            My Cart
                        </li>
                    </Link>
                    <Link to="/admin/admin-panel">
                        <li onClick={openMenu}>
                            <button className='icon-btn'>
                                <Icon icon={cog} size={26}></Icon>
                            </button> 
                            Admin. Panel
                        </li>
                    </Link>
                </ul>

                <button onClick={logout} className='logout-btn'><Icon icon={exit} size={28}></Icon> Log Out</button>
            </nav>
        </div>
    )
}

export default Nav;