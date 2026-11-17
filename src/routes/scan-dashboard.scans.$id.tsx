import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanDetailPage from "@/views/scan/ScanDetail";

export const Route = createFileRoute("/scan-dashboard/scans/$id")({
  head: () => ({
    meta: [
      { title: "Scan Detail | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Scan Detail | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanDetailPage />
    </ProtectedRoute>
  ),
});
