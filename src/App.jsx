import { Navigate, Route, Routes } from "react-router";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./ui/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import DarkModeProvider from "./contexts/DarkModeProvider";
import OwnerLayout from "./features/owner/OwnerLayout";

//! Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />

            <Route path="/owner" element={<OwnerLayout />}>
              <Route index element={<Navigate to="dashboard" replace={true} />} />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<Project />} />
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* React hot toast */}
          <Toaster />
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
