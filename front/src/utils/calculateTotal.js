export const calculateTotal = (coursesList) => {
    let amount = 0.0
    coursesList.map(item => {
        amount = amount + item.price
    })
    return (amount)
}