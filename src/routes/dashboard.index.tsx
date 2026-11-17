import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import DashboardPage from "@/views/dashboard/Dashboard";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({
    meta: [
      { title: "Dashboard | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Dashboard | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  ),
});
