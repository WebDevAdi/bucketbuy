import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categorySlice from '../features/categorySlice'
import { cartApi, orderApi, productApi, userApi } from '../features/api/apiSlice'

// const rootReducer = combineReducers({

// })

const store = configureStore({
    reducer: {
        category: categorySlice,
        [productApi.reducerPath]: productApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,

    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        productApi.middleware,
        userApi.middleware,
        cartApi.middleware,
        orderApi.middleware
    ]

})

export default store