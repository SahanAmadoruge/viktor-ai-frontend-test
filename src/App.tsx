import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogList } from "./features/blog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:id" element={<h1>Blog page</h1>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
