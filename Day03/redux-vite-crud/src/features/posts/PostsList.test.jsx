import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PostReducer from "./postSlice";
import PostsList from "./PostsList";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

describe("Post List Component Test", () => {
  it("renders posts from Redux store", () => {
    // MOCK STORE
    const initialState = {
      posts: {
        items: [
          {
            id: 1,
            title: "Post 1",
          },
          {
            id: 2,
            title: "Post 2",
          },
        ],
      },
    };
    const myStore = configureStore({
      reducer: {
        posts: PostReducer,
      },
      preloadedState: initialState,  // Corrected key name
    });

    // RENDER TEST
    render(
      <Provider store={myStore}>
        <PostsList />
      </Provider>
    );

    expect(screen.getByText(/Post 1/)).toBeInTheDocument();
    expect(screen.getByText(/Post 2/)).toBeInTheDocument();
  });
});
