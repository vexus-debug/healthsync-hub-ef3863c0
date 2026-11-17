import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import CompletedResultsPage from "@/views/dashboard/Completed";

export const Route = createFileRoute("/dashboard/completed")({
  head: () => ({
    meta: [
      { title: "Completed Results | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Completed Results | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <CompletedResultsPage />
    </ProtectedRoute>
  ),
});
