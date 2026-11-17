import { createFileRoute } from "@tanstack/react-router";
import ServicesPage from "@/views/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Lab Tests & Services | Green Medical Diagnostics" },
      { name: "description", content: "Browse confidential laboratory tests and medical services." },
      { property: "og:title", content: "Lab Tests & Services | Green Medical Diagnostics" },
      { property: "og:description", content: "Browse confidential laboratory tests and medical services." },
    ],
  }),
  component: ServicesPage,
});
