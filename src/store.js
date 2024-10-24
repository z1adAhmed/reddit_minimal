import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/postSlice";
import commentsReducer from "./features/commentsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
});
