import { BarChart3, KeyRound, ShieldCheck, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Landing() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-8 px-4 py-6 md:px-6">
        <section className="w-full">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent p-8 text-primary-foreground md:p-12">
            <img
              src="/images/ui-prototype/1357961.jpg"
              alt="Concert crowd"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="relative max-w-3xl">
              <Badge className="bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/15">
                Secure multi-tenant platform
              </Badge>
              <h1 className="mt-4 text-3xl font-bold md:text-5xl">Discover, manage, and sell out your events</h1>
              <p className="mt-3 text-base opacity-95 md:text-lg">
                A secure multi-tenant event platform for organizers and attendees.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/events">Explore Events</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link to="/organizer/login">Organizer Portal</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-foreground">Trusted by modern event teams</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { label: "Organizations", value: "2+" },
              { label: "Events Published", value: "3+" },
              { label: "Bookings Processed", value: "2+" },
            ].map((item) => (
              <Card key={item.label}>
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="w-full">
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Everything needed to run events</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Tenant Isolation", icon: ShieldCheck },
              { title: "Role-Based Access", icon: KeyRound },
              { title: "Ticket Management", icon: Ticket },
              { title: "Booking Insights", icon: BarChart3 },
            ].map((feature) => (
              <Card key={feature.title} className="transition-colors duration-200 hover:bg-muted/40">
                <CardHeader>
                  <feature.icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Built for secure, scalable event operations.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="w-full">
          <Card className="border-primary/30 bg-card">
            <CardContent className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Start hosting smarter events today</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Launch branded experiences, control ticketing, and track bookings in one place.
                </p>
              </div>
              <Button asChild size="lg">
                <Link to="/organizer/signup">Create Organizer Account</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
