export type EventProject = {
  n: string;
  authors: string;
  title: string;
  desc: string;
  url: string;
  image?: string;
};

export function safeProjectUrl(value: string): string | undefined {
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" || url.username || url.password) return undefined;
    return url.href;
  } catch {
    return undefined;
  }
}

export function driveImageId(value: string): string | undefined {
  const link = value.split(/,\s*/)[0];
  if (!link) return undefined;
  try {
    const url = new URL(link.trim());
    if (url.hostname !== "drive.google.com") return undefined;
    const id = url.pathname.match(/\/file\/d\/([\w-]+)/)?.[1] ?? url.searchParams.get("id");
    return id && /^[\w-]{10,200}$/.test(id) ? id : undefined;
  } catch {
    return undefined;
  }
}

export function parseEventProjects(values: string[][]): EventProject[] {
  const headers = values[0] ?? [];
  const field = (row: string[], label: string) => row[headers.indexOf(label)]?.trim() ?? "";
  return values.slice(1).flatMap((row, index) => {
    const url = safeProjectUrl(field(row, "קישור לאפליקציה"));
    const authors = field(row, "שמות אנשי הצוות");
    const solution = field(row, "הפתרון במשפט- מה הוא עושה, למי הוא מיועד?");
    if (!url || !authors || !solution) return [];
    const imageId = driveImageId(field(row, "תמונה- צילום מסך מרכזי/תמונה שצילמתם של המוצר/לוגו"));
    return [{
      n: String(index + 1).padStart(2, "0"),
      authors,
      title: solution,
      desc: field(row, "מה היה האתגר?"),
      url,
      ...(imageId ? { image: `/api/public/event-project-image?id=${imageId}` } : {}),
    }];
  });
}