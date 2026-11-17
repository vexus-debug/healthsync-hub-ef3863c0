import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/views/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Green Medical Diagnostics" },
      { name: "description", content: "Get in touch with Green Medical Diagnostics and Services." },
      { property: "og:title", content: "Contact Us | Green Medical Diagnostics" },
      { property: "og:description", content: "Get in touch with Green Medical Diagnostics and Services." },
    ],
  }),
  component: ContactPage,
});
