import useUser from "../features/authentication/useUser";

function Header() {
  const { data } = useUser();
  console.log(data);

  return <div className="py-4 px-8 bg-secondary-0 border-b border-secondary-200">header</div>;
}

export default Header;
