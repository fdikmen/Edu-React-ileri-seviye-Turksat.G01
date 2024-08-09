import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPostById } from "./postSlice";
import { useDispatch } from "react-redux";

export default function PostDetail() {
  const { postId } = useParams();

  const [post, setPost] = useState(
    useSelector((state) =>
      state.posts.items.find((item) => item.id === Number(postId))
    )
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!post) {
    dispatch(fetchPostById(postId)).then((response) => {
        setPost(response.payload);
      });
    }
  }, [postId]);
  console.log("Post=>", post);

  if(!post){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>PostDetail</h1>
      {post && (
        <>
          <strong>Post Id: {postId}</strong>
          <br />
          <strong>Post Title: {post.title}</strong>
          <br />
          <strong>Post Body: {post.body}</strong>
        </>
      )}
    </div>
  );
}
