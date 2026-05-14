import { useAuth } from "../store/authStore";
import { Navigate } from "react-router";

function ProtectedRoute({
  children,
  allowedRoles,
}) {

  const {
    loading,
    currentUser,
    isAuthenticated,
  } = useAuth();

  // loading
  if (loading) {
    return (
      <p className="text-center mt-10">
        Loading...
      </p>
    );
  }

  // not logged in
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // role check
  if (
    allowedRoles &&
    !allowedRoles
      .map((role) =>
        role.toLowerCase()
      )
      .includes(
        currentUser?.role?.toLowerCase()
      )
  ) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;