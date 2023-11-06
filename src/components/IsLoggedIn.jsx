import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function IsLoggedIn({ children }) {
  const { user } = useAuth();
  

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
}

IsLoggedIn.propTypes = {
  children: PropTypes.node,
};
