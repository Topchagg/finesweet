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
        // createContactRequest: build.mutation({
        //     query: (body) => ({
        //         url: 'frequently-create'
        //     })
        // })
    })  
})

export const {useGetQuestionsQuery, useAddQuestionMutation, useDeleteQuestionMutation, useUpdateQuestionMutation} = fineSweetApi