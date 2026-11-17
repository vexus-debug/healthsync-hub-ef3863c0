import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanPatientDetailPage from "@/views/scan/PatientDetail";

export const Route = createFileRoute("/scan-dashboard/patients/$id")({
  head: () => ({
    meta: [
      { title: "Patient Detail | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Patient Detail | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanPatientDetailPage />
    </ProtectedRoute>
  ),
});
