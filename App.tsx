import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerMyBookings from "./pages/CustomerMyBookings";
import CustomerSignup from "./pages/CustomerSignup";
import EventDetail from "./pages/EventDetail";
import Events from "./pages/Events";
import Landing from "./pages/Landing";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import OrganizerEventBookings from "./pages/OrganizerEventBookings";
import OrganizerEventDetail from "./pages/OrganizerEventDetail";
import OrganizerEventNew from "./pages/OrganizerEventNew";
import OrganizerEvents from "./pages/OrganizerEvents";
import OrganizerEventTickets from "./pages/OrganizerEventTickets";
import OrganizerLogin from "./pages/OrganizerLogin";
import OrganizerSignup from "./pages/OrganizerSignup";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:event_id" element={<EventDetail />} />
          <Route path="/customer/login" element={<CustomerLogin />} />
          <Route path="/customer/signup" element={<CustomerSignup />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/customer/my-bookings" element={<CustomerMyBookings />} />
          <Route path="/organizer/login" element={<OrganizerLogin />} />
          <Route path="/organizer/signup" element={<OrganizerSignup />} />
          <Route path="/organizer/dashboard" element={<OrganizerDashboard />} />
          <Route path="/organizer/events" element={<OrganizerEvents />} />
          <Route path="/organizer/events/new" element={<OrganizerEventNew />} />
          <Route path="/organizer/events/:event_id" element={<OrganizerEventDetail />} />
          <Route path="/organizer/events/:event_id/tickets" element={<OrganizerEventTickets />} />
          <Route path="/organizer/events/:event_id/bookings" element={<OrganizerEventBookings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
