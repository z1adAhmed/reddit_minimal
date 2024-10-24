import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch posts from Reddit API
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (after) => {
    const response = await axios.get(
      `https://www.reddit.com/r/all/top.json?limit=25&after=${after}`
    );
    return response.data; // Return the data directly
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
    after: null, // For pagination
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Append new posts to the existing posts
        state.posts.push(
          ...action.payload.data.children.map((child) => child.data)
        );
        state.after = action.payload.data.after; // Update after value for pagination
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message; // Capture the error message
        console.error("Error fetching posts:", action.error.message); // Log error to console
      });
  },
});

export default postsSlice.reducer;
