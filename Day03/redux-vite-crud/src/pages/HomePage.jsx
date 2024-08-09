// import AddPostForm from "../features/posts/AddPostForm";
import PostDetail from "../features/posts/PostDetail";
import PostsList from "../features/posts/PostsList";
import AddPostForm from "../features/posts/AddPostForm";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import EditPostForm from "../features/posts/EditPostForm";
import Login from "../features/auth/Login";
import { useSelector } from "react-redux";
import ProtectedRoute from "../features/auth/ProtectedRoute";

export default function HomePage() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    /*<div>
      <AddPostForm />
      <PostsList />
    </div>*/
    <>
      {isAuthenticated ? <h1>Welcome to HomePage</h1> : <h1>Please Login</h1>}
      <hr />
      <BrowserRouter>
        {/* //Links */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <a href="/about">About With a</a>
          </li>
          <li>
            <Link to="/about">About With Link</Link>
          </li>
          <li>
            <Link to="/posts/3">Get Post03 Detail</Link> |{" "}
            <Link to="/posts/5">Get Post05 Detail</Link>|{" "}
            <Link to="/posts/9">Get Post09 Detail</Link>
          </li>
          <li>
            <Link to="/posts/add">Add New Post</Link>
          </li>
          <li>
            <Link to="/posts/edit/3">Edit Post03</Link> |{" "}
            <Link to="/posts/edit/5">Edit Post05</Link>|{" "}
            <Link to="/posts/edit/9">Edit Post09</Link>
          </li>
          <li>
            <Link to="/protected/secret">Protected Secret Page</Link>
          </li>
        </ul>

        {/* //Routes */}
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="*" element={<h1>404 Not Found!</h1>} />
          {/* <Route path="/posts/:postId" element={<PostDetail/>} /> */}
          <Route path="posts">
            <Route path=":postId" element={<PostDetail />} /> {/* post/:postId */}
            <Route path="add" element={<AddPostForm />} />
            <Route path="edit/:postId" element={<EditPostForm />} />
          </Route>
          <Route path="protected" element={<ProtectedRoute/>}>
            <Route path="secret" element={<h1>Protected Secret Page</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
