const initialState=[]

const wishlistReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD":
        return
        case "REMOVE":
        return
        default:
            const wishlistdata=JSON.parse(localStorage.getItem('wishlist')) ||[]
            if(wishlistdata.length>0){
              return [...wishlistdata]
            }
            return state
            
    }

}
export default wishlistReducer