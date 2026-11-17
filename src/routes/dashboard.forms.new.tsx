import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import NewTestFormPage from "@/views/dashboard/NewTestForm";

export const Route = createFileRoute("/dashboard/forms/new")({
  head: () => ({
    meta: [
      { title: "New Test Form | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "New Test Form | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <NewTestFormPage />
    </ProtectedRoute>
  ),
});
