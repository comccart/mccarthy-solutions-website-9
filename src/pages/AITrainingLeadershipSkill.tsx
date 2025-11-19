import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu } from "lucide-react";
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
              <Link to="/#services" className="text-foreground hover:text-accent transition-colors">Services</Link>
              <Link to="/#process" className="text-foreground hover:text-accent transition-colors">Process</Link>
              <Link to="/#results" className="text-foreground hover:text-accent transition-colors">Results</Link>
              <Link to="/#testimonials" className="text-foreground hover:text-accent transition-colors">Testimonials</Link>
              <Link to="/learn-build-grow-with-ai" className="text-accent font-semibold transition-colors">Learn</Link>
              <Link to="/case-studies" className="text-foreground hover:text-accent transition-colors">Case Studies</Link>
            </div>

            <div className="flex items-center gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" 
                onClick={() => window.open('https://calendar.app.google/PaVwZ8ZxYX5SVBJT8', '_blank')}
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
                    <Link to="/#services" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Services
                    </Link>
                    <Link to="/#process" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Process
                    </Link>
                    <Link to="/#results" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Results
                    </Link>
                    <Link to="/#testimonials" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Testimonials
                    </Link>
                    <Link to="/learn-build-grow-with-ai" className="text-lg text-primary font-semibold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Learn
                    </Link>
                    <Link to="/case-studies" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Case Studies
                    </Link>
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg mt-4" 
                      onClick={() => {
                        window.open('https://calendar.app.google/PaVwZ8ZxYX5SVBJT8', '_blank');
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
              Training
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              AI Literacy Is Now a Leadership Skill
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Full article coming soon. This page will share a deep-dive anchor post on this topic.
            </p>
            
            {/* Content area for future article */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {/* Article content will go here */}
            </div>
          </div>
        </div>
      </main>

      {/* Separator */}
      <div className="container mx-auto px-4 py-16">
        <hr className="border-t border-border" />
      </div>

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
              <p className="text-isabeline/60 italic">"The illiterate of the 21st century will be those who cannot learn, unlearn, and relearn." - Alvin Toffler</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/#services" className="text-isabeline/80 hover:text-isabeline transition-colors">AI Training</Link></li>
                <li><Link to="/#services" className="text-isabeline/80 hover:text-isabeline transition-colors">Strategy & Advisory</Link></li>
                <li><Link to="/#services" className="text-isabeline/80 hover:text-isabeline transition-colors">Implementation</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/#process" className="text-isabeline/80 hover:text-isabeline transition-colors">Process</Link></li>
                <li><Link to="/#results" className="text-isabeline/80 hover:text-isabeline transition-colors">Results</Link></li>
                <li><Link to="/#testimonials" className="text-isabeline/80 hover:text-isabeline transition-colors">Testimonials</Link></li>
                <li><Link to="/case-studies" className="text-isabeline/80 hover:text-isabeline transition-colors">Case Studies</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/legal#privacy" className="text-isabeline/80 hover:text-isabeline transition-colors">Privacy Policy</Link></li>
                <li><Link to="/legal#terms" className="text-isabeline/80 hover:text-isabeline transition-colors">Terms of Service</Link></li>
                <li><Link to="/legal#cookies" className="text-isabeline/80 hover:text-isabeline transition-colors">Cookie Policy</Link></li>
                <li><Link to="/ai-transparency" className="text-isabeline/80 hover:text-isabeline transition-colors">AI Transparency Notice</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-isabeline/20 pt-8 text-center text-isabeline/60">
            <p>© 2025 McCarthy Solutions. All rights reserved. Built with 💚 in Dublin. <a href="mailto:hello@mccarthysolutions.ie" className="hover:text-isabeline transition-colors underline">Get in touch</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AITrainingLeadershipSkill;
