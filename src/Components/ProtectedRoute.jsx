import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const ProtectedRoute = ({ Element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("logInData");
    if (!login) {
      navigate("/logIn", { replace: true });
    }
  }, [navigate]);
  
  return (
    <>
      <Header />
      <Element />
    </>
)
};

export default ProtectedRoute;
