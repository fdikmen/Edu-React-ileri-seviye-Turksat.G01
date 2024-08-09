import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts, getPostById, addPost } from "./postApi";

// Get All Posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await getPosts();
  return response.data;
});

// Get Post By Id
export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (id) => {
    const response = await getPostById(id);
    return response.data;
  }
);

// Add New Post
export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    const response = await addPost(initialPost);
    return response.data;
  }
);

// Update Post
export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  const response = await updatePost(post);
  return response.data;
});

// Delete Post
export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  await deletePost(id);
  return id;
});

const initialState = {
  items: [
    {
      userId: 1231,
      id: 1231,
      title: "Test Data",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ],
  item: {},
  status: "idle",
  error: null,
};
const postSlice = createSlice({
  name: "posts",
  initialState, //initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; //return response.data;
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
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const { id, title, body } = action.payload;
        const existingPost = state.items.find((post) => post.id === id);
        if (existingPost) {
          existingPost.title = title;
          existingPost.body = body;
        }
      });
  },
});

export default postSlice.reducer;
