import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice";
import PostItem from "./PostItem";

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
     <PostItem posts={posts.items} />
    </div>
  );
}
