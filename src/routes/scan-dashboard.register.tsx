import { createFileRoute } from "@tanstack/react-router";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import ScanRegisterPage from "@/views/scan/Register";

export const Route = createFileRoute("/scan-dashboard/register")({
  head: () => ({
    meta: [
      { title: "Register Scan | Green Medical Diagnostics" },
      { name: "description", content: "Green Medical Diagnostics staff area." },
      { property: "og:title", content: "Register Scan | Green Medical Diagnostics" },
      { property: "og:description", content: "Green Medical Diagnostics staff area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <ScanRegisterPage />
    </ProtectedRoute>
  ),
});
