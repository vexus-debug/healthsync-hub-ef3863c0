import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ShopAdminPage from "@/views/dashboard/ShopAdmin";

export const Route = createFileRoute("/dashboard/shop")({
  head: () => ({
    meta: [
      { title: "Shop Admin | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Shop Admin | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ShopAdminPage />
    </ProtectedRoute>
  ),
});
