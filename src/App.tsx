
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import CreatePage from "./pages/CreatePage";
import CapsuleDetailPage from "./pages/CapsuleDetailPage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { ThemeProvider } from "@/hooks/useTheme";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add Google Fonts for birthday theme
    const links = [
      'https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
      'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap'
    ];
    
    links.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CapsuleDetailPage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/capsule/:id" element={<CapsuleDetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
