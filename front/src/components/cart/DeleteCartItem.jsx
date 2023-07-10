import React from 'react'
import Icon from 'react-icons-kit'
import {trash} from 'react-icons-kit/entypo/trash'
import "./Cart.css"
import { deleteCartItem } from '../../service/CartService'

export default function DeleteCartItem (course) {
    function handleDeleteItem(){
        deleteCartItem(course)
    }
    return (
        <button onClick={handleDeleteItem}>
            <Icon className='delete-cart-btn' icon={trash} size={22}></Icon>
        </button>
    )
}
