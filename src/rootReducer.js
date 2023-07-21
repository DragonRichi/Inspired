import { combineReducers } from "@reduxjs/toolkit";
import navigation from "./features/navigationSlice"
import colors from "./features/colorsSlice"
import goods from "./features/goodsSlice"
import product from "./features/productSlice"
import favorites from "./features/favoritesSlice"
import cart from "./features/cartSlice"
import search from "./features/searchSlice"
import statusServer from "./features/statusServerSlice"


export const rootReducer = combineReducers({
    navigation,
    colors,
    goods,
    product,
    favorites,
    cart,
    search,
    statusServer
})

