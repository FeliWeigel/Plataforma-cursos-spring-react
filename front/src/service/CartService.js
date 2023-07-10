import { calculateTotal } from "../utils/calculateTotal";

let count = 0;
let cartList = new Array();
export const addCourseToCart = (course) => {
    let cartCount = document.getElementById('cart-count')
    sessionStorage.setItem('cartCount', count)
    sessionStorage.setItem('cartList', JSON.stringify(cartList))

    if(!cartList.includes(course)){
        if(count == 0){
            count++
            sessionStorage.setItem('cartCount', count)
            cartList.push(course)
            sessionStorage.setItem('cartList', JSON.stringify(cartList))
            cartCount.textContent = sessionStorage.getItem('cartCount')
        }else {
            if(count < 4){
                count++
                sessionStorage.setItem('cartCount', count)
                cartList.push(course)
                sessionStorage.setItem('cartList', JSON.stringify(cartList))
                cartCount.textContent = sessionStorage.getItem('cartCount')
            }
        }
    }

}

export const shopCartList = () => {
    if(sessionStorage.getItem('cartList') != null){
        return JSON.parse(sessionStorage.getItem('cartList'));
    }
}

export const deleteCartItem = ({course}) => {
    let cartList = new Array()
    let filteredCartList

    if(sessionStorage.getItem('cartList') != null){
        cartList = JSON.parse(sessionStorage.getItem('cartList'));
        filteredCartList = cartList.filter((item) => item.id != course.id)
        if(filteredCartList.length < cartList.length){
            count = filteredCartList.length
            sessionStorage.setItem('cartCount', count)
            
            sessionStorage.setItem('cartList', JSON.stringify(filteredCartList))
            location.reload()
        }
    }

   
}