import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import Legal from "./pages/Legal";
import AITransparency from "./pages/AITransparency";
import LearnBuildGrow from "./pages/LearnBuildGrow";
import AIStrategyThinkClearly from "./pages/AIStrategyThinkClearly";
import AITrainingLeadershipSkill from "./pages/AITrainingLeadershipSkill";
import AIImplementationMakeWorkLighter from "./pages/AIImplementationMakeWorkLighter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/ai-transparency-notice" element={<AITransparency />} />
          <Route path="/learn-build-grow-with-ai" element={<LearnBuildGrow />} />
          <Route path="/ai-strategy-think-clearly" element={<AIStrategyThinkClearly />} />
          <Route path="/ai-training-leadership-skill" element={<AITrainingLeadershipSkill />} />
          <Route path="/ai-implementation-make-work-lighter" element={<AIImplementationMakeWorkLighter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
