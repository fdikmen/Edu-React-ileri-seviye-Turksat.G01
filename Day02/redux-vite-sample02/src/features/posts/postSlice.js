import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Get All Posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

// Get Post By Id
export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (id) => {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  }
);

// Add New Post
export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    const response = await axios.post(apiUrl, initialPost);
    return response.data;
  }
);

// Update Post
export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  const url = `${apiUrl}/${post.id}`;
  const response = await axios.put(url, post);
  return response.data;
});

// Delete Post
export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  const url = `${apiUrl}/${id}`;
  await axios.delete(url);
  return id;
});
const initialItem = [
  {
    userId: 1231,
    id: 1231,
    title: "Test Data",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState: {
    items: initialItem,
    item: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPostById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
      });
  },
});
/*
extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPostById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
      })
      .addCase(fetchPostById.rejected, (
      */

export default postSlice.reducer;
