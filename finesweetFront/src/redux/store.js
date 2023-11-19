import {configureStore} from '@reduxjs/toolkit';
import {fineSweetApi} from './fineSweetApi';

import questionReducer from './questionSlice';

export const store = configureStore({
    reducer: {
        [fineSweetApi.reducerPath]: fineSweetApi.reducer,
        questionActions: questionReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fineSweetApi.middleware)
});