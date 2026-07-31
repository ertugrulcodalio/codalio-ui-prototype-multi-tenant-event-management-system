import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function AppFooter() {
  return (
    <footer className="mt-12 border-t bg-card/50">
      <div className="px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-foreground">EventSphere</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Multi-tenant event operations for organizers and attendees.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground">Platform</h4>
            <div className="mt-3 flex flex-col gap-2">
              <Button asChild variant="link" className="h-auto justify-start p-0 text-muted-foreground">
                <Link to="/events">Discover Events</Link>
              </Button>
              <Button asChild variant="link" className="h-auto justify-start p-0 text-muted-foreground">
                <Link to="/organizer/login">Organizer Tools</Link>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground">Company</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              <span>About</span>
              <span>Contact</span>
              <span>Support</span>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <p className="text-sm text-muted-foreground">© EventSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}
