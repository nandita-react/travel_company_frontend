

export  const  loadwishlistFromLocalStorage=()=>{
    try{
        const serializedState=localStorage.getItem('wishlist')
        if(serializedState ===null){
            return undefined
        }
        return JSON.parse(serializedState)
    } catch(e){
        console.log('could not load wishlist from localStorage',e)
        return undefined
    }
}

export const saveWishlistToLocalStorage=(wishlistItems)=>{
    try{
        const serializedState=JSON.stringify(wishlistItems);
        localStorage.setItem('wishlist',serializedState)
    }catch(e){
        console.log('Could not save  wishlist to localStoage',e)
    }
}

export const getTokenFromLocalStorage=()=>{
    const user=localStorage.getItem('user');
    return user ?JSON.parse(user).token :undefined
}