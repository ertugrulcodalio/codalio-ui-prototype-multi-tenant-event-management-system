import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function CustomerDashboard() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
        <section className="w-full space-y-6">
          <h1 className="text-2xl font-semibold text-foreground">Your Activity</h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { label: "Total Bookings", value: "12" },
              { label: "Upcoming Events", value: "4" },
              { label: "Notifications", value: "3" },
            ].map((metric) => (
              <Card key={metric.label}>
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">{metric.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                id: "evt-31",
                title: "Piano Night Sessions",
                image:
                  "/images/ui-prototype/977020.jpg",
              },
              {
                id: "evt-32",
                title: "Vinyl Revival Meetup",
                image:
                  "/images/ui-prototype/977020.jpg",
              },
            ].map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <img src={event.image} alt={event.title} className="h-40 w-full object-cover" />
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to={`/events/${event.id}`}>View Event</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
