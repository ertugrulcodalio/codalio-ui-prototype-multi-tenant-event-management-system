import { type FormEvent, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

export default function OrganizerEventNew() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [category, setCategory] = useState("music");
  const [statusMessage, setStatusMessage] = useState("");

  const handlePublish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage(`Published ${title}`);
  };

  const handleDraft = () => {
    setStatusMessage(`Draft saved for ${title || "Untitled event"}`);
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
        <section className="w-full">
          <Card className="max-w-3xl">
            <CardHeader>
              <CardTitle>New Event Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handlePublish}>
                <div className="space-y-2">
                  <Label htmlFor="title">Event Title</Label>
                  <Input id="title" value={title} onChange={(event) => setTitle(event.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" rows={4} value={description} onChange={(event) => setDescription(event.target.value)} />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date & Time</Label>
                    <Input id="date" type="datetime-local" value={dateTime} onChange={(event) => setDateTime(event.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover text-popover-foreground">
                        <SelectItem value="music">Music</SelectItem>
                        <SelectItem value="culture">Culture</SelectItem>
                        <SelectItem value="networking">Networking</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button type="submit">Publish Event</Button>
                  <Button type="button" variant="secondary" onClick={handleDraft}>
                    Save as Draft
                  </Button>
                </div>
                {statusMessage ? <p className="text-sm text-primary">{statusMessage}</p> : null}
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
