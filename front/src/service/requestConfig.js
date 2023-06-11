
let token = localStorage.getItem("access_token")

export const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}