 const initialState={
    isLoggedIn:false,
    user:{}  
}

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {isLoggedIn:true,user:action.payload}
        case 'LOGOUT':
            localStorage.removeItem("traveluser")
            return{isLoggedIn:false,user:{}}
        default:
            const authUser=JSON.parse(localStorage.getItem("traveluser"))
            if(authUser){
                return{isLoggedIn:true,user:{
                    name:authUser.name
                }}    
            }
            return{...state}
    }


}
export default authReducer