import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[15rem_1fr] grid-rows-[auto_1fr]">
      {/* Header */}
      <Header />
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-5xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
