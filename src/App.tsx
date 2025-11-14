import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BlogList } from "./features/blog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/blogs" replace />} />
          <Route path="/blogs" element={<BlogList />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
