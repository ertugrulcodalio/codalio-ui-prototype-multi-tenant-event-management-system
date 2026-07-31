import { useMemo, useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

export default function CustomerMyBookings() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const bookings = [
    { id: "b-1", event: "Neon City Festival", date: "Oct 08, 2026", status: "confirmed" },
    { id: "b-2", event: "Founders Connect", date: "Dec 03, 2026", status: "cancelled" },
    { id: "b-3", event: "Lantern Nights", date: "Nov 14, 2026", status: "confirmed" },
  ];

  const filtered = useMemo(() => {
    return bookings.filter((booking) => {
      const matchesQuery = booking.event.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === "all" || booking.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [bookings, query, status]);

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
        <section className="w-full space-y-4">
          <h1 className="text-2xl font-semibold text-foreground">All Bookings</h1>
          <div className="flex flex-col gap-3 md:flex-row">
            <Input
              placeholder="Search booking or event"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="md:max-w-sm"
            />
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.event}</TableCell>
                    <TableCell>{booking.date}</TableCell>
                    <TableCell>
                      <Badge variant={booking.status === "confirmed" ? "default" : "destructive"}>{booking.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="inline-flex gap-2">
                        <Button size="sm" variant="outline">
                          View Ticket
                        </Button>
                        <Button size="sm" variant="ghost">
                          Download Receipt
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
