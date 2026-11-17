import { createFileRoute } from "@tanstack/react-router";
import PharmacyPage from "@/views/Pharmacy";

export const Route = createFileRoute("/pharmacy")({
  head: () => ({
    meta: [
      { title: "Pharmacy | Green Medical Diagnostics" },
      { name: "description", content: "Medicines and pharmacy services from Green Medical Diagnostics." },
      { property: "og:title", content: "Pharmacy | Green Medical Diagnostics" },
      { property: "og:description", content: "Medicines and pharmacy services from Green Medical Diagnostics." },
    ],
  }),
  component: PharmacyPage,
});
