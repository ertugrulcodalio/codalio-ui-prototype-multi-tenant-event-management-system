import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b bg-background px-4 py-3">
      <h1 className="text-lg font-semibold text-foreground">EventSphere</h1>
      <Button asChild variant="outline" size="sm">
        <Link to="/events">Discover Events</Link>
      </Button>
    </div>
  );
}
