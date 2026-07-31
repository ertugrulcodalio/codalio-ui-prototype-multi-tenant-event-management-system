import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function CustomerSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(`Welcome, ${name}!`);
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-3xl min-w-0 flex-col gap-6 px-4 py-10 md:px-6">
        <section className="w-full">
          <Card className="mx-auto max-w-md">
            <CardHeader>
              <CardTitle>Create your attendee account</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={name} onChange={(event) => setName(event.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <div className="flex items-start gap-2 rounded-md border p-3">
                  <Checkbox
                    id="terms"
                    checked={acceptedTerms}
                    onCheckedChange={(checked) => setAcceptedTerms(Boolean(checked))}
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to terms and event notifications.
                  </Label>
                </div>
                <Button className="w-full" type="submit" disabled={!acceptedTerms}>
                  Sign Up
                </Button>
                {message ? <p className="text-sm text-primary">{message}</p> : null}
              </form>
              <p className="mt-4 text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link className="text-primary underline" to="/customer/login">
                  Login
                </Link>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
