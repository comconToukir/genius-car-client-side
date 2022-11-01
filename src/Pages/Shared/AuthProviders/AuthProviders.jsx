import { useContext } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";

const AuthProviders = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex gap-4 justify-center mt-3">
      <FaGoogle
        onClick={handleGoogleSignIn}
        className="h-9 w-9 p-2 rounded-full text-white bg-orange-600 hover:bg-orange-700  cursor-pointer shadow-lg"
      />
      <FaFacebook className="h-9 w-9 p-2 rounded-full text-white bg-orange-600 hover:bg-orange-700  cursor-pointer shadow-lg" />
    </div>
  );
};

export default AuthProviders;
