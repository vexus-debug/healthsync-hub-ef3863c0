import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScientistsPage from "@/views/dashboard/Scientists";

export const Route = createFileRoute("/dashboard/scientists")({
  head: () => ({
    meta: [
      { title: "Scientists | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Scientists | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScientistsPage />
    </ProtectedRoute>
  ),
});
