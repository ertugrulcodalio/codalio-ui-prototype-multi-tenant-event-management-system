import { type FormEvent, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export default function OrganizerSignup() {
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(`Workspace created for ${organization}`);
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-4xl min-w-0 flex-col gap-6 px-4 py-10 md:px-6">
        <section className="w-full">
          <Card className="mx-auto max-w-xl">
            <CardHeader>
              <CardTitle>Create organizer workspace</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="org">Organization Name</Label>
                    <Input id="org" value={organization} onChange={(event) => setOrganization(event.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email</Label>
                    <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">What events do you host?</Label>
                  <Textarea id="bio" value={bio} onChange={(event) => setBio(event.target.value)} rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
                {message ? <p className="text-sm text-primary">{message}</p> : null}
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
