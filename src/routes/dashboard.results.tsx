import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ResultsSearchPage from "@/views/dashboard/ResultsSearch";

export const Route = createFileRoute("/dashboard/results")({
  head: () => ({
    meta: [
      { title: "Results Search | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Results Search | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ResultsSearchPage />
    </ProtectedRoute>
  ),
});
