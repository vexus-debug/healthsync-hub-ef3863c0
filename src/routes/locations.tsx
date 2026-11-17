import { createFileRoute } from "@tanstack/react-router";
import LocationsPage from "@/views/Locations";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations | Green Medical Diagnostics" },
      { name: "description", content: "Find Green Medical Diagnostics laboratory locations in Port Harcourt." },
      { property: "og:title", content: "Locations | Green Medical Diagnostics" },
      { property: "og:description", content: "Find Green Medical Diagnostics laboratory locations in Port Harcourt." },
    ],
  }),
  component: LocationsPage,
});
