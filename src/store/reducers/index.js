import { combineReducers } from "redux";
import authReducers from "./AuthReducer";
import wishlistReducer from "./WishllistReducer";
import toastReducers from "./ToastReducer";

const rootReducer = combineReducers({
    auth: authReducers,
    wishlist: wishlistReducer,
    toast:toastReducers
})
export default rootReducer