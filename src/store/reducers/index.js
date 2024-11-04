import { combineReducers } from "redux";
import authReducer from "./authReducer";
import wishlistReducer from "./WishllistReducer";
import toastReducers from "./ToastReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    wishlist: wishlistReducer,
    toast:toastReducers
})
export default rootReducer