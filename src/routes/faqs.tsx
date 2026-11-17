import { createFileRoute } from "@tanstack/react-router";
import FAQsPage from "@/views/FAQs";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Green Medical Diagnostics" },
      { name: "description", content: "Answers to common questions about our lab tests and services." },
      { property: "og:title", content: "FAQs | Green Medical Diagnostics" },
      { property: "og:description", content: "Answers to common questions about our lab tests and services." },
    ],
  }),
  component: FAQsPage,
});
