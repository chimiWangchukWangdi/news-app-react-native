import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import axios from "axios";

export const NEWS_KEY = 'news';

const initialState = {
    newsArray: [],
    loading: false,
    errorArray: {},
}

// export const themeState = createAction( 'themeState', arg => ({ payload: arg })  )
export const fetchAsyncNews = createAsyncThunk( "news/fetchAsyncNews",
    async (category: string, thunk) => {
        const apiKey = 'bc98fdf3730449fabbc284e23d4b431a';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        try {
            const res = await axios.get(apiUrl);
            return res.data.articles;
        } catch (error) {
            return thunk.rejectWithValue(error);

        }
    });

export const newsSlice = createSlice({
    name: NEWS_KEY,
    initialState,
    reducers:  {},
    extraReducers: builder => {
        builder
            .addCase(fetchAsyncNews.pending, ( state, action ) => {
                state.loading = true;
            })
            .addCase(fetchAsyncNews.fulfilled, ( state, action ) => {
                state.newsArray = action.payload;
                state.loading = false;

            })
            .addCase(fetchAsyncNews.rejected, ( state, action ) => {
                state.errorArray = action.payload;
                state.loading = false;
            })
    }
});

export const selectNewsState = (state: RootState) => state[NEWS_KEY];
export const getAllNews = createSelector(
    selectNewsState,
    (state) => state.newsArray
);
export const selecErrorState = (state: RootState) => state[NEWS_KEY];
export const getError = createSelector(
    selecErrorState,
    (state) => state.errorArray
);

export const selectLoadingState = (state: RootState) => state[NEWS_KEY];
export const getLoadingState = createSelector(
    selectLoadingState,
    (state) => state.loading
);

export const NewsReducer = newsSlice.reducer;
