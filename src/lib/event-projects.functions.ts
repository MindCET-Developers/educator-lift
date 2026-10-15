import { createServerFn } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";

export const getEventProjects = createServerFn({ method: "GET" }).handler(async () => {
  const { readEventProjects } = await import("./event-projects.server");
  try {
    return { projects: await readEventProjects(), unavailable: false };
  } catch {
    return { projects: [], unavailable: true };
  }
});

export const eventProjectsOptions = queryOptions({
  queryKey: ["science-museum-projects"],
  queryFn: () => getEventProjects(),
  staleTime: 5 * 60 * 1000,
});