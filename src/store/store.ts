import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { NEWS_KEY, NewsReducer } from "../features/app-reducer/news-slice/news-slice";
import { useDispatch } from "react-redux";
import { getDefaultMiddleware } from '@reduxjs/toolkit';


const reducer = combineReducers({
    [NEWS_KEY]: NewsReducer,
})
export const store = configureStore({
    reducer,
   /* middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),*/
})

export type RootState = typeof store.dispatch
export const AppDispatch = () => useDispatch<RootState>()

/*
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch*/
