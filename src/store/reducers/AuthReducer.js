
import { LOGIN,LOGOUT } from "../actions/authActions";
const userData=localStorage.getItem("user")

const initialState={
    isAuthenticated:!! userData,
    user:userData ? JSON.parse(userData) :null
}

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload,
            }
        case LOGOUT:
            return{
                ...state,
                isAuthenticated:false,
                user:null
            };
        default:
            return state        
    }
}
export default authReducer