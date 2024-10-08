import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice";

export default function PostsList() {
  const posts = useSelector((state) => state.posts);
  console.log("State=>", posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      PostsList
      <ul>
        {posts.items.map((post) => (
          <li key={post.id}>
            <p>
              <strong>{post.title}</strong>
              <br />
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
