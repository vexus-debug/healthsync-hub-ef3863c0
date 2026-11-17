import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScansListPage from "@/views/scan/Scans";

export const Route = createFileRoute("/scan-dashboard/scans/")({
  head: () => ({
    meta: [
      { title: "Scans | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Scans | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScansListPage />
    </ProtectedRoute>
  ),
});
