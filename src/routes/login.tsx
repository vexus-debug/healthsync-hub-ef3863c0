import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "@/views/Login";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Staff Login | Green Medical Diagnostics" },
      { name: "description", content: "Staff sign-in for Green Medical Diagnostics." },
      { property: "og:title", content: "Staff Login | Green Medical Diagnostics" },
      { property: "og:description", content: "Staff sign-in for Green Medical Diagnostics." },
    ],
  }),
  component: LoginPage,
});
