import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Menu, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import chevronLogo from "@/assets/chevron-logo.png";
const LearnBuildGrow = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <div className="min-h-screen bg-background">
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
              <Link to="/learn-build-grow-with-ai" className="text-primary font-semibold transition-colors">Learn</Link>
              <Link to="/case-studies" className="text-foreground hover:text-accent transition-colors">Case Studies</Link>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="default" size="lg" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" onClick={() => window.open('https://calendar.app.google/PaVwZ8ZxYX5SVBJT8', '_blank')}>
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
                    <Link to="/learn-build-grow-with-ai" className="text-lg text-primary font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>
                      Learn
                    </Link>
                    <Link to="/case-studies" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Case Studies
                    </Link>
                    <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg mt-4" onClick={() => {
                    window.open('https://calendar.app.google/PaVwZ8ZxYX5SVBJT8', '_blank');
                    setMobileMenuOpen(false);
                  }}>
                      Book free intro call
                    </Button>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Learn, Build, Grow with AI.
            </h1>
            <p className="text-xl text-muted-foreground">
              This is where I share longer thinking about how leaders can learn, build, and grow with AI. Three core themes. One simple aim. Help you work better with AI in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Card 1 - Strategy */}
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <Badge variant="secondary" className="mb-4 w-fit">
                    Strategy
                  </Badge>
                  <CardTitle className="text-2xl text-foreground">
                    The leaders who excel with Al think differently, not faster.
                  </CardTitle>
                  <CardDescription className="text-base">
                    Most teams rush to tools. Strategy starts earlier. This article looks at how leaders can use AI to sharpen thinking, make better choices, and focus on the work that actually moves the needle.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/ai-strategy-think-clearly">
                    <Button variant="default" className="w-full gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Card 2 - Training */}
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <Badge variant="secondary" className="mb-4 w-fit">
                    Training
                  </Badge>
                  <CardTitle className="text-2xl text-foreground">AI Literacy is now a leadership skill.</CardTitle>
                  <CardDescription className="text-base">
                    AI training is not about prompts. It is about confidence, judgement, and clear workflows. This article shows how to teach teams to work with AI without fear, jargon, or overwhelm.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/ai-training-leadership-skill">
                    <Button variant="default" className="w-full gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Card 3 - Implementation */}
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <Badge variant="secondary" className="mb-4 w-fit">
                    Implementation
                  </Badge>
                  <CardTitle className="text-2xl text-foreground">
                    The future of work isn't automated. It's augmented.
                  </CardTitle>
                  <CardDescription className="text-base">
                    Most organisations do not need more tools. They need simple systems that fit into everyday work. This article explains how to design AI workflows that remove friction and support people instead of replacing them.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/ai-implementation-make-work-lighter">
                    <Button variant="default" className="w-full gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border" style={{ backgroundColor: '#F5F1ED' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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
                <li><a href="/#services" className="hover:text-accent transition-colors">AI Training</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Strategy & Advisory</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Implementation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#process" className="hover:text-accent transition-colors">Process</a></li>
                <li><a href="/#results" className="hover:text-accent transition-colors">Results</a></li>
                <li><a href="/#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
                <li><a href="/case-studies" className="hover:text-accent transition-colors">Case Studies</a></li>
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
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 McCarthy Solutions. All rights reserved. Built with 💚 in Dublin. <a href="mailto:conor@mccarthy-solutions.com" className="hover:text-accent transition-colors underline">Get in touch</a>
          </div>
        </div>
      </footer>
    </div>;
};
export default LearnBuildGrow;