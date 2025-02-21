import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ProtectedRoute = ({ Element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("logInData");
    if (!login) {
      navigate("/logIn");
    }
  }, [navigate]);
  
  return (
    <>
      <Header />
      <Element />
      <Footer />
    </>
)
};

export default ProtectedRoute;
