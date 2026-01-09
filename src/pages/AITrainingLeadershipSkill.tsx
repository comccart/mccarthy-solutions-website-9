import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, ArrowLeft, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import chevronLogo from "@/assets/chevron-logo.png";

const AITrainingLeadershipSkill = () => {
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
              <Link to="/learn-build-grow-with-ai" className="text-primary font-semibold transition-colors">
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
            <div className="mb-6">
              <Link to="/learn-build-grow-with-ai">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
            <Badge variant="secondary" className="mb-6">
              Training
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              AI Literacy is now a leadership skill.
            </h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed space-y-6">
              <p>
                Most people think AI training is about prompts. It’s not. It’s about confidence, judgement, and knowing
                how to work in a world where information isn’t scarce anymore.
              </p>

              <p>
                The biggest gap I see inside organisations isn’t technical. It’s the gap between “I don’t get this” and
                “oh, that’s all it is.” The tools are simple. The mindset shift takes the work.
              </p>

              <p>Time to fix that.</p>

              <h3 className="font-semibold text-xl">1. People think they need to know far more than they do</h3>

              <p>
                Most professionals imagine they need to learn code, master a stack of tools, or sign up for a marathon
                course. They don’t.
              </p>

              <p>They need three things.</p>

              <ul className="list-disc list-inside space-y-1">
                <li>How to ask better questions.</li>
                <li>How to tell what’s solid, what’s shaky, and what’s missing.</li>
                <li>How to slot AI into the work they already do instead of treating it as a side quest.</li>
              </ul>

              <p>Once people see this, resistance fades. Curiosity shows up. Fear packs its bags.</p>

              <h3 className="font-semibold text-xl">
                2. AI isn’t replacing people. It’s replacing the bits they dread
              </h3>

              <p>
                Email. Admin. Drafting. Rewriting. Digging for information that never seems to be where it should be. No
                one leaps out of bed thrilled about these.
              </p>

              <p>
                AI training frees people to focus on the parts of their job that actually need a human mind, like
                judgement and context and real conversations. When teams feel that lift, the whole mood shifts.
              </p>

              <h3 className="font-semibold text-xl">3. Training has to be practical or it won’t stick</h3>

              <p>No one wants theory for theory’s sake. They want to know how this helps them get through the week.</p>

              <p>
                The most useful training I run covers three layers. Quick wins that show the point. Real examples from
                their own work. A shared playbook so people aren’t reinventing the wheel every morning.
              </p>

              <p>
                If someone sees AI making their day easier within ten minutes, culture starts to move, and it moves
                fast.
              </p>

              <h3 className="font-semibold text-xl">Final thought</h3>

              <p>
                You can’t build an AI-ready organisation without people who know how to work with it. Training isn’t a
                perk. It’s the base layer.
              </p>

              <p>
                Learn the basics. Build confidence. Grow teams who work better together because AI handles the boring
                stuff quietly in the background.
              </p>
            </p>

            {/* Content area for future article */}
            <div className="prose prose-lg max-w-none dark:prose-invert">{/* Article content will go here */}</div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Let's talk about how AI can work for you
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Ready to explore your next step? Contact us now.</p>
          <Button size="lg" asChild>
            <a href="https://calendar.app.google/KxxmEvbPQfzcdLFP7" target="_blank" rel="noopener noreferrer">
              Get in touch
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-space-cadet text-isabeline py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={chevronLogo} alt="McCarthy Solutions" className="w-8 h-8" />
                <div className="text-2xl font-bold">McCarthy Solutions</div>
              </div>
              <p className="text-isabeline/80">AI consultant for consultants and SME leaders.</p>
              <p className="text-isabeline/60 italic">
                "The illiterate of the 21st century will be those who cannot learn, unlearn, and relearn." - Alvin
                Toffler
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/#services" className="text-isabeline/80 hover:text-isabeline transition-colors">
                    AI Training
                  </Link>
                </li>
                <li>
                  <Link to="/#services" className="text-isabeline/80 hover:text-isabeline transition-colors">
                    Strategy & Advisory
                  </Link>
                </li>
                <li>
                  <Link to="/#services" className="text-isabeline/80 hover:text-isabeline transition-colors">
                    Implementation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/#process" className="text-isabeline/80 hover:text-isabeline transition-colors">
                    Process
                  </Link>
                </li>
                <li>
                  <Link to="/#results" className="text-isabeline/80 hover:text-isabeline transition-colors">
                    Results
                  </Link>
                </li>
                <li>
                  <Link to="/#testimonials" className="text-isabeline/80 hover:text-isabeline transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-isabeline/80 hover:text-isabeline transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/ai-manifesto" className="text-isabeline/80 hover:text-isabeline transition-colors">
                    AI Manifesto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/legal#privacy" className="text-isabeline/80 hover:text-isabeline transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/legal#terms" className="text-isabeline/80 hover:text-isabeline transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/legal#cookies" className="text-isabeline/80 hover:text-isabeline transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/ai-transparency" className="text-isabeline/80 hover:text-isabeline transition-colors">
                    AI Transparency Notice
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Responsible AI Box */}
          <div className="pt-4 mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm border rounded-lg py-2.5 px-4 bg-isabeline/10">
            <ShieldCheck className="h-5 w-5 text-orange flex-shrink-0" />
            <span className="font-medium text-isabeline">Responsible AI:</span>
            <span className="text-center sm:text-left text-isabeline/80">We check outputs before use</span>
            <span className="hidden sm:inline text-isabeline/80">•</span>
            <span className="text-center sm:text-left text-isabeline/80">We don't automate decisions about people</span>
            <span className="hidden sm:inline text-isabeline/80">•</span>
            <span className="text-center sm:text-left text-isabeline/80">We review tools regularly</span>
            <Link to="/ai-transparency-notice" className="text-orange hover:underline ml-0 sm:ml-2 mt-2 sm:mt-0">Learn more →</Link>
          </div>

          <div className="border-t border-isabeline/20 pt-8 text-center text-isabeline/60">
            <p>
              © 2025 McCarthy Solutions. All rights reserved. Built with 💚 in Dublin.{" "}
              <a href="mailto:hello@mccarthysolutions.ie" className="hover:text-isabeline transition-colors underline">
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AITrainingLeadershipSkill;
