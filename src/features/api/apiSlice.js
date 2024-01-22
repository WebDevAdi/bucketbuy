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
            providesTags:['getProductById'],
            invalidatesTags:['getProductById'],
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

export const {useGetCurrentUserQuery, useLoginUserMutation, useLogoutUserMutation} = userApi
export const {useGetProductByIdQuery, useGetProductsQuery} = productApi

export const resetUserApiState = () => userApi.util.resetApiState();
export const resetProductApiState = () => productApi.util.resetApiState()