import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ManageTestsPage from "@/views/dashboard/ManageTests";

export const Route = createFileRoute("/dashboard/manage-tests")({
  head: () => ({
    meta: [
      { title: "Manage Tests | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Manage Tests | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ManageTestsPage />
    </ProtectedRoute>
  ),
});
