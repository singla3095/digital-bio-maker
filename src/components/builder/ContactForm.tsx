import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Contact } from "@/types/portfolio";

interface ContactFormProps {
  data: Contact;
  onChange: (data: Contact) => void;
}

export const ContactForm = ({ data, onChange }: ContactFormProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Social Links</h3>

      <div className="space-y-2">
        <Label htmlFor="github">GitHub Profile</Label>
        <Input
          id="github"
          value={data.github}
          onChange={(e) => onChange({ ...data, github: e.target.value })}
          placeholder="https://github.com/username"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="linkedin">LinkedIn Profile</Label>
        <Input
          id="linkedin"
          value={data.linkedin}
          onChange={(e) => onChange({ ...data, linkedin: e.target.value })}
          placeholder="https://linkedin.com/in/username"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="twitter">Twitter Profile</Label>
        <Input
          id="twitter"
          value={data.twitter}
          onChange={(e) => onChange({ ...data, twitter: e.target.value })}
          placeholder="https://twitter.com/username"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Personal Website</Label>
        <Input
          id="website"
          value={data.website}
          onChange={(e) => onChange({ ...data, website: e.target.value })}
          placeholder="https://yourwebsite.com"
        />
      </div>
    </div>
  );
};
