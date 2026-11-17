import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanOverviewPage from "@/views/scan/Overview";

export const Route = createFileRoute("/scan-dashboard/")({
  head: () => ({
    meta: [
      { title: "Scan Overview | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Scan Overview | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanOverviewPage />
    </ProtectedRoute>
  ),
});
