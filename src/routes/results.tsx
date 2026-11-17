import { createFileRoute } from "@tanstack/react-router";
import ResultsPage from "@/views/Results";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Check Results | Green Medical Diagnostics" },
      { name: "description", content: "Securely check your laboratory results online." },
      { property: "og:title", content: "Check Results | Green Medical Diagnostics" },
      { property: "og:description", content: "Securely check your laboratory results online." },
    ],
  }),
  component: ResultsPage,
});
