import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

type BookingItem = {
  id: string;
  customer: string;
  ticket: string;
  status: string;
};

export default function OrganizerEventBookings() {
  const { event_id } = useParams();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [exported, setExported] = useState(false);
  const [bookings, setBookings] = useState<BookingItem[]>([
    { id: "bk-1", customer: "Alyssa M.", ticket: "VIP", status: "confirmed" },
    { id: "bk-2", customer: "Victor P.", ticket: "Standard", status: "confirmed" },
    { id: "bk-3", customer: "Sam T.", ticket: "Standard", status: "refunded" },
  ]);

  const filtered = useMemo(() => {
    return bookings.filter((booking) => {
      const matchesQuery = booking.customer.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === "all" || booking.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [bookings, query, status]);

  const updateStatus = (id: string, nextStatus: string) => {
    setBookings((prev) => prev.map((booking) => (booking.id === id ? { ...booking, status: nextStatus } : booking)));
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
        <section className="w-full space-y-4">
          <h1 className="text-2xl font-semibold text-foreground">Bookings for Event {event_id}</h1>
          <div className="flex flex-col gap-3 md:flex-row">
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search attendee"
              className="md:max-w-sm"
            />
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full md:w-44">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground">
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="refunded">Refunded</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="secondary" className="md:ml-auto" onClick={() => setExported(true)}>
              Export CSV
            </Button>
          </div>
          {exported ? <p className="text-sm text-primary">CSV exported successfully.</p> : null}

          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Ticket</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.customer}</TableCell>
                    <TableCell>{booking.ticket}</TableCell>
                    <TableCell>
                      <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>{booking.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="outline">
                            Manage
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-popover text-popover-foreground">
                          <DropdownMenuItem onClick={() => updateStatus(booking.id, "confirmed")}>Mark Checked-In</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus(booking.id, "refunded")}>Refund</DropdownMenuItem>
                          <DropdownMenuItem>View Booking</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
