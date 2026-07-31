import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";

export default function OrganizerEventDetail() {
  const { event_id } = useParams();
  const [title, setTitle] = useState("Neon City Festival");
  const [details, setDetails] = useState("Update lineup, schedule, and venue details.");
  const [status, setStatus] = useState("draft");
  const [featured, setFeatured] = useState(true);
  const [notice, setNotice] = useState("");

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
        <section className="w-full">
          <Card className="max-w-4xl">
            <CardHeader>
              <CardTitle>Manage Event</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-muted p-3 text-sm text-muted-foreground">Editing event: {event_id}</div>
              <div className="space-y-2">
                <Label htmlFor="title">Event title</Label>
                <Input id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Details</Label>
                <Textarea id="details" rows={4} value={details} onChange={(event) => setDetails(event.target.value)} />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label className="mb-2 block">Status</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover text-popover-foreground">
                      <SelectItem value="draft">draft</SelectItem>
                      <SelectItem value="published">published</SelectItem>
                      <SelectItem value="cancelled">cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between rounded-md border px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">Featured event</p>
                    <p className="text-xs text-muted-foreground">Promote this event in discovery lists.</p>
                  </div>
                  <Switch checked={featured} onCheckedChange={setFeatured} />
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => setNotice("Changes saved")}>Save</Button>
                <Button variant="secondary" onClick={() => setNotice("Event published")}>
                  Publish
                </Button>
                <Button variant="destructive" onClick={() => setNotice("Event cancelled")}>
                  Cancel Event
                </Button>
              </div>
              {notice ? <p className="text-sm text-primary">{notice}</p> : null}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
