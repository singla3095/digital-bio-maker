import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Profile } from "@/types/portfolio";

interface ProfileFormProps {
  data: Profile;
  onChange: (data: Profile) => void;
}

export const ProfileForm = ({ data, onChange }: ProfileFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Professional Title</Label>
        <Input
          id="title"
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
          placeholder="Senior Software Engineer"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          value={data.bio}
          onChange={(e) => onChange({ ...data, bio: e.target.value })}
          placeholder="Tell us about yourself..."
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="photo">Photo URL</Label>
        <Input
          id="photo"
          value={data.photo}
          onChange={(e) => onChange({ ...data, photo: e.target.value })}
          placeholder="https://example.com/photo.jpg"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={data.location}
            onChange={(e) => onChange({ ...data, location: e.target.value })}
            placeholder="San Francisco, CA"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            placeholder="john@example.com"
          />
        </div>
      </div>
    </div>
  );
};
