import { Building2, CalendarCheck, CalendarDays, House, LayoutDashboard, Search, Ticket, type LucideIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";
import AppFooter from "./AppFooter"
import AppHeader from "./AppHeader"
type NavItem = {
  label: string
  href: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: House },
  { label: "Discover Events", href: "/events", icon: Search },
  { label: "Customer Dashboard", href: "/customer/dashboard", icon: LayoutDashboard },
  { label: "My Bookings", href: "/customer/my-bookings", icon: Ticket },
  { label: "Organizer Dashboard", href: "/organizer/dashboard", icon: Building2 },
  { label: "Manage Events", href: "/organizer/events", icon: CalendarCheck },
]

export default function Layout() {
  const location = useLocation()

  const breadcrumbLabel =
    navItems.find((item) => item.href === location.pathname)?.label ??
    location.pathname.split("/").filter(Boolean).join(" / ")

  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader>
          <Link to="/" className="flex items-center gap-2 rounded-md px-2 py-1">
            <Avatar className="h-8 w-8 rounded-md bg-primary/10">
              <AvatarFallback className="rounded-md bg-primary/10 text-primary">
                <CalendarDays className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="group-data-[collapsible=icon]:hidden">
              <p className="text-sm font-semibold text-sidebar-foreground">EventSphere</p>
              <p className="text-xs text-sidebar-foreground/70">Multi-Tenant Event Management System</p>
            </div>
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.href}>
                    <Link to={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <Button variant="ghost" className="justify-start group-data-[collapsible=icon]:justify-center">
            <Building2 className="h-4 w-4" />
            <span className="group-data-[collapsible=icon]:hidden">Workspace Settings</span>
          </Button>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-h-screen bg-background text-foreground">
        <div className="sticky top-0 z-20 border-b bg-background/95 px-4 py-3 backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-5" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="capitalize">{breadcrumbLabel || "Home"}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <AppHeader />
        <div className="w-full min-w-0 flex-1 p-4 md:p-6">
          <Outlet />
        </div>
        <AppFooter />
      </SidebarInset>
    </SidebarProvider>
  )
}