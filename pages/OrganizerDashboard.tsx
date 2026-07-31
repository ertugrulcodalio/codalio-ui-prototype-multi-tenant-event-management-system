import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "../components/ui/table";

export default function OrganizerDashboard() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-6 md:px-6">
        <section className="w-full space-y-5">
          <h1 className="text-2xl font-semibold text-foreground">Organization Overview</h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Total Events", value: "8" },
              { label: "Published", value: "5" },
              { label: "Total Bookings", value: "1,284" },
              { label: "Revenue", value: "$48,320" },
            ].map((metric) => (
              <Card key={metric.label}>
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">{metric.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Recent bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  {[
                    ["Alyssa M.", "Neon City Festival", "$98"],
                    ["Victor P.", "Founders Connect", "$49"],
                    ["Sam T.", "Lantern Nights", "$129"],
                  ].map((row) => (
                    <TableRow key={row[0]}>
                      <TableCell>{row[0]}</TableCell>
                      <TableCell>{row[1]}</TableCell>
                      <TableCell className="text-right">{row[2]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
