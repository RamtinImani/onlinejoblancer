import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import Loader from "./Loader";

function ProtectedRoute({ children }) {
  const { isLoadingUser, isAuthenticated, isVerified, isAuthorized } = useAuthorize();
  const navigate = useNavigate();

  //! check if authenticated and authorized or not
  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser) navigate("/auth");
    if (!isVerified && !isLoadingUser) {
      toast.error("پروفایل شما هنوز تایید نشده است");
      navigate("/");
    }
    if (!isAuthorized && !isLoadingUser) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoadingUser, isVerified, navigate]);

  if (isLoadingUser)
    return (
      <div className="flex items-center justify-center h-dvh bg-secondary-100">
        <Loader />
      </div>
    );

  if ((isAuthenticated, isAuthorized)) return children;
}

export default ProtectedRoute;
