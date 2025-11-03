import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  Code, 
  Palette, 
  Download, 
  Zap,
  Github,
  Layout,
  CheckCircle2 
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Layout,
      title: "Professional Templates",
      description: "Beautiful, responsive designs that showcase your work perfectly",
    },
    {
      icon: Palette,
      title: "Easy Customization",
      description: "Intuitive builder with real-time preview of your changes",
    },
    {
      icon: Code,
      title: "Export Ready",
      description: "Download your portfolio code, ready for GitHub Pages deployment",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Create your professional portfolio in minutes, not hours",
    },
  ];

  const steps = [
    "Fill in your profile information",
    "Add your experience and education",
    "Showcase your best projects",
    "Download and deploy to GitHub Pages",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <Badge className="mb-4 bg-gradient-accent">
                <Sparkles className="h-3 w-3 mr-1" />
                Free Portfolio Builder
              </Badge>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Build Your
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Dream Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create a stunning professional portfolio website in minutes. 
              No coding required. Perfect for developers, designers, and creators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-medium hover:shadow-lg transition-all"
                onClick={() => navigate("/builder")}
              >
                Start Building Free
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                asChild
              >
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground">
              Powerful features to create the perfect portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 space-y-4 hover:shadow-medium transition-all border-2 hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Four simple steps to your professional portfolio
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-6 flex items-center gap-6 hover:shadow-medium transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {index + 1}
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <p className="text-lg font-medium">{step}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-medium"
              onClick={() => navigate("/builder")}
            >
              Get Started Now
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Ready to Build Your Portfolio?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of professionals showcasing their work online
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 shadow-medium"
            onClick={() => navigate("/builder")}
          >
            Start Building Free
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-primary-foreground ${className}`}>
    {children}
  </span>
);

export default Index;
