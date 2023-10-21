export const setUserData = (data) => {
    localStorage.setItem('users', JSON.stringify(data))
}

export const getToken = () => {
    const user = JSON.parse(localStorage.getItem('users'))
    return user.token;
}

export const getUser = () => {
    const user = JSON.parse(localStorage.getItem('users'))
    return user.user
}