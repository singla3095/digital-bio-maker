import { PortfolioData } from "@/types/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Twitter,
  Globe,
  Mail,
  MapPin,
  ExternalLink,
  Calendar,
} from "lucide-react";

interface PortfolioPreviewProps {
  data: PortfolioData;
}

export const PortfolioPreview = ({ data }: PortfolioPreviewProps) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString + "-01");
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <div className="max-w-5xl mx-auto bg-card rounded-lg shadow-medium overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 px-6 text-center border-b">
        {data.profile.photo && (
          <div className="mb-6 flex justify-center">
            <img
              src={data.profile.photo}
              alt={data.profile.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-medium"
            />
          </div>
        )}
        <h1 className="text-5xl font-bold mb-2">{data.profile.name}</h1>
        <p className="text-2xl text-primary font-semibold mb-4">
          {data.profile.title}
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          {data.profile.bio}
        </p>

        <div className="flex gap-4 justify-center mb-6 text-sm text-muted-foreground">
          {data.profile.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {data.profile.location}
            </div>
          )}
          {data.profile.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              {data.profile.email}
            </div>
          )}
        </div>

        <div className="flex gap-3 justify-center">
          {data.contact.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {data.contact.linkedin && (
            <Button variant="outline" size="sm" asChild>
              <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
          {data.contact.twitter && (
            <Button variant="outline" size="sm" asChild>
              <a href={data.contact.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          )}
          {data.contact.website && (
            <Button variant="outline" size="sm" asChild>
              <a href={data.contact.website} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </section>

      <div className="p-8 space-y-12">
        {/* Experience Section */}
        {data.experience.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">Experience</h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <Card key={exp.id} className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {formatDate(exp.startDate)} -{" "}
                        {exp.current ? "Present" : formatDate(exp.endDate)}
                      </span>
                    </div>
                  </div>
                  <p className="text-foreground mt-3">{exp.description}</p>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">Education</h2>
            <div className="space-y-6">
              {data.education.map((edu) => (
                <Card key={edu.id} className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree} in {edu.field}</h3>
                      <p className="text-lg text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-foreground mt-3">{edu.description}</p>
                  )}
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {data.projects.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.projects.map((project) => (
                <Card key={project.id} className="p-6 space-y-4">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  )}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {data.skills.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">Skills</h2>
            <div className="space-y-6">
              {data.skills.map((skill) => (
                <div key={skill.id}>
                  <h3 className="text-lg font-semibold mb-3">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
