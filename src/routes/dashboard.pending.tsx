import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import PendingPage from "@/views/dashboard/Pending";

export const Route = createFileRoute("/dashboard/pending")({
  head: () => ({
    meta: [
      { title: "Pending Results | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Pending Results | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <PendingPage />
    </ProtectedRoute>
  ),
});
