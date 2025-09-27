import { Route, Routes } from "react-router";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./ui/NotFound";
import Owner from "./pages/Owner";
import AppLayout from "./ui/AppLayout";

//! Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />

          <Route element={<AppLayout />}>
            <Route path="/owner" element={<Owner />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* React hot toast */}
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
