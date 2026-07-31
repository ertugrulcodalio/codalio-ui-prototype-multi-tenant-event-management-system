import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(`Logged in as ${email}`);
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-3xl min-w-0 flex-col gap-6 px-4 py-10 md:px-6">
        <section className="w-full">
          <Card className="mx-auto max-w-md">
            <CardHeader>
              <CardTitle>Welcome back</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
                <Button className="w-full" type="submit">
                  Login
                </Button>
                {message ? <p className="text-sm text-primary">{message}</p> : null}
              </form>
              <p className="mt-4 text-sm text-muted-foreground">
                New here?{" "}
                <Link className="text-primary underline" to="/customer/signup">
                  Create an account
                </Link>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
