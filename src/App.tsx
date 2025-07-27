import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogListings from "./pages/BlogListings";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminSettings from "./pages/AdminSettings";
import Navbar from "./components/Navbar"; // Ensure Navbar is imported
import PortfolioPage from "./pages/PortfolioPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar /> {/* Make sure Navbar is included */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/blogs-by-location" element={<BlogListings />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
