import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { updatePost,fetchPostById } from "./postSlice";
import "./EditPostForm.css";

export default function EditPostForm() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = useState(
    useSelector((state) =>
      state.posts.items.find((item) => item.id === Number(postId))
    )
  );
  const [apiId, setApiId] = useState(post ? post.id : "");
  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");

  useEffect(() => {
    dispatch(fetchPostById(postId)).then((response) => {
        setPost(response.payload);
        setApiId(response.payload.id);
        setTitle(response.payload.title);
        setBody(response.payload.body);
      });
    
  }, [postId]);



  //   useEffect(() => {
  //     setApiId(post.id);
  //     setTitle(post.title);
  //     setBody(post.body);
  //   }, [post,apiId]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      dispatch(updatePost({ id: apiId, title: title, body: body }));
      navigate("/");
    }
  };

  if (!post) {
    return <h1>Post Not Found!</h1>;
  }

  return (
    <section>
      <h2>
        Edit Post Page - PostId: {postId} - {apiId}{" "}
      </h2>
      <form onSubmit={onSubmit} >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Update Post</button>
      </form>
    </section>
  );
}
