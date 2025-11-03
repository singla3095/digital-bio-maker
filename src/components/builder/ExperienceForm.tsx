import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2 } from "lucide-react";
import { Experience } from "@/types/portfolio";

interface ExperienceFormProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

export const ExperienceForm = ({ data, onChange }: ExperienceFormProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      achievements: [],
    };
    onChange([...data, newExp]);
    setEditingId(newExp.id);
  };

  const updateExperience = (id: string, updates: Partial<Experience>) => {
    onChange(data.map((exp) => (exp.id === id ? { ...exp, ...updates } : exp)));
  };

  const deleteExperience = (id: string) => {
    onChange(data.filter((exp) => exp.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Work Experience</h3>
        <Button onClick={addExperience} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </Button>
      </div>

      {data.map((exp) => (
        <Card key={exp.id} className="p-4 space-y-4">
          <div className="flex justify-between items-start">
            <h4 className="font-medium">{exp.company || "New Experience"}</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteExperience(exp.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Company</Label>
              <Input
                value={exp.company}
                onChange={(e) =>
                  updateExperience(exp.id, { company: e.target.value })
                }
                placeholder="Company Name"
              />
            </div>

            <div className="space-y-2">
              <Label>Role</Label>
              <Input
                value={exp.role}
                onChange={(e) =>
                  updateExperience(exp.id, { role: e.target.value })
                }
                placeholder="Job Title"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Input
                type="month"
                value={exp.startDate}
                onChange={(e) =>
                  updateExperience(exp.id, { startDate: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>End Date</Label>
              <Input
                type="month"
                value={exp.endDate}
                onChange={(e) =>
                  updateExperience(exp.id, { endDate: e.target.value })
                }
                disabled={exp.current}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id={`current-${exp.id}`}
              checked={exp.current}
              onCheckedChange={(checked) =>
                updateExperience(exp.id, { current: checked as boolean })
              }
            />
            <Label htmlFor={`current-${exp.id}`}>Currently working here</Label>
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={exp.description}
              onChange={(e) =>
                updateExperience(exp.id, { description: e.target.value })
              }
              placeholder="Describe your role and responsibilities..."
              rows={3}
            />
          </div>
        </Card>
      ))}

      {data.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          No experience added yet. Click "Add Experience" to get started.
        </p>
      )}
    </div>
  );
};
