import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import chevronLogo from "@/assets/chevron-logo.png";

const AIStrategyThinkClearly = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={chevronLogo} alt="McCarthy Solutions" className="w-8 h-8" />
              <div className="text-2xl font-bold text-foreground">McCarthy Solutions</div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link to="/#services" className="text-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/#process" className="text-foreground hover:text-accent transition-colors">
                Process
              </Link>
              <Link to="/#results" className="text-foreground hover:text-accent transition-colors">
                Results
              </Link>
              <Link to="/#testimonials" className="text-foreground hover:text-accent transition-colors">
                Testimonials
              </Link>
              <Link to="/learn-build-grow-with-ai" className="text-accent font-semibold transition-colors">
                Learn
              </Link>
              <Link to="/case-studies" className="text-foreground hover:text-accent transition-colors">
                Case Studies
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                onClick={() => window.open("https://calendar.app.google/PaVwZ8ZxYX5SVBJT8", "_blank")}
              >
                Book free intro call
              </Button>

              <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Menu</DrawerTitle>
                  </DrawerHeader>
                  <div className="flex flex-col gap-4 p-4">
                    <Link
                      to="/#services"
                      className="text-lg text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Services
                    </Link>
                    <Link
                      to="/#process"
                      className="text-lg text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Process
                    </Link>
                    <Link
                      to="/#results"
                      className="text-lg text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Results
                    </Link>
                    <Link
                      to="/#testimonials"
                      className="text-lg text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Testimonials
                    </Link>
                    <Link
                      to="/learn-build-grow-with-ai"
                      className="text-lg text-primary font-semibold transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Learn
                    </Link>
                    <Link
                      to="/case-studies"
                      className="text-lg text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Case Studies
                    </Link>
                    <Button
                      variant="default"
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg mt-4"
                      onClick={() => {
                        window.open("https://calendar.app.google/PaVwZ8ZxYX5SVBJT8", "_blank");
                        setMobileMenuOpen(false);
                      }}
                    >
                      Book free intro call
                    </Button>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Strategy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              The leaders who excel with Al think differently, not faster.
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Most teams jump straight into tools. Leaders can’t afford to. The real edge shows up earlier—before anyone
              even types a prompt.
              <br />
              <br />
              The best leaders I work with all share one thing. They treat AI as a long game. No fads, no fireworks.
              Just clear thinking about what actually moves the needle. They know AI isn’t just about speeding things
              up. It’s about making better calls in a world that’s getting messier by the week.
              <br />
              <br />
              If you want your organisation to grow with AI—not just flail after it—start with these three questions.
              <br />
              <br />
              <strong>1. What problem are we actually trying to solve?</strong>
              <br />
              <br />
              Plenty of AI projects die on impact because someone decided, “we should be doing something with AI.”
              That’s not a plan. That’s a panic.
              <br />
              <br />
              Instead, look for the friction. What’s slowing your team down? Where’s the work that matters but always
              gets squeezed?
              <br />
              <br />
              AI earns its place when it takes the grind out of good judgement. Not when it’s stuck on the side of
              something that already sort of works.
              <br />
              <br />
              <strong>2. Where does AI make us better, not just quicker?</strong>
              <br />
              <br />
              Speed’s easy. Quality’s harder. Don’t stop at faster output—aim for sharper thinking.
              <br />
              <br />
              That might look like: - Running the numbers before you bet the quarter - Turning rough thoughts into sharp
              decisions - Getting from idea to action before the mood changes - Giving your teams a shared brain, not
              another dusty Notion doc
              <br />
              <br />
              Smart strategy relies on clear thinking and pattern-spotting. AI can support both, if you stop treating it
              like a fancy calculator.
              <br />
              <br />
              <strong>3. Are we building capability—or just another crutch?</strong>
              <br />
              <br />
              If your team falls over when the AI’s off, you've built the wrong system.
              <br />
              <br />
              The right setup helps people think better, not think less. It should stretch judgement, not replace it.
              <br />
              <br />
              This isn’t about writing an AI strategy doc and calling it done. It’s about rewiring how your team learns,
              thinks, and decides—week in, week out.
              <br />
              <br />
              <strong>One last thing</strong>
              Leaders who win with AI treat it like a thinking partner. Not a shortcut. Not a gimmick. Not a toy. Get
              good at thinking with it. Build habits that actually stick. Grow a team that’s ready for whatever strange,
              brilliant thing comes next.
            </p>

            {/* Content area for future article */}
            <div className="prose prose-lg max-w-none dark:prose-invert">{/* Article content will go here */}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIStrategyThinkClearly;
