import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

export default function OrganizerEvents() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const events = [
    { id: "evt-1", name: "Neon City Festival", date: "Oct 08, 2026", status: "published" },
    { id: "evt-2", name: "Founder Pitch Night", date: "Nov 10, 2026", status: "draft" },
    { id: "evt-3", name: "Lantern Nights", date: "Nov 14, 2026", status: "published" },
  ];

  const filtered = useMemo(() => {
    return events.filter((event) => {
      const matchesQuery = event.name.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === "all" || event.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [events, query, status]);

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
        <section className="w-full space-y-4">
          <h1 className="text-2xl font-semibold text-foreground">Events</h1>
          <div className="flex flex-col gap-3 md:flex-row">
            <Input
              placeholder="Search events"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="md:max-w-sm"
            />
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full md:w-44">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground">
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
            <Button asChild className="md:ml-auto">
              <Link to="/organizer/events/new">New Event</Link>
            </Button>
          </div>

          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>{event.name}</TableCell>
                    <TableCell>{event.date}</TableCell>
                    <TableCell>
                      <Badge variant={event.status === "published" ? "default" : "secondary"}>{event.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="inline-flex gap-2">
                        <Button asChild size="sm" variant="outline">
                          <Link to={`/organizer/events/${event.id}`}>Edit</Link>
                        </Button>
                        <Button asChild size="sm" variant="ghost">
                          <Link to={`/organizer/events/${event.id}/tickets`}>Tickets</Link>
                        </Button>
                        <Button asChild size="sm" variant="ghost">
                          <Link to={`/organizer/events/${event.id}/bookings`}>Bookings</Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </div>
  );
}
