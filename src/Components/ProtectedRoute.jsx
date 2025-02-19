import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("logInData");
    if (!login) {
      navigate("/logIn", { replace: true });
    }
  }, [navigate]);
  
  return <Element />;
};

export default ProtectedRoute;
