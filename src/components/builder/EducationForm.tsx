import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { Education } from "@/types/portfolio";

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

export const EducationForm = ({ data, onChange }: EducationFormProps) => {
  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    onChange([...data, newEdu]);
  };

  const updateEducation = (id: string, updates: Partial<Education>) => {
    onChange(data.map((edu) => (edu.id === id ? { ...edu, ...updates } : edu)));
  };

  const deleteEducation = (id: string) => {
    onChange(data.filter((edu) => edu.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Education</h3>
        <Button onClick={addEducation} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </Button>
      </div>

      {data.map((edu) => (
        <Card key={edu.id} className="p-4 space-y-4">
          <div className="flex justify-between items-start">
            <h4 className="font-medium">{edu.institution || "New Education"}</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteEducation(edu.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <Label>Institution</Label>
            <Input
              value={edu.institution}
              onChange={(e) =>
                updateEducation(edu.id, { institution: e.target.value })
              }
              placeholder="University Name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Degree</Label>
              <Input
                value={edu.degree}
                onChange={(e) =>
                  updateEducation(edu.id, { degree: e.target.value })
                }
                placeholder="Bachelor's, Master's, etc."
              />
            </div>

            <div className="space-y-2">
              <Label>Field of Study</Label>
              <Input
                value={edu.field}
                onChange={(e) =>
                  updateEducation(edu.id, { field: e.target.value })
                }
                placeholder="Computer Science"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Input
                type="month"
                value={edu.startDate}
                onChange={(e) =>
                  updateEducation(edu.id, { startDate: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>End Date</Label>
              <Input
                type="month"
                value={edu.endDate}
                onChange={(e) =>
                  updateEducation(edu.id, { endDate: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={edu.description}
              onChange={(e) =>
                updateEducation(edu.id, { description: e.target.value })
              }
              placeholder="Describe your education..."
              rows={2}
            />
          </div>
        </Card>
      ))}

      {data.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          No education added yet. Click "Add Education" to get started.
        </p>
      )}
    </div>
  );
};
