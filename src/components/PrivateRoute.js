import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const auth = useAuth();

  return auth ? children : <Navigate to="/login" />;
}
