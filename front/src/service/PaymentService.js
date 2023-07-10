export const visaDiscount = () => {
    let amount = sessionStorage.getItem("total_amount")
    return amount - (amount * 0.15)
}

export const mastercardDiscount = () => {
    let amount = sessionStorage.getItem("total_amount")
    return amount - (amount * 0.10)
}

export const paypalDiscount = () => {
    let amount = sessionStorage.getItem("total_amount")
    return amount - (amount * 0.20)
}