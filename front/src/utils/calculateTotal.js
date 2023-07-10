export const calculateTotal = (coursesList) => {
    let amount = 0.0
    coursesList.map(item => {
        amount = amount + item.price
    })
    
    sessionStorage.setItem("total_amount", amount)
    return (amount)
}