import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

const AdminRoute = ({ children }) => {
  const userData = localStorage.getItem("userData");
  const userdata = JSON.parse(userData);
  const isAdmin = userdata?.data?.role === "admin" || false;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};

// export default ProtectedRoute;
export { ProtectedRoute, AdminRoute };
