import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import chevronLogo from "@/assets/chevron-logo.png";

const AIManifesto = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const manifestoPoints = [
    {
      number: 1,
      title: "AI is a powerful tool with serious limits.",
      body: "We hold both truths at once. AI can change how work gets done, and it can fail in quiet, subtle ways. Good design starts by respecting both."
    },
    {
      number: 2,
      title: "We work at the extremes, not the middle.",
      body: "We pair speed with judgement. Scale with care. Ambition with restraint. Progress comes from holding opposing forces in tension, not smoothing them out."
    },
    {
      number: 3,
      title: "AI is a tool, not a plan.",
      body: "Tools don't decide what matters. People do. We start with outcomes, decisions, and real work, then choose technology that supports them."
    },
    {
      number: 4,
      title: "Humans stay in the loop. On purpose.",
      body: "AI supports thinking. It does not replace responsibility. Clear ownership and human judgement are designed in, not added later."
    },
    {
      number: 5,
      title: "If it doesn't get used, it doesn't count.",
      body: "Demos are easy. Adoption is the test. AI only matters when it survives contact with everyday work."
    },
    {
      number: 6,
      title: "Start small. Ship fast. Stay honest.",
      body: "We build narrow, useful systems first. We watch what breaks. We improve based on reality, not promises."
    },
    {
      number: 7,
      title: "Data without context is noise.",
      body: "More information does not mean better decisions. Framing, interpretation, and questions matter more than volume."
    },
    {
      number: 8,
      title: "Ethics is a design constraint, not an afterthought.",
      body: "If a system erodes trust, autonomy, or dignity, it fails. Responsible AI is built deliberately or not at all."
    },
    {
      number: 9,
      title: "AI should create assets, not just activity.",
      body: "Saving time once is nice. Reducing repeat effort and building things that last is the point."
    },
    {
      number: 10,
      title: "AI should raise the ceiling, not just lower the floor.",
      body: "Efficiency is expected. The real value is helping people attempt work that once felt out of reach. Bigger questions. Braver projects. Higher standards."
    }
  ];

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
              <Link to="/learn-build-grow-with-ai" className="text-foreground hover:text-accent transition-colors">Learn</Link>
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
                    <Link to="/learn-build-grow-with-ai" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
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
      <main className="container mx-auto px-6 py-12 max-w-3xl" style={{ paddingTop: '140px' }}>
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our AI Manifesto</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              These principles guide how we design, build, and use AI with founder-led and expert businesses.
            </p>
          </div>

          {/* Manifesto Points */}
          <div className="space-y-12">
            {manifestoPoints.map((point) => (
              <div key={point.number} className="space-y-3">
                <p className="text-lg text-foreground leading-relaxed">
                  <span className="font-bold">{point.number}. {point.title}</span>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Block */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground leading-relaxed">
              This manifesto exists to make our work legible.<br />
              If this way of thinking resonates, we'll work well together.<br />
              If it doesn't, that's useful to know early.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border" style={{ backgroundColor: '#F5F1ED' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={chevronLogo} alt="McCarthy Solutions" className="w-7 h-7" />
                <div className="text-xl font-bold text-foreground">McCarthy Solutions</div>
              </div>
              <p className="text-muted-foreground text-sm">AI consultant for consultants and SME leaders.</p>
              <p className="text-muted-foreground text-sm italic mt-3">"The illiterate of the 21st century will be those who cannot learn, unlearn, and relearn." - Alvin Toffler</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/#services" className="hover:text-accent transition-colors">AI Training</Link></li>
                <li><Link to="/#services" className="hover:text-accent transition-colors">Strategy & Advisory</Link></li>
                <li><Link to="/#services" className="hover:text-accent transition-colors">Implementation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/#process" className="hover:text-accent transition-colors">Process</Link></li>
                <li><Link to="/#results" className="hover:text-accent transition-colors">Results</Link></li>
                <li><Link to="/#testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
                <li><Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
                <li><Link to="/ai-manifesto" className="hover:text-accent transition-colors">AI Manifesto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/legal#privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link to="/legal#terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link></li>
                <li><Link to="/legal#cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
                <li><Link to="/ai-transparency-notice" className="hover:text-accent transition-colors">AI Transparency Notice</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Responsible AI Box */}
          <div className="pt-4 mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm text-muted-foreground border rounded-lg py-2.5 px-4 bg-white/50">
            <ShieldCheck className="h-5 w-5 text-accent flex-shrink-0" />
            <span className="font-medium text-foreground">Responsible AI:</span>
            <span className="text-center sm:text-left">We check outputs before use</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-center sm:text-left">We don't automate decisions about people</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-center sm:text-left">We review tools regularly</span>
            <Link to="/ai-transparency-notice" className="text-accent hover:underline ml-0 sm:ml-2 mt-2 sm:mt-0">Learn more →</Link>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 McCarthy Solutions. All rights reserved. Built with 💚 in Dublin. <a href="mailto:conor@mccarthy-solutions.com" className="hover:text-accent transition-colors underline">Get in touch</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIManifesto;
