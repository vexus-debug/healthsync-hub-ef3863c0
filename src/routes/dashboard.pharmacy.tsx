import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import PharmacyAdminPage from "@/views/dashboard/PharmacyAdmin";

export const Route = createFileRoute("/dashboard/pharmacy")({
  head: () => ({
    meta: [
      { title: "Pharmacy Admin | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Pharmacy Admin | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <PharmacyAdminPage />
    </ProtectedRoute>
  ),
});
