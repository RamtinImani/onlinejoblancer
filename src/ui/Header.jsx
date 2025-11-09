import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { isLoadingUser } = useUser();

  return (
    <header className="py-4 px-8 bg-secondary-0 border-b border-secondary-200">
      <div
        className={`container xl:max-w-5xl flex items-center justify-between gap-x-8
        ${isLoadingUser ? "blur-sm" : ""}
        `}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
