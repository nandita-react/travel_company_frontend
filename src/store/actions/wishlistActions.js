import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL
import { getTokenFromLocalStorage } from "../../utils/localStorage";

var token = getTokenFromLocalStorage();

export const FETCH_WISHLIST = 'FETCH_WISHLIST_REQUEST'
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST_REQUEST'

export const fetchWishlist = () => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}/wishlist`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        dispatch({
            type: FETCH_WISHLIST,
            payload: response.data
        })
    } catch (error) {
        console.log('fetch wishlist error :' + error.message)
    }
}

export const addToWishlist = (itemId) => async (dispatch) => {
    try {
        const resonse = await axios.post(`${apiUrl}/wishlist`, {
            tourId: itemId
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        dispatch({
            type: ADD_TO_WISHLIST,
            payload: itemId
        })
    } catch (error) {
        console.log('add wishlist error:' + error.message)
    }
}

export const removeWishlist = (itemId) => async (dispatch) => {
    try {
        await axios.post(`${apiUrl}/wishlist/remove`, {
            tourId: itemId
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        dispatch({
            type: REMOVE_FROM_WISHLIST,
            payload: itemId
        })
    }
    catch (error) {
        console.log('remove wishlist error' + error.message)
    }
}