import { NavLink } from "react-router";

function CustomNavLink({ children, to }) {
  const navLinkClasses =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg  transition-all";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navLinkClasses} bg-primary-100/50 text-primary-900`
            : `${navLinkClasses} text-secondary-700`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink;
