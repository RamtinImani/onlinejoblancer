import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[15rem_1fr] grid-rows-[auto_1fr]">
      <div className="py-4 px-8 bg-secondary-0 border-b border-secondary-200">header</div>

      <div className="row-start-1 row-span-2 bg-secondary-0 border-l border-secondary-200 p-4">
        sidebar
      </div>

      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-5xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
