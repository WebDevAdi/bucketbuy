import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productSlice from '../features/productSlice'
import categorySlice from '../features/categorySlice'
import { productApi, userApi } from '../features/api/apiSlice'

// const rootReducer = combineReducers({

// })

const store = configureStore({
    reducer: {
        product: productSlice,
        category: categorySlice,
        [productApi.reducerPath]:productApi.reducer,
        [userApi.reducerPath]:userApi.reducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        productApi.middleware,
        userApi.middleware
    ]
})

export default store