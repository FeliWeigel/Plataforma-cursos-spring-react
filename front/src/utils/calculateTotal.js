export const calculateTotal = (coursesList) => {
    let amount = 0.0
    if(coursesList != null){
        coursesList.map(item => {
            amount = amount + item.price
        })
    }
    
    sessionStorage.setItem("total_amount", amount)
    return (amount)
}