import axios from "axios";
import { showToast } from './toastActions'
const apiUrl = import.meta.env.VITE_API_URL

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (credentials) => async (dispatch) => {
    try {
        // console.log(credentials);

        const response = await axios.post(`${apiUrl}login`, credentials);
        if (response.data.success) {
            // console.log(response.data);

            localStorage.setItem("user", JSON.stringify(response.data.user));
            dispatch({ type: LOGIN, payload: response.data.user });
            dispatch(showToast('Login successfull!', 'success'))
        }
    }
    catch (error) {
        console.log('Login error', error.message)
    }
}

export const logout = ()=>(dispatch) => {
    localStorage.clear();
    dispatch({ type: LOGOUT })
}