import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate("/");
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <h1>Login Page</h1>
      <h2>{isAuthenticated ? "Logged In" : "Logged Out"}</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
