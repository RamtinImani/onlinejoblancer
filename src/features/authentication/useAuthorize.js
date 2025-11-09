import { useLocation } from "react-router";
import useUser from "./useUser";

export default function useAuthorize() {
  const { user, isLoadingUser } = useUser();
  const { pathname } = useLocation();

  //! Authentication
  let isAuthenticated = false;
  if (user) {
    isAuthenticated = true;
  }

  //! Verification
  let isVerified = false;
  if (user && Number(user.status) === 2) {
    isVerified = true;
  }

  //! Authorization
  let isAuthorized = false;
  const ROLES = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };
  //! path roles: admin, owner, freelancer
  const desiredRole = pathname.split("/").at(1);

  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) {
      isAuthorized = true;
    }
  }

  return { user, isLoadingUser, isAuthenticated, isVerified, isAuthorized };
}
