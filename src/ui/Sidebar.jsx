function Sidebar({ children }) {
  return (
    <div className="row-start-1 row-span-2 bg-secondary-0 border-l border-secondary-200 p-4">
      <ul className="flex flex-col gap-y-4">{children}</ul>
    </div>
  );
}

export default Sidebar;
