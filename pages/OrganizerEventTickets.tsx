import { useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

type TicketType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  sold: number;
  active: boolean;
};

export default function OrganizerEventTickets() {
  const { event_id } = useParams();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("49");
  const [quantity, setQuantity] = useState("100");
  const [ticketTypes, setTicketTypes] = useState<TicketType[]>([
    { id: "t-1", name: "Standard", price: 49, quantity: 500, sold: 240, active: true },
    { id: "t-2", name: "VIP", price: 129, quantity: 100, sold: 78, active: true },
  ]);

  const addTicketType = () => {
    if (!name) {
      return;
    }

    setTicketTypes((prev) => [
      ...prev,
      {
        id: `t-${prev.length + 1}`,
        name,
        price: Number(price),
        quantity: Number(quantity),
        sold: 0,
        active: true,
      },
    ]);

    setDialogOpen(false);
    setName("");
  };

  const deleteTicketType = (id: string) => {
    setTicketTypes((prev) => prev.filter((ticket) => ticket.id !== id));
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
        <section className="w-full">
          <Card className="max-w-5xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Ticket Types for {event_id}</CardTitle>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button>Add Ticket Type</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create ticket type</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input id="price" type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="qty">Quantity</Label>
                      <Input id="qty" type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                    </div>
                    <Button onClick={addTicketType} className="w-full">
                      Save Ticket Type
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Sold</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ticketTypes.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell>{ticket.name}</TableCell>
                        <TableCell>${ticket.price}</TableCell>
                        <TableCell>{ticket.quantity}</TableCell>
                        <TableCell>{ticket.sold}</TableCell>
                        <TableCell>
                          <Badge variant={ticket.active ? "default" : "secondary"}>{ticket.active ? "active" : "inactive"}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="ghost" onClick={() => deleteTicketType(ticket.id)}>
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
