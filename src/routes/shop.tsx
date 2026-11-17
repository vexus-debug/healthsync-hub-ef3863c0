import { createFileRoute } from "@tanstack/react-router";
import ShopPage from "@/views/Shop";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop | Green Medical Diagnostics" },
      { name: "description", content: "Health products from Green Medical Diagnostics." },
      { property: "og:title", content: "Shop | Green Medical Diagnostics" },
      { property: "og:description", content: "Health products from Green Medical Diagnostics." },
    ],
  }),
  component: ShopPage,
});
