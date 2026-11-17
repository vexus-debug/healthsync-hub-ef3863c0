import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanPatientsPage from "@/views/scan/Patients";

export const Route = createFileRoute("/scan-dashboard/patients/")({
  head: () => ({
    meta: [
      { title: "Scan Patients | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Scan Patients | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanPatientsPage />
    </ProtectedRoute>
  ),
});
