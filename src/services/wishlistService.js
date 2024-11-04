
const apiUrl = import.meta.env.VITE_API_URL

export async function getWishlistItems() {
    try {
        const loggedUser = JSON.parse(localStorage.getItem("traveluser"))
        if (!loggedUser){
            return []
        }
        const { token } = loggedUser

        const headers = {
            'Authorization': `Bearer ${token}`
        }

        const response = await axios.get(`${apiUrl}wishlist`, { headers })

        if (response.status === 200) {
            // localStorage.setItem('wishlist', JSON.stringify(response.data.items))
            return response.data.items
        }
    }

    catch (error) {
        console.log('getWishlistItems error: ', error.message)
    }
}

export async function addWishlistItems() {
    try {
        const loggedUser = JSON.parse(localStorage.getItem("traveluser"))
        // if (!loggedUser) {
        //     setTimeout(() => setErrorMessage('Please login first'), 0);
        //     return;
        // }
        
        const { token } = loggedUser
        const headers = {
            'Authorization': `Bearer ${token}`
        }
        const response = await axios.post(`${apiUrl}wishlist`, {
            tourId: details._id
        }, { headers })
        if (response.status === 200) {
            // setTimeout(() => setSuccessMessage(response.data.message), 0);
            // setSuccessMessage(response.data.message)
            // setAddToItem(true)
            return await getWishlistItems()
        }
    } catch (error) {
        // setTimeout(() => setErrorMessage(error.message), 0);
        // setErrorMessage(error.message)
        console.log('addWishlistItems error: ', error.message)

    } finally {
        // setSuccessMessage("")
        // setErrorMessage("")
    }
}
