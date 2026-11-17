import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ResultEntryPage from "@/views/dashboard/ResultEntry";

export const Route = createFileRoute("/dashboard/forms/$serial")({
  head: () => ({
    meta: [
      { title: "Result Entry | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Result Entry | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ResultEntryPage />
    </ProtectedRoute>
  ),
});
