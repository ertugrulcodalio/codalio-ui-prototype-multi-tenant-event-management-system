import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export default function EventDetail() {
  const { event_id } = useParams();
  const eventId = event_id ?? "evt-1";

  const [ticketType, setTicketType] = useState("standard");
  const [quantity, setQuantity] = useState(1);
  const [checkoutState, setCheckoutState] = useState<"idle" | "completed">("idle");

  const event = {
    title: "Midnight Stage Sessions",
    date: "October 22, 2026",
    venue: "Skyline Arena, Los Angeles",
    description:
      "An immersive night with top performers, synchronized visuals, and exclusive VIP experiences for music lovers.",
  };

  const total = useMemo(() => {
    const price = ticketType === "vip" ? 129 : 49;
    return price * quantity;
  }, [quantity, ticketType]);

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-5xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
        <section className="w-full space-y-6">
          <div className="overflow-hidden rounded-xl border bg-card">
            <img
              src="/images/ui-prototype/10323198.jpg"
              alt="Event stage"
              className="h-64 w-full object-cover"
            />
            <div className="space-y-3 p-6">
              <Badge>Live Event</Badge>
              <h1 className="text-3xl font-bold text-foreground">{event.title}</h1>
              <p className="text-muted-foreground">
                {event.date} • {event.venue}
              </p>
              <p className="max-w-3xl text-sm text-muted-foreground">{event.description}</p>
            </div>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Buy Tickets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="mb-2 text-sm text-muted-foreground">Ticket Type</p>
                <Select value={ticketType} onValueChange={setTicketType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ticket" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover text-popover-foreground">
                    <SelectItem value="standard">Standard - $49</SelectItem>
                    <SelectItem value="vip">VIP - $129</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <p className="mb-2 text-sm text-muted-foreground">Quantity</p>
                <Input
                  type="number"
                  min={1}
                  max={10}
                  value={quantity}
                  onChange={(event) => setQuantity(Number(event.target.value) || 1)}
                />
              </div>
              <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                Estimated total: <span className="font-semibold text-foreground">${total}</span>
              </div>
              <Button className="w-full" onClick={() => setCheckoutState("completed")}>
                Complete Purchase
              </Button>
              {checkoutState === "completed" ? (
                <p className="text-sm text-primary">Purchase successful for event {eventId}.</p>
              ) : null}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
