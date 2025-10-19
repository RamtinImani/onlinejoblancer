import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";

function HeaderMenu() {
  return (
    <ul className="flex items-center gap-x-4 **:inline-flex">
      <li>
        <Link to="dashboard">
          <HiOutlineUser className="size-5 text-primary-900" />
        </Link>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
