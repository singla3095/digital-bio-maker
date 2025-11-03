import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { Skill } from "@/types/portfolio";

interface SkillsFormProps {
  data: Skill[];
  onChange: (data: Skill[]) => void;
}

export const SkillsForm = ({ data, onChange }: SkillsFormProps) => {
  const addSkillCategory = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      category: "",
      items: [],
    };
    onChange([...data, newSkill]);
  };

  const updateSkill = (id: string, updates: Partial<Skill>) => {
    onChange(data.map((skill) => (skill.id === id ? { ...skill, ...updates } : skill)));
  };

  const deleteSkill = (id: string) => {
    onChange(data.filter((skill) => skill.id !== id));
  };

  const updateSkillItems = (id: string, itemsString: string) => {
    const items = itemsString.split(",").map((s) => s.trim()).filter(Boolean);
    updateSkill(id, { items });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Skills</h3>
        <Button onClick={addSkillCategory} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      {data.map((skill) => (
        <Card key={skill.id} className="p-4 space-y-4">
          <div className="flex justify-between items-start">
            <h4 className="font-medium">{skill.category || "New Category"}</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteSkill(skill.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <Label>Category Name</Label>
            <Input
              value={skill.category}
              onChange={(e) =>
                updateSkill(skill.id, { category: e.target.value })
              }
              placeholder="e.g., Programming Languages, Frameworks"
            />
          </div>

          <div className="space-y-2">
            <Label>Skills (comma-separated)</Label>
            <Input
              value={skill.items.join(", ")}
              onChange={(e) => updateSkillItems(skill.id, e.target.value)}
              placeholder="JavaScript, Python, React"
            />
          </div>
        </Card>
      ))}

      {data.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          No skills added yet. Click "Add Category" to get started.
        </p>
      )}
    </div>
  );
};
