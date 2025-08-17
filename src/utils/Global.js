import Cookies from 'js-cookie';

export const API_URL = 'http://localhost:3000/api';
export const getToken = () => Cookies.get("token");
export const getUserId = () => Cookies.get("userId");
export const getUserRole = () => Cookies.get("userRole");