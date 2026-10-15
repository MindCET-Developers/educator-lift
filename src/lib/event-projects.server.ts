import { parseEventProjects, type EventProject } from "./event-projects";

const SHEET_PATH = "/v4/spreadsheets/1lVWoYY0_tCj2lfEAAsthAClbweO6-WgNVsimK2YoG8g/values/'תגובות לטופס 1'!A:G";
let cached: { expires: number; projects: EventProject[] } | undefined;
let pending: Promise<EventProject[]> | undefined;

export async function googleRequest(connector: "google_sheets" | "google_drive", path: string) {
  const apiKey = process.env['LOVABLE_API_KEY'];
  const connectionKey = process.env[connector === "google_sheets" ? 'GOOGLE_SHEETS_API_KEY' : 'GOOGLE_DRIVE_API_KEY'];
  if (!apiKey || !connectionKey) throw new Error("Google connection is unavailable");
  const response = await fetch(`https://connector-gateway.lovable.dev/${connector}${path}`, {
    headers: { Authorization: `Bearer ${apiKey}`, "X-Connection-Api-Key": connectionKey },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) {
    const body = await response.text();
    console.error(`Google request failed [${response.status}]: ${body}`);
    throw new Error(`Google request failed [${response.status}]: ${body}`);
  }
  return response;
}

export async function readEventProjects(): Promise<EventProject[]> {
  if (cached && cached.expires > Date.now()) return cached.projects;
  if (pending) return pending;
  pending = (async () => {
    const response = await googleRequest("google_sheets", SHEET_PATH);
    const data = await response.json() as { values?: string[][] };
    const projects = parseEventProjects(data.values ?? []);
    cached = { projects, expires: Date.now() + 5 * 60 * 1000 };
    return projects;
  })();
  try {
    return await pending;
  } finally {
    pending = undefined;
  }
}