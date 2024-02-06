import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = '/api/v1'

// product api's

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${url}/products`
    }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProductById: builder.query({
            query: (productId) => ({
                url: `/getProductById/${productId}`
            }),
            invalidatesTags:['Product'],
            transformResponse:(response)=> response.data
        }),
        getProducts: builder.query({
            query: (categories) => ({
                url: `/getProducts/${categories.category}/${categories.subcategory}`
            }),
            providesTags:['getProductByCategory'],
            invalidatesTags:['getProductByCategory'],
            transformResponse:(response)=> response.data
        }),
    })
})

// user api's

export const userApi = createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({
        baseUrl:`${url}/user`
    }),
    tagTypes:['User',"CurrentUser"],
    endpoints:(builder)=>({
        getCurrentUser:builder.query({
            query:()=>'/getCurrentUser',
            transformResponse:(response,meta,args)=> response.data,
            providesTags:["CurrentUser"]
        }),
        loginUser:builder.mutation({
            query:(loginCredentials)=>({
                url:'/login',
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:loginCredentials
            }),
            invalidatesTags:['CurrentUser']
        }),
        logoutUser:builder.mutation({
            query:()=>({
                url:'/logout',
                method:"POST"
            }),
        })
    })
})

export const cartApi = createApi({
    reducerPath:"cartApi",
    baseQuery:fetchBaseQuery({
        baseUrl:`${url}/cart`
    }),
    endpoints:(builder)=>({
        getUserCart:builder.query({
            query:()=>({
                url:'/getUserCart'
            }),
            transformResponse:(response) => response.data,
            providesTags:['userCart']
        }),
        addToCart:builder.mutation({
            query:(data)=>({
                url:'/addToCart',
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:data
            }),
            // transformResponse:(response) => response.data,
            invalidatesTags:['userCart']
        }),
        removeItemFromCart:builder.mutation({
            query:(productId)=>({
                url:'/removeItemFromCart',
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:productId
            }),
            invalidatesTags:['userCart']
        }),
        updateQuantity:builder.mutation({
            query:(product)=>({
                url:'/updateQuantity',
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:product
            }),
            invalidatesTags:['userCart']
        })
    })
})

export const orderApi = createApi({
    reducerPath:'orderApi',
    baseQuery:fetchBaseQuery({
        baseUrl:`${url}/order`
    }),
    endpoints:(builder)=>({
        trackOrders:builder.query({
            query:() => ({
                url:'/getUserAllOrders'
            }),
            transformResponse: (response) => response.data,
            providesTags:['trackOrders']
        }),
        orderProduct:builder.mutation({
            query:(data)=>({
                url:'/newOrder',
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:data
            }),
            invalidatesTags:['trackOrders']
        }),
        
    })
})

export const {useGetCurrentUserQuery, useLoginUserMutation, useLogoutUserMutation} = userApi
export const {useGetProductByIdQuery, useGetProductsQuery} = productApi
export const {useTrackOrdersQuery, useOrderProductMutation} = orderApi
export const {useAddToCartMutation, useGetUserCartQuery, useRemoveItemFromCartMutation, useUpdateQuantityMutation} = cartApi

export const resetUserApiState = () => userApi.util.resetApiState();
export const resetProductApiState = () => productApi.util.resetApiState()