import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categorySlice from '../features/categorySlice'
import { cartApi, productApi, userApi } from '../features/api/apiSlice'

// const rootReducer = combineReducers({

// })

const store = configureStore({
    reducer: {
        category: categorySlice,
        [productApi.reducerPath]:productApi.reducer,
        [userApi.reducerPath]:userApi.reducer,
        [cartApi.reducerPath]:cartApi.reducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        productApi.middleware,
        userApi.middleware,
        cartApi.middleware
    ]
})

export default store