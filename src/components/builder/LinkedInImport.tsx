import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Linkedin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PortfolioData } from "@/types/portfolio";

interface LinkedInImportProps {
  onImport: (data: Partial<PortfolioData>) => void;
}

export const LinkedInImport = ({ onImport }: LinkedInImportProps) => {
  const [open, setOpen] = useState(false);
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleImport = async () => {
    if (!linkedinUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a LinkedIn profile URL",
        variant: "destructive",
      });
      return;
    }

    if (!linkedinUrl.includes("linkedin.com/in/")) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid LinkedIn profile URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Mock data for demonstration - simulating Simarnoor's profile
    const mockData: Partial<PortfolioData> = {
      profile: {
        name: "Simarnoor Bains",
        title: "Software Engineer | Full Stack Developer",
        bio: "Experienced software engineer with a passion for building scalable web applications. Specialized in React, Node.js, and cloud technologies.",
        photo: "",
        location: "San Francisco Bay Area",
        email: "simarnoor@example.com",
      },
      experience: [
        {
          id: "1",
          company: "Tech Company",
          role: "Senior Software Engineer",
          startDate: "2020-01",
          endDate: "",
          current: true,
          description: "Leading development of full-stack applications",
          achievements: [
            "Built scalable microservices architecture",
            "Improved application performance by 40%",
            "Mentored junior developers",
          ],
        },
        {
          id: "2",
          company: "Startup Inc",
          role: "Software Engineer",
          startDate: "2018-06",
          endDate: "2019-12",
          current: false,
          description: "Developed web applications using modern technologies",
          achievements: [
            "Implemented RESTful APIs",
            "Built responsive UI components",
          ],
        },
      ],
      education: [
        {
          id: "1",
          institution: "University Name",
          degree: "Bachelor of Science",
          field: "Computer Science",
          startDate: "2014-09",
          endDate: "2018-05",
          description: "Graduated with honors",
        },
      ],
      skills: [
        {
          id: "1",
          category: "Frontend",
          items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
        },
        {
          id: "2",
          category: "Backend",
          items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
        },
        {
          id: "3",
          category: "Tools",
          items: ["Git", "Docker", "AWS", "CI/CD"],
        },
      ],
      contact: {
        github: "",
        linkedin: linkedinUrl,
        twitter: "",
        website: "",
      },
    };

    // Simulate API call delay
    setTimeout(() => {
      onImport(mockData);
      setIsLoading(false);
      setOpen(false);
      toast({
        title: "Success!",
        description: "LinkedIn profile data imported successfully",
      });
      setLinkedinUrl("");
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Linkedin className="h-4 w-4 mr-2" />
          Import from LinkedIn
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Linkedin className="h-5 w-5 text-primary" />
            Import from LinkedIn
          </DialogTitle>
          <DialogDescription>
            Paste your LinkedIn profile URL to auto-fill your portfolio data.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="linkedin-url">LinkedIn Profile URL</Label>
            <Input
              id="linkedin-url"
              placeholder="https://www.linkedin.com/in/username"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="bg-muted/50 p-3 rounded-lg text-sm text-muted-foreground">
            <p className="font-medium mb-1">Example profiles to try:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>https://www.linkedin.com/in/simarnoor-bains-aa9a5512a/</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => {
              setOpen(false);
              setLinkedinUrl("");
            }}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button onClick={handleImport} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Importing...
              </>
            ) : (
              "Import"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
