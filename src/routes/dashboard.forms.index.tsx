import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import TestFormsPage from "@/views/dashboard/TestForms";

export const Route = createFileRoute("/dashboard/forms/")({
  head: () => ({
    meta: [
      { title: "Test Forms | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Test Forms | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <TestFormsPage />
    </ProtectedRoute>
  ),
});
