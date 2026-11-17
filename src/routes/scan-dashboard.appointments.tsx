import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanAppointmentsPage from "@/views/scan/Appointments";

export const Route = createFileRoute("/scan-dashboard/appointments")({
  head: () => ({
    meta: [
      { title: "Appointments | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Appointments | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanAppointmentsPage />
    </ProtectedRoute>
  ),
});
