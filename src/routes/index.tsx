import { createFileRoute } from "@tanstack/react-router";
import IndexPage from "@/views/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green Medical Diagnostics — Confidential Medical Laboratory in Port Harcourt" },
      { name: "description", content: "Confidential lab tests, consultations, pharmacy and home sample pickup in Port Harcourt." },
      { property: "og:title", content: "Green Medical Diagnostics — Confidential Medical Laboratory in Port Harcourt" },
      { property: "og:description", content: "Confidential lab tests, consultations, pharmacy and home sample pickup in Port Harcourt." },
    ],
  }),
  component: IndexPage,
});
