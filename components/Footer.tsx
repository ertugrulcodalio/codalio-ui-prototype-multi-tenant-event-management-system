import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="border-t bg-card px-4 py-6">
      <Separator className="mb-4" />
      <p className="text-sm text-muted-foreground">© EventSphere</p>
    </footer>
  );
}
