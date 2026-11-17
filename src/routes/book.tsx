import { createFileRoute } from "@tanstack/react-router";
import BookPage from "@/views/Book";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Test | Green Medical Diagnostics" },
      { name: "description", content: "Book a confidential lab test or home sample pickup." },
      { property: "og:title", content: "Book a Test | Green Medical Diagnostics" },
      { property: "og:description", content: "Book a confidential lab test or home sample pickup." },
    ],
  }),
  component: BookPage,
});
