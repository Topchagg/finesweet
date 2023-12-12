import {configureStore} from '@reduxjs/toolkit';
import {fineSweetApi} from './fineSweetApi';


export const store = configureStore({
    reducer: {
        [fineSweetApi.reducerPath]: fineSweetApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fineSweetApi.middleware)
});