import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, UserCircle2 } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function AppHeader() {
  const location = useLocation();
  const [role, setRole] = useState<"customer" | "organizer">("customer");

  return (
    <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground">EventSphere</span>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            {role === "customer" ? "Attendee" : "Organizer"}
          </Badge>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button asChild variant={location.pathname === "/" ? "secondary" : "ghost"}>
                <Link to="/">Home</Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button asChild variant={location.pathname === "/events" ? "secondary" : "ghost"}>
                <Link to="/events">Discover Events</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setRole((prev) => (prev === "customer" ? "organizer" : "customer"))}
            className="hidden sm:inline-flex"
          >
            Switch to {role === "customer" ? "Organizer" : "Attendee"}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <UserCircle2 className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover text-popover-foreground">
              <DropdownMenuItem onClick={() => setRole("customer")}>Use attendee view</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRole("organizer")}>Use organizer view</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <nav className="mt-6 flex flex-col gap-2">
                <Button asChild variant="ghost" className="justify-start">
                  <Link to="/">Home</Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start">
                  <Link to="/events">Discover Events</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
