import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const fineSweetApi = createApi({
    reducerPath: 'fineSweetApi',
    baseQuery:  fetchBaseQuery({baseUrl: 'http://127.0.0.1:8000/'}),
    endpoints: (build) => ({
        getQuestions: build.query({
            query: () => 'frequently-get-all',
        }),
        addQuestion: build.mutation({
            query: (data) => ({
                url: 'frequently-create',
                method: 'POST',
                body: data,
            })
        }),
        deleteQuestion: build.mutation({
           query: (id) => ({
            url: `frequently-destroy/${id}`,
            method: 'DELETE',
           })
        }),
        updateQuestion: build.mutation({
            query: ({ id, data }) => ({
              url: `frequently-update/${id}`,
              method: 'PUT',
              body: data,
            }),
        }),
        createContactRequest: build.mutation({
            query: (data) => ({
                url: 'contact-request-create',
                method: "POST",
                body: data,
            })
        }),
        createServBrand: build.mutation({
            query: (data) => ({
                url: 'create-brand',
                method: "POST",
                body: data,
            })
        }),
        getAllServBrand: build.query({
            query: () => "get-all-brands"
        }),
        createEmployeeBlock: build.mutation({
            query: (data) => ({
                url: "employee-create",
                method: "POST",
                body: data
            })
        }),
        deleteServBrand: build.mutation({
            query: (id) => ({
                url: `brand-destroy/${id}`,
                method: 'DELETE'
            })
        }),
        getAllEmployeeBlock: build.query({
            query: () => "employee-get-all"
        }),
        deleteEmployeeBlock: build.mutation({
            query: (id) => ({
                url: `employee-destroy/${id}`,
                method: 'DELETE'
            })
        }),
    }) 
})

export const { useDeleteServBrandMutation,useGetAllServBrandQuery,useDeleteEmployeeBlockMutation , useGetAllEmployeeBlockQuery , useCreateEmployeeBlockMutation ,useGetQuestionsQuery, useAddQuestionMutation, useDeleteQuestionMutation, useUpdateQuestionMutation, useCreateContactRequestMutation, useCreateServBrandMutation} = fineSweetApi