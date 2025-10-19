import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Loader from "../../ui/Loader";
import useLogout from "./useLogout";

function Logout() {
  const { isLoggingOut, logoutUserAccount } = useLogout();

  return isLoggingOut ? (
    <Loader />
  ) : (
    <button onClick={logoutUserAccount}>
      <HiArrowRightOnRectangle className="size-5 text-secondary-700 hover:text-error transition-all" />
    </button>
  );
}

export default Logout;
