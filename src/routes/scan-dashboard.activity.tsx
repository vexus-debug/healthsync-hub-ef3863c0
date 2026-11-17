import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanActivityPage from "@/views/scan/Activity";

export const Route = createFileRoute("/scan-dashboard/activity")({
  head: () => ({
    meta: [
      { title: "Activity | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Activity | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanActivityPage />
    </ProtectedRoute>
  ),
});
