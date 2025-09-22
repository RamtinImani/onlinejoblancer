import { Route, Routes } from "react-router";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//! Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="container xl:max-w-7xl">
          <Routes>
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>

        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
