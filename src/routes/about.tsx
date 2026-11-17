import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/views/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Green Medical Diagnostics" },
      { name: "description", content: "Learn about Green Medical Diagnostics and Services, our mission and values." },
      { property: "og:title", content: "About Us | Green Medical Diagnostics" },
      { property: "og:description", content: "Learn about Green Medical Diagnostics and Services, our mission and values." },
    ],
  }),
  component: AboutPage,
});
