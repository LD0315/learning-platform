import jwt from 'jsonwebtoken';

const JWT_TOKEN_NAME = 'jwt-token';

export const getToken = () => localStorage.getItem(JWT_TOKEN_NAME);

export const setToken = token => localStorage.setItem(JWT_TOKEN_NAME, token);

export const removeToken = () => localStorage.removeItem(JWT_TOKEN_NAME);

export const isLoggedIn = () => {
    const token = localStorage.getItem(JWT_TOKEN_NAME);

    if(!token) return false;

    const decodedToken = jwt.decode(token);
    const expirationTime = decodedToken.exp * 1000;
    const isExpired = Date.now() - expirationTime > 0; //如果现在的时间大于expire date，说明已过期

    return !isExpired;

    //return !!localStorage.getItem(JWT_TOKEN_NAME); //取回来有东西就是true
};