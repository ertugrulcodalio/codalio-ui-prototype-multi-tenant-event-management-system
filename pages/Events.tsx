import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export default function Events() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const events = [
    {
      id: "evt-1",
      title: "Neon City Festival",
      city: "Austin",
      date: "Oct 08, 2026",
      category: "music",
      image:
        "/images/ui-prototype/5270439.jpg",
    },
    {
      id: "evt-2",
      title: "Lantern Nights",
      city: "Seattle",
      date: "Nov 14, 2026",
      category: "culture",
      image:
        "/images/ui-prototype/5270439.jpg",
    },
    {
      id: "evt-3",
      title: "Founders Connect",
      city: "San Diego",
      date: "Dec 03, 2026",
      category: "networking",
      image:
        "/images/ui-prototype/5270439.jpg",
    },
  ];

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesQuery = `${event.title} ${event.city} ${event.date}`.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "all" || event.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [category, events, query]);

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
        <section className="w-full space-y-5">
          <h1 className="text-2xl font-semibold text-foreground">Find Your Next Event</h1>

          <div className="flex flex-col gap-3 md:flex-row">
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, city, or date"
              className="md:max-w-md"
            />
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full md:w-56">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground">
                <SelectItem value="all">All categories</SelectItem>
                <SelectItem value="music">Music</SelectItem>
                <SelectItem value="culture">Culture</SelectItem>
                <SelectItem value="networking">Networking</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="secondary" className="gap-2" onClick={() => setQuery("")}>
              <Search className="h-4 w-4" />
              Reset
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <img src={event.image} alt={event.title} className="h-40 w-full object-cover" />
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge variant="secondary">{event.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {event.date} • {event.city}
                  </p>
                  <Button asChild className="mt-4 w-full">
                    <Link to={`/events/${event.id}`}>View Details</Link>
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
