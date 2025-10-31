import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AITransparency = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
            McCarthy Solutions
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">AI Transparency Notice</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="bg-muted/50 border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground">Content will be added here</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4 text-foreground">McCarthy Solutions</h3>
              <p className="text-sm text-muted-foreground">AI consultancy based in Dublin, Ireland</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <div className="space-y-2">
                <Link to="/#services" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
                <Link to="/#process" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Process
                </Link>
                <Link to="/case-studies" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <div className="space-y-2">
                <Link to="/legal#privacy-policy" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/legal#terms-of-service" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
                <Link to="/legal#cookie-policy" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
                <Link to="/ai-transparency-notice" className="block text-muted-foreground hover:text-foreground transition-colors">
                  AI Transparency Notice
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} McCarthy Solutions. All rights reserved. Built with 💚 in Dublin. <a href="mailto:conor@mccarthy-solutions.com" className="hover:text-accent transition-colors underline">Get in touch</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AITransparency;
