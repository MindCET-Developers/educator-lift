import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/event-project-image")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const id = new URL(request.url).searchParams.get("id");
        if (!id || !/^[\w-]{10,200}$/.test(id)) return new Response("Not found", { status: 404 });
        const { readEventProjects, googleRequest } = await import("@/lib/event-projects.server");
        try {
          const projects = await readEventProjects();
          // Only files explicitly submitted to this public gallery may be served.
          if (!projects.some(project => project.image === `/api/public/event-project-image?id=${id}`)) {
            return new Response("Not found", { status: 404 });
          }
          const response = await googleRequest("google_drive", `/drive/v3/files/${id}?alt=media`);
          const type = response.headers.get("content-type")?.split(";")[0] ?? "";
          if (!["image/jpeg", "image/png", "image/webp", "image/gif"].includes(type)) {
            return new Response("Unsupported image", { status: 415 });
          }
          return new Response(response.body, {
            headers: { "Content-Type": type, "Cache-Control": "public, max-age=300", "X-Content-Type-Options": "nosniff" },
          });
        } catch {
          return new Response("Image unavailable", { status: 502 });
        }
      },
    },
  },
});