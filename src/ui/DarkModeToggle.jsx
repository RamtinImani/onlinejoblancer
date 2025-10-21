import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../contexts/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="size-5 text-primary-900" />
      ) : (
        <HiOutlineMoon className="size-5 text-primary-900" />
      )}
    </button>
  );
}

export default DarkModeToggle;
