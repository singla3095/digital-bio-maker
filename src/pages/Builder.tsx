import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Eye, Code } from "lucide-react";
import { ProfileForm } from "@/components/builder/ProfileForm";
import { ExperienceForm } from "@/components/builder/ExperienceForm";
import { EducationForm } from "@/components/builder/EducationForm";
import { ProjectsForm } from "@/components/builder/ProjectsForm";
import { SkillsForm } from "@/components/builder/SkillsForm";
import { ContactForm } from "@/components/builder/ContactForm";
import { LinkedInImport } from "@/components/builder/LinkedInImport";
import { PortfolioPreview } from "@/components/preview/PortfolioPreview";
import { PortfolioData } from "@/types/portfolio";

const Builder = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    profile: {
      name: "Your Name",
      title: "Your Professional Title",
      bio: "A brief description about yourself and your expertise.",
      photo: "",
      location: "",
      email: "",
    },
    experience: [],
    education: [],
    projects: [],
    skills: [],
    contact: {
      github: "",
      linkedin: "",
      twitter: "",
      website: "",
    },
  });

  const [activeView, setActiveView] = useState<"edit" | "preview">("edit");

  const handleExport = () => {
    const dataStr = JSON.stringify(portfolioData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "portfolio-data.json";
    link.click();
  };

  const handleLinkedInImport = (importedData: Partial<PortfolioData>) => {
    setPortfolioData({
      profile: importedData.profile || portfolioData.profile,
      experience: importedData.experience || portfolioData.experience,
      education: importedData.education || portfolioData.education,
      projects: importedData.projects || portfolioData.projects,
      skills: importedData.skills || portfolioData.skills,
      contact: importedData.contact || portfolioData.contact,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            Portfolio Builder
          </h1>
          <div className="flex gap-2">
            <LinkedInImport onImport={handleLinkedInImport} />
            <Button
              variant={activeView === "edit" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveView("edit")}
            >
              <Code className="h-4 w-4 mr-2" />
              Edit
            </Button>
            <Button
              variant={activeView === "preview" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveView("preview")}
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button variant="default" size="sm" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeView === "edit" ? (
          <Card className="p-6 shadow-medium">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-6 mb-6">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <ProfileForm
                  data={portfolioData.profile}
                  onChange={(profile) =>
                    setPortfolioData({ ...portfolioData, profile })
                  }
                />
              </TabsContent>

              <TabsContent value="experience">
                <ExperienceForm
                  data={portfolioData.experience}
                  onChange={(experience) =>
                    setPortfolioData({ ...portfolioData, experience })
                  }
                />
              </TabsContent>

              <TabsContent value="education">
                <EducationForm
                  data={portfolioData.education}
                  onChange={(education) =>
                    setPortfolioData({ ...portfolioData, education })
                  }
                />
              </TabsContent>

              <TabsContent value="projects">
                <ProjectsForm
                  data={portfolioData.projects}
                  onChange={(projects) =>
                    setPortfolioData({ ...portfolioData, projects })
                  }
                />
              </TabsContent>

              <TabsContent value="skills">
                <SkillsForm
                  data={portfolioData.skills}
                  onChange={(skills) =>
                    setPortfolioData({ ...portfolioData, skills })
                  }
                />
              </TabsContent>

              <TabsContent value="contact">
                <ContactForm
                  data={portfolioData.contact}
                  onChange={(contact) =>
                    setPortfolioData({ ...portfolioData, contact })
                  }
                />
              </TabsContent>
            </Tabs>
          </Card>
        ) : (
          <PortfolioPreview data={portfolioData} />
        )}
      </main>
    </div>
  );
};

export default Builder;
