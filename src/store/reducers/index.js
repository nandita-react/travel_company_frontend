import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import wishlistReducer from "./WishllistReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    wishlist: wishlistReducer
})
export default rootReducer