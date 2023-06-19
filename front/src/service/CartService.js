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