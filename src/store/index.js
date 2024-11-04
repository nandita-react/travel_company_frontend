import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'
import rootReducer from "./reducers";
import { loadwishlistFromLocalStorage,saveWishlistToLocalStorage } from "../utils/localStorage";

const persistedWishlist = loadwishlistFromLocalStorage()
const store = createStore(
    rootReducer,
    { wishlist: { wishlistItems: persistedWishlist || [] } },
    applyMiddleware(thunk)
)

export default store
