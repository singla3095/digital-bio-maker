import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectsFormProps {
  data: Project[];
  onChange: (data: Project[]) => void;
}

export const ProjectsForm = ({ data, onChange }: ProjectsFormProps) => {
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "",
      description: "",
      technologies: [],
      link: "",
      github: "",
      image: "",
    };
    onChange([...data, newProject]);
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    onChange(
      data.map((project) =>
        project.id === id ? { ...project, ...updates } : project
      )
    );
  };

  const deleteProject = (id: string) => {
    onChange(data.filter((project) => project.id !== id));
  };

  const updateTechnologies = (id: string, techString: string) => {
    const technologies = techString.split(",").map((t) => t.trim()).filter(Boolean);
    updateProject(id, { technologies });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Projects</h3>
        <Button onClick={addProject} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>

      {data.map((project) => (
        <Card key={project.id} className="p-4 space-y-4">
          <div className="flex justify-between items-start">
            <h4 className="font-medium">{project.title || "New Project"}</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteProject(project.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <Label>Project Title</Label>
            <Input
              value={project.title}
              onChange={(e) =>
                updateProject(project.id, { title: e.target.value })
              }
              placeholder="My Awesome Project"
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={project.description}
              onChange={(e) =>
                updateProject(project.id, { description: e.target.value })
              }
              placeholder="Describe your project..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label>Technologies (comma-separated)</Label>
            <Input
              value={project.technologies.join(", ")}
              onChange={(e) =>
                updateTechnologies(project.id, e.target.value)
              }
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Project Link</Label>
              <Input
                value={project.link}
                onChange={(e) =>
                  updateProject(project.id, { link: e.target.value })
                }
                placeholder="https://project.com"
              />
            </div>

            <div className="space-y-2">
              <Label>GitHub URL</Label>
              <Input
                value={project.github}
                onChange={(e) =>
                  updateProject(project.id, { github: e.target.value })
                }
                placeholder="https://github.com/username/repo"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Project Image URL</Label>
            <Input
              value={project.image}
              onChange={(e) =>
                updateProject(project.id, { image: e.target.value })
              }
              placeholder="https://example.com/project-image.jpg"
            />
          </div>
        </Card>
      ))}

      {data.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          No projects added yet. Click "Add Project" to get started.
        </p>
      )}
    </div>
  );
};
